import React, { FC } from 'react'
import { MdRedo, MdUndo, MdFormatPaint, MdFormatClear } from 'react-icons/md'

const ToolButton: FC<HTMLButtonElement & { children: Element }> = ({
  children,
  className = '',
  ...props
}) => (
  <button
    className={`dawn-tool-button ${className}`}
    {...props}
  >
    {children}
  </button>
)

const Toolbar: FC = () => {
  return (
    <div className='dawn-toolbar'>
      <ToolButton>
        <MdUndo />
      </ToolButton>
      <ToolButton>
        <MdRedo />
      </ToolButton>
      <ToolButton>
        <MdFormatPaint />
      </ToolButton>
      <ToolButton>
        <MdFormatClear />
      </ToolButton>
    </div>
  )
}

export default Toolbar
