import React  from "react";
import ReactMarkdown from "react-markdown";

import './App.css';

var output = document.getElementById('output_id');
var editor = document.getElementById('editor_id');

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt : "" };
  }
  
  render() {
    return(
      <>
        <div id="editor_id" onScroll={()=>{ output.scrollTop = editor.scrollTop;}}>
              <textarea onChange={(event) => {this.setState({txt: event.target.value})}}>
              </textarea>
        
        </div>
        <div id="output_id" onScroll={() => { editor.scrollTop = output.scrollTop;}}>
        <pre><ReactMarkdown>{this.state.txt}</ReactMarkdown></pre>
       </div>
      </>
        );
  }
}
function App() {
  return (
    <>
      <h1 id="head">ReadMe.md Writer</h1>
      <Editor/>
    </>
     );
}

export default App;
