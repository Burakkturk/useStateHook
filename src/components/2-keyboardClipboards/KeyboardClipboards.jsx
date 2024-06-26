import { useState } from "react"


const KeyboardClipboards = () => {
  const [content, setContent] = useState("")

  const handleKeyDown = (e) => {

    if(e.keyCode >=48 && e.keyCode <= 57){
      alert("Please dont enter a number")
      e.preventDefault()
  }
}
const handlePaste = (e) => {
  console.log(e.target)
  e.target.className = "form-control border border-danger border-4"
  e.target.style.fontSize = "20px"
}

const handleCopy = (e) => {
  alert("Copying İllegal")
  e.preventDefault()
}
  return (
    <div className="container mt-4">
    <h2 className="text-center">Keyboard-Clipboard</h2>

    <input type="text" className="form-control" onChange={(e) => {
      setContent(e.target.value.toLocaleUpperCase())}}
      onKeyDown={handleKeyDown}
      value={content}/>

    <div className="mt-4">
      <h3>Copied Content</h3>
      <p onCopy={handleCopy}>{content.toLocaleUpperCase()}</p>
    </div>


    <textarea className="form-control"
    name=""
    id=""
    cols="30"
    rows="10"
    onPaste={handlePaste}
    ></textarea>

    </div>
    
    
  )
}

export default KeyboardClipboards