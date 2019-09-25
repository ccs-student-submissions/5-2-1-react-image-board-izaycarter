import React, {Component} from "react";
import {FaPlusCircle} from "react-icons/fa";


    class AddImage extends Component {
        constructor(props) {
            super(props);
            this.state = {
                url:"",
                cap:"",

            };

            this.addImg = this.addImg.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event){
        // [event.target.name] alows you to arget multiplue inputs when being used
        this.setState({[event.target.name]: event.target.value})
        }

        addImg(event){
            event.preventDefault();
            let image = {
                url: this.state.url,
                cap: this.state.cap
            } ;
        }

        render(){
            return(
                <div>
                <form onSubmit={this.addImg}>
                <input type="text" name="url" placeholder="imageURL" value={this.state.image} onChange={this.handleChange}/>
                <input type="text" name="cap" placeholder="captions" value={this.state.image} onChange={this.handleChange}/>
                <button> ADD IMAGE </button>
                <button type="button">cancle</button>
                </form>
                </div>
            )
        }
    }


    class PlusButton extends Component {

        render(){
            return(
                <div>
                <button>
                <FaPlusCircle />
                </button>
                </div>
            )

        }
    }


    class ImageBoard extends Component {
        constructor(props){
            super(props);
            this.state={ images:[]}
        }

        AddImage(img){
            let images = [...this.state.ImageBoard];
            images.unshift(img);
            this.setState({images: images})
            console.log(this.state.images);
        }

        render(){
            return (
            <div>
            <PlusButton />
            <AddImage />
            </div>
            );
        };
    }

export default ImageBoard;
