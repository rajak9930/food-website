import React from 'react'
import image from '../images/hd.jpg'

const OurStory = () => {
  return (
   <>
   <div id="about">
   <div className="about-text">
        <h1 className="">DISCOVER <br /><span>UPCOMING EVENT</span></h1>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla molestias aut nemo autem tempore sunt ullam voluptatibus vitae nobis eius, earum quo perspiciatis quidem aliquam natus minus quaerat quos inventore!</p>
       
      </div>
      <div className="about-image">
        <img src={image} alt="" />
      </div>
    </div>
   

   </>
  )
}

export default OurStory