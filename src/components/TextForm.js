import React, {useState} from 'react'

export default function TextForm(props){

    const[text,settext] = useState('')

    const handleUpClick = () =>{
        let newtext = text.toUpperCase();
        settext(newtext)
    }

    const handleLoClick = () =>{
        let newtext = text.toLowerCase();
        settext(newtext)
    }

    const handleclearClick = () =>{
        let newtext = "";
        settext(newtext)
    }

    const handleOnChange = (event) =>{
        settext(event.target.value)
    }
    return(

    <div style={{color: props.mode==='light'?'black':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          
          <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='light'?'white':'#2b3035',color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} value={text} rows="8"></textarea>
          

        </div>

        <button type="button" className="btn btn-success mx-2"  onClick={handleUpClick}>Click For Uppercase</button>
        <button type="button" className="btn btn-info mx-2"  onClick={handleLoClick}>Click For Lowercase</button>
        <button type="button" className="btn btn-danger mx-2"  onClick={handleclearClick}>Clear Text</button>

        <div className='container my-4'>
            <h3>Text Info</h3>
            <p>{text.split(' ').length} words {text.length} character</p>
            <p>Time to read : {0.008 * text.split(' ').length} mins</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter the text in the above box to see the preview here'}</p>
        </div>

    </div>

    );
}