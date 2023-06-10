import React from 'react'

const Sidebar = () => {
  const nav =['Current requests','Ongoing stays','Prevoius stays','Reports']
  return (
    <div className='sidebar'>
      <h2 className='main-heading'>LODGN</h2>
      <nav><ul> {nav.map((item)=><li key={item}>{item}</li>)}</ul></nav>
      <div className='last-section'>
      <div className='logout-button'><span className='logout-button-text'>Log - Out</span></div>
      <div className='last-section-text'>
      <span className='typography1'>Help-Desk</span>
       <span className='typography1'>786-874 9988</span>
      </div>
      </div>
        </div>
  )
}
  
export default Sidebar;