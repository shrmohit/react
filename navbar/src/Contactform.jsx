import React from 'react'

function Contactform() {
  return (
    <div className='contactform-item'> 
      
        <form className='form-section' action="">
        <h1>Email Me</h1>
            <input  className="form-input" type="text" placeholder='Your Email' />
            <input  className="form-input" type="text" placeholder='Your Name' />
            <input  className="form-input" type="text" placeholder='Subject' />
            <input className='form-message' type="text" placeholder='Message' />
            <button className='form-inputs'>Send</button>
        </form>
    </div>
  )
}

export default Contactform