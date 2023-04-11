import React, { useState } from 'react'
import '../forms/form.css'

function Form(props) {
  const [value, setValue] = useState('')

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if(value == ''){
        return <div>error</div>
      }
      props.handleCityChange(value)
      setValue('')
    }
  };

  return (
    <input autoFocus className='input' onChange={(event) => setValue(event.target.value)} value={value} onKeyDown={handleKeyDown} />
  )
}

export default Form