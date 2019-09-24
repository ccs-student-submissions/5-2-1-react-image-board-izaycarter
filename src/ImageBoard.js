import React, {Component} from "react";
import {FaPlusCircle} from "react-icons/fa";


    class AddImage extends Component {
        constructor(props){
            super(props)
            this.state = {};
        }
        render(){
            return(
                <div>
                <form>
                <input type="text" placeholder="imageURL"/>
                <button>ADD IMAGE</button>
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
        constructor(props) {
            super(props)
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
