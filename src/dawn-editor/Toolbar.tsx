import React, { FC, ButtonHTMLAttributes } from 'react'
import {
  MdRedo,
  MdUndo,
  MdFormatPaint,
  MdFormatClear,
  MdArrowDropDown,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdStrikethroughS,
  MdTextFormat,
  MdBrush,
  MdFormatListBulleted,
  MdFormatListNumbered,
} from 'react-icons/md'

const ToolButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
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

const Divider = () => {
  return (
    <div
      style={{
        display: 'inline-block',
        width: 1,
        height: '1em',
        margin: '0 16px',
        verticalAlign: 'middle',
        background: 'rgba(0, 0, 0, .06)'
      }}
    />
  )
}

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
      <Divider />
      <ToolButton>
        正文 <MdArrowDropDown />
      </ToolButton>
      <ToolButton>
        11 <MdArrowDropDown />
      </ToolButton>
      <Divider />
      <ToolButton>
        <MdFormatBold />
      </ToolButton>
      <ToolButton>
        <MdFormatItalic />
      </ToolButton>
      <ToolButton>
        <MdFormatUnderlined />
      </ToolButton>
      <ToolButton>
        <MdStrikethroughS />
      </ToolButton>
      <ToolButton>
        <MdTextFormat />
        <MdArrowDropDown />
      </ToolButton>
      <ToolButton>
        <MdBrush />
        <MdArrowDropDown />
      </ToolButton>
      <Divider />
      <ToolButton>
        <MdFormatListNumbered />
      </ToolButton>
      <ToolButton>
        <MdFormatListBulleted />
      </ToolButton>
    </div>
  )
}

export default Toolbar
