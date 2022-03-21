import React, { useState } from 'react'

function InputExample() {
    const [input, setInput] = useState({name:"", surname:""})
    const onChangeInput = (e) => {
        setInput({...input, [e.target.name] : e.target.value})
    }
  return (
    <div>
        Name <br></br>
        <input name='name' value={input.name} onChange={onChangeInput}></input>
        <br></br>
        
        Surname <br></br>
        <input name='surname' value={input.surname} onChange={onChangeInput}></input>
        <br/>
        <br/>
        <br/>
        {input.name} {input.surname}
    </div>
  )
}

export default InputExample