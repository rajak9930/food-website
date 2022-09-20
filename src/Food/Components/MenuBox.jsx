import React from 'react'

const MenuBox = (props) => {
  return (
   <>
    <div className="a-box">
    <div className="a-b-img">
      <img src={props.image}  alt="..."/>
    </div>
    <div className="a-b-text">
       <h5 className='fx-6 cof fw-bold'> {props.title}</h5>
<button className='productbox-button'>ORDER NOW</button>
    </div>
  </div>

   </>
  )
}

export default MenuBox