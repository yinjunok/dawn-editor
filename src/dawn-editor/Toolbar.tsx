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
  MdFormatStrikethrough,
  MdTextFormat,
  MdBrush,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatIndentIncrease,
  MdFormatIndentDecrease,
  MdFormatLineSpacing,
  MdFindInPage,
} from 'react-icons/md'
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarmsOutlined';
import { AccessAlarmsOutlined } from '@material-ui/icons';

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
        height: '1.2em',
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
        <MdFormatStrikethrough />
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
      <ToolButton>
        <MdFormatIndentIncrease />
      </ToolButton>
      <ToolButton>
        <MdFormatIndentDecrease />
      </ToolButton>
      <ToolButton>
        <MdFormatLineSpacing />
        <MdArrowDropDown />
      </ToolButton>
      <Divider />
      <ToolButton>
        插入
        <MdArrowDropDown />
      </ToolButton>
      <Divider />
      <ToolButton>
        <MdFindInPage />
      </ToolButton>
      <ToolButton>
        <AccessAlarmsOutlined />
      </ToolButton>
    </div>
  )
}

export default Toolbar
