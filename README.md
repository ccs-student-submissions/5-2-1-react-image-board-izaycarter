# 7.3 REACT IMAGE BOARD

Create an image board that saves submissions to state using React

## Objectives

### Learning Objectives

After completing this assignment, you should...

* Be able to create a project that create-react-app
* Be able to use React components as a View layer

### Performance Objectives

After completing this assignment, you be able to effectively use...

* A basic React Component
* React state
* Pass state using props
* Hook up an event in a React Component to capture user input and update state

## Details

**Before you start!!**

[Watch Pete Hunt](https://youtu.be/x7cQ3mrcKaY)

[Read Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### Deliverables

* A repo containing create-react-app project:
* Three react components in your App.js:

```
class ImageForm extends Component(
  render() {
    return(
      <form>
        ...
      </form>
    )
  }
);

class ImageList extends Component(
  render() {
    return(
      <ul>
        ...
      </ul>
    )
  }
);

class ImageBoard extends Component(
  render() {
    return(
      <div>
        <ImageForm />
        <ImageList />
      </div>
    )
  }
)
```

## I'M A WEB DEVELOPER MODE

Using the tools you've learned in class, create a responsive image board that allows you to add images and captions via a url. The images that are added to the image board should be saved using React state. Below are screenshots of what your app could look like. But feel free to use some creative freedom.

The design shows a "+" icon at the top, this should direct you to django admin.

**MOBILE**

<img src="https://github.com/ccs-student-submissions/7.2-react_image_board/blob/master/mobile.png" /> 


**DESKTOP**

<img src="https://github.com/ccs-student-submissions/7.2-react_image_board/blob/master/desktop.png" /> 


**ADD IMAGE FORM**

<img src="https://github.com/ccs-student-submissions/7.2-react_image_board/blob/master/add.png" /> 


## Hey Mikey, I Think He Likes It Mode

- The form to add an image should properly validate the image URL by at minimum
  checking for a http:// or https:// prefix and require a non-empty description.
- Create a login page and add the username to the images

