import React, { useMemo, FC, useState, useCallback } from 'react'
import isHotkey from 'is-hotkey'
import { Editor, Transforms, createEditor, Node } from 'slate'
import { Editable, withReact, useSlate, Slate, RenderElementProps, RenderLeafProps } from 'slate-react'
import { withHistory } from 'slate-history'
import Toolbar from './Toolbar'
import './index.css'

type TFormat = 'bold' | 'italic' | 'underline' | 'code' | 'heading-one' | 'heading-two'
               | 'block-quote' | 'numbered-list' | 'bulleted-list'

const HOTKEYS: { [p: string]: string } = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const DawnEditor: FC = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const [value, setValue] = useState<Node[]>(initialValue)

  const isMarkActive = (editor: Editor, format: TFormat) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
  }

  const toggleMark = (editor: Editor, format: TFormat) => {
    const isActive = isMarkActive(editor, format)
    if (isActive) {
      Editor.removeMark(editor, format)
    } else {
      Editor.addMark(editor, format, true)
    }
  }

  return (
    <div className='dawn-container'>
      <Slate editor={editor} value={value} onChange={v => setValue(v)}>
        <Toolbar />
        <Editable
          className='dawn-content'
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event.nativeEvent)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey] as TFormat
                toggleMark(editor, mark)
              }
            }
          }}
        />
      </Slate>
    </div>
  )
}

const Element: FC<RenderElementProps> = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf: FC<RenderLeafProps> = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}


const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: '' },
    ],
  },
]

export default DawnEditor
