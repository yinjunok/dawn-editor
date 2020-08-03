import React, { FC, ButtonHTMLAttributes } from 'react'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}