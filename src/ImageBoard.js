import React, {Component} from "react";
import {FaPlusCircle} from "react-icons/fa";


    class AddImage extends Component {
        constructor(props) {
            super(props);
            this.state = {
                url:"",
                caption:""
            };

            this.addImg = this.addImage.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event){
        // [event.target.name] alows you to arget multiplue inputs when being used
        this.setState({[event.target.name]: event.target.value});
        }

        addImage(event){
            event.preventDefault();

            let image = {
                url: this.state.url,
                caption: this.state.caption
            };

            this.props.addImage(image);
        }

        render(){
            return(
                <div>
                    <button>
                    <FaPlusCircle />
                    </button>
                    <form onSubmit={this.addImage}>
                    <input type="text" name="url" placeholder="imageURL" value={this.state.url} onChange={this.handleChange}/>
                    <input type="text" name="caption" placeholder="captions" value={this.state.caption} onChange={this.handleChange}/>
                    <button> ADD IMAGE </button>
                    <button type="button">cancel</button>
                    </form>
                </div>


              )
        }
    }


    class ImageItem extends Component{
      constructor(props){
        super(props);

          this.state = {
            isEditing: false,
                images: this.props.images,
                caption: "",

              }
              this.editCaption = this.editCaption.bind(this);
              this.handleChange = this.handleChange.bind(this);
              this.saveCaption = this.saveCaption.bind(this);
            }

            editCaption(){
              this.setState((prevState, props ) => ({isEditing: !prevState.isEditing}));
            }

            handleChange(e) {
              this.setState({[e.target.name]: e.target.value})
            }

            saveCaption(){
              this.setState((prevState, props) => ({isEditing: !prevState.isEditing}));
              this.props.updateCaption(this.props.image, this.state.caption);
            }

            render(){
              const isEditing = this.state.isEditing;
                return(
                    <div>
                    {isEditing ? (
                      <div>
                        <div>
                          <img src={this.props.image.url}/>
                        </div>
                        <div>
                          <input type="text" name="caption" value={this.state.caption} onChange={this.handleChange} />
                          <button type="button" onClick={this.saveCaption}>save</button>
                        </div>
                      </div>) : (
                      <div>
                        <div>
                          <img src={this.props.image.url}/>
                        </div>
                        <div>
                          {this.props.image.caption}
                          <button type="button" onClick={this.editCaption}>Edit</button>
                          <button onClick={this.props.removeImage}>delete</button>
                        </div>
                      </div>
                    )}
                    </div>
                );
            }
        }

    class ImageBoard extends Component {
        constructor(props){
            super(props);
            this.state = {
                images:[]
            };
            this.addImage = this.addImage.bind(this);
            this.updateCaption = this.updateCaption.bind(this);
            this.removeImage = this.removeImage.bind(this);

          }

        removeImage(index){
          let images = this.state.images;
          images.splice(index,1);
          this.setState({images:images})
        }

        componentDidMount() {
          let defaultImages = [{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqOUT55qkYhpeIZPaabgyjlEpyUKfNQuVgFzyPV2xj5i79gOS", caption: "the moon"},];
          this.setState({images: defaultImages});
        }

        addImage(image){
          let images = [...this.state.images]
          images.push(image);
          this.setState({images: images})
        }



        updateCaption(prevImage, caption) {
          let images = [...this.state.images];
          let index = images.indexOf(prevImage);
          images[index].caption = caption
          this.setState({images:images});
        }



        render(){
          let images = this.state.images.map((image,index) => {
            return <ImageItem key={index} image={image} updateCaption={this.updateCaption}  removeImage = {() => this.removeImage(image)}/>
          });

            return (
                <div>
                    <div>
                    <AddImage addImage={this.addImg}/>
                    </div>
                    {images}
                </div>


            );
        };
    }

export default ImageBoard;
