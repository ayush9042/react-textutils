import React, {useState} from 'react'

export default function TextForm(props) {


  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    console.log(newText);
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  }

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }


  return (
    <>
          <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
          <h1>{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-1">Convert To Uppercase</button>
            <button onClick={handleLowClick} className="btn btn-primary mx-1">Convert To Lowercase</button>
            <button onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>
            <button onClick={handleCopy} className="btn btn-primary mx-1">Copy Text</button>
            <button onClick={handleExtraSpaces} className="btn btn-primary mx-1">Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{ color: props.mode==='light'?'black':'white'}}>
          <h2>Your Summary</h2>
          <p>{text.split(" ").length} words, {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter your text above in inbox to analyze"}</p>
        </div>
    </>
  )
}
