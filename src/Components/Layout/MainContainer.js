import React from 'react'
import Card from '../Ui/Card';
import Box from '../Ui/Box';
import mainicon from '../../images/mainicon.png'
import image from '../../images/Vector 1.png';

const MainContainer = () => {
  const gridcontent =[{
    firstHeading:"St Judes Hospital",
    secondHeading:"Sarasota,FL. 33178"
  },{
    firstHeading:"10      -      17 ",
    secondHeading:"October December"
  },{
    firstHeading:"20 Rooms",
    secondHeading:"10 Singles, 10 doubles"
  }]
  const cardcontent =[{
    image:image,
    heading:"Holiday Inn",
    heading2:"1.5 miles away from joblocation. ",
    singles:"Singles: $120",
    Doubles:"Doubles: $145",
    Buttontext:"Book now"
  },
  {
    image:image,
    heading:"Holiday Inn",
    heading2:"1.5 miles away from joblocation. ",
    singles:"Singles: $120",
    Doubles:"Doubles: $145",
    Buttontext:"Book now"
  },
  {
    image:image,
    heading:"Holiday Inn",
    heading2:"1.5 miles away from joblocation. ",
    singles:"Singles: $120",
    Doubles:"Doubles: $145",
    Buttontext:"Book now"
  }]
  return (
    <div className='main'>
      <div>
      <span className='main-heading1'>You currently  have 3 requests</span>
      <div className='section-one'>
        <div  className='grid-one'> 
        {gridcontent.map((item,index)=><Box key={index} firstHeading={item.firstHeading} secondHeading={item.secondHeading}/>)}
        </div>
        <div className='recived-bar'>
        <div className='split-one'>
        <span>RECIEVED</span>
        </div>
        <div className='split-two'>
        <span>NEGOTIATING</span>
        </div>
        <div className='split-three'>
        <span>COMPLETED</span>
        </div>
        </div>
      </div>
      <div className='section-two'>
      <div  className='grid-one'> 
      {gridcontent.map((item,index)=><Box key={index} firstHeading={item.firstHeading} secondHeading={item.secondHeading}/>)}
        </div>
        <div className='recived-bar'>
        <span>COMPLETED</span>
        </div>
        <div className='Cards'>{cardcontent.map((item,index)=> <Card key={index} item={item}/>)}
        </div>
      </div>
      <div className='main-icon'> <img src={mainicon} alt='icon' width={138} height={138}/></div>
      <div className='red-button'>
        <span>Rare Find</span>
        </div>
      </div>
      
      </div>
  )
}
export default MainContainer;