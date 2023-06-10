import React from 'react'

const Button = ({
    className,
    text
}) => {
  return (
    <div className={className}><span>{text}</span></div>
  )
}

export default Button;