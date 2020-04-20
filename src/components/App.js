import React from 'react';
import Customizer from './Customizer';
import Display from './Display';
import Md from './Md';
import '../style/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: `
Markdown Tab
===============
### A *Markdown* page that comes up __everytime__ we open a new tab

> Take notes, keep lists, save links, or be reminded of pictures or quotes.

John Gruber and Aaron Swartz created the Markdown language in 2004. Its key design goal is readability. That the language be readable as-is, without looking like it has been marked up with tags or formatting instructions, unlike text formatted with a markup language, such as Rich Text Format (RTF) or HTML, which have obvious tags and formatting instructions. [More Info.](https://en.wikipedia.org/wiki/Markdown)

![Pokemon](https://media3.giphy.com/media/1342dTzTKIkbC0/giphy.gif?cid=790b76115d0d0a7872327a6e6307d86c&rid=giphy.gif)


---

# Examples:

[pica](https://nodeca.github.io/pica/demo/) - high quality and fast image
resize in browser.

- first thing
- second thing
- third thing

1. first thing
2. second thing
3. third thing


### Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
>>> ...or with spaces between arrows.


### Code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


### Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


### Images

![Minion](https://octodex.github.com/images/minion.png)
![Alt text][id]
With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
      `
    };
  }

  onClick = (text) => {
     this.setState({
       text: text
     });
  }

  render(){


    return (
    <div className="container">
      <div className='tooSmall'> Please make the window bigger. </div>
      <button className='display-btn' onClick={growShrink}>X</button>

      <Customizer />
      <Md setText={this.onClick} default={this.state.text}/>
      <Display text={this.state.text} />
    </div>
  )}
}

const growShrink = () =>{
  const display = document.querySelector('.display');
  display.classList.toggle("full-screen");
  const md = document.querySelector('.md');
  md.classList.toggle("slide-left");
  const customizer = document.querySelector('.customizer');
  customizer.classList.toggle("slide-up");
}

export default App;
