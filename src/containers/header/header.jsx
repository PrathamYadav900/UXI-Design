import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'

const header = () => {
  return (
     <div className='gpt3__header-section'>
    <div className="gpt3__header-content">
         <h1 className="header__title">
          Let's Build Something amazing with GPT-3 OpenAI
      </h1>
      <p className="header__description">
        Yet bed any for travelling assistance indulgence unpleasing.
        Not thoughts all exercise blessing. Indulgence way everything joy altration boisterous the attachment. Party we years to order allow asked of.
        </p>  
      <div className="email">
        <input type="email" name="email" id="header__email"  
        placeholder='Enter your email here'/>
      <button className="header__email-button">
        Get Started 
        </button> 
        <div className="header__people">
          <img src={people} alt="people" />
          <p className="people_descripetion">
        1600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
    </div>

    <div className='gpt3__header-image'>
      <img src={ai} alt="" />
    </div>
    </div>
  )
}

export default header
