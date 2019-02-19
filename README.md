# 7.2 REACT IMAGE BOARD

Create an image board that saves submissions to a server using jQuery + React

## Objectives

### Learning Objectives

After completing this assignment, you should...

* Be able to create a project that uses AJAX to GET and POST data to a Django server
* Be able to use React components as Views in an Django app

### Performance Objectives

After completing this assignment, you be able to effectively use...

* A basic React Component
* A Component's lifecycle method componentDidMount to make a GET AJAX request
* Hook up an event in a React Component to make a POST AJAX request

## Details

**Before you start!!**

[Watch Pete Hunt](https://youtu.be/x7cQ3mrcKaY)

[Read Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### Deliverables

* A repo containing at least:
  * index.html
  * scripts/index.js
  * scripts/models/image.js
  * scripts/components/main.jsx
* Three react components in your main.jsx:

```
var ImageForm = React.createClass({
  render: function(){
    return (
      <form>
        ...
      </form>
    );
  }
});


var ImageList = React.createClass({
  render: function(){
    return (
      <ul>
        ...
      </ul>
    );
  }
});

var ImageBoard = React.createClass({
  render: function(){
    return (
      <div>
        <ImageForm />
        <ImageList />
      </div>
    );
  }
});
```

### Requirements

* pep8 and pep20 compliant code

## I'M A WEB DEVELOPER MODE

Using the tools you've learned in class, create a responsive image board that allows you to add images and captions via a url. The images that are added to the image board should be saved using django admin. Below are screenshots of what your app could look like. But feel free to use some creative freedom.

The design shows a "+" icon at the top, this should direct you to django admin.

## Hey Mikey, I Think He Likes It Mode

- The form to add an image should properly validate the image URL by at minimum
  checking for a http:// or https:// prefix and require a non-empty description.
- Create a login page and add the username to the images

