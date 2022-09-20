import React from 'react';
import image from '../images/hd.jpg'
import MenuBox from './MenuBox';

const Menu = () => {
  return (
    <>
    <div id="products">
        <button className='btn btn-warning'>ALWAYS TASTY BURGER</button>
     <h1 className='cof'>CHOOSE & ENJOY</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda distinctio autem sunt eaque eligendi facere?</p>

        <div className="a-container">
       <MenuBox image={image} title="LOREM  IPSUM DOLOR"/>
       <MenuBox image={image} title="LOREM  IPSUM DOLOR"/>
       <MenuBox image={image} title="LOREM  IPSUM DOLOR"/>
        </div>
       
    </div>
    </>
  )
}

export default Menu