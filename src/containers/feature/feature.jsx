import React from 'react'
import './feature.css'
const feature = ({title,text}) => {
  return (
   
<div className="gpt3__features-container">
 <div className="gpt3__features-container-title">
 <div/>
<h1>{title}</h1>

</div>
<div className="gpt3__features-container_feature-text">
{text}
</div>
</div>


  
  )
}

export default feature
