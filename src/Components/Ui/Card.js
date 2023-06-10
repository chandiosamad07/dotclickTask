import React from 'react'
import Button from './Button';
const Card = ({
  item
}) => {
 
  return (
    <div className='card'>
        <div className='card-section-one'>
        <img src={item.image} alt='logo' width='48px'  height='53px' />
        <span>{item.heading}</span>
        </div>
        <div className='card-section-two'>
        <span>{item.heading2}</span>
        <div className='card-bottom'>
           <div className='bottom-text'> 
            <span>{item.singles}</span>
            <br/>
            <span>{item.doubles}</span>  
            </div>
           <Button text={item.Buttontext} className={"card-button"}/>
        </div>
        </div>
       
    </div>
  )
}
export default Card;
