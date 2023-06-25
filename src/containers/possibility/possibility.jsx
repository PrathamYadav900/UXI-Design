import React from 'react'
import './possibility.css';
import  Possibility  from '../../assets/possibility.png';

const possibility = () => {
  return (
    <div className='possibility '>
      <div className="possibility__part-1">
      <div className="possibility__title">
        <h1 className='gradient-text'>
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>
        Request Early Access to Get Started
        </p>
      </div>

      <div className="possibility__content">
       <div className='possibility__content-heading'>
     
      <h3>Improving end distrusts instantly </h3>
      <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
     
      </div>

      <div className='possibility__content-heading'>
      <h3>Become the tended active</h3>
      <p>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
      </div>


       <div className='possibility__content-heading'>
      <h3>Message or am nothing</h3>
      <p>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
      </div>
        
       <div className='possibility__content-heading'>
        
      <h3>Really boy law county</h3>
      <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
      </div>
      </div>
      </div>

    <div className="possibility__part-2">
      <div className="possibility__image">
        <img src={Possibility} alt="Possibility" />
      </div>
      <div className="possibility__part-2-content">
        <p className="possibility__part-2-content-subtitle">
        Request Early Access to Get Started
        </p>
        <h2 className="possibility__part-2-content-title gradient-text">
        The possibilities are beyond your imagination
        </h2>
        <p className="possibility__part-2-content-description">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <p className="possibility__part-2-content-subtext">
        Request Early Access to Get Started
        </p>
      </div>
    </div>



    </div>
  )
}

export default possibility
