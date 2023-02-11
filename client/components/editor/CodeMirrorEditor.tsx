import * as React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { cpp } from '@codemirror/lang-cpp'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import type { Extension } from '@codemirror/state'

import * as Y from 'yjs'
import { yCollab } from 'y-codemirror.next'
import { WebsocketProvider } from 'y-websocket'

export const CodeMirrorEditor = () => {
  const [extensions, setExtensions] = React.useState<Extension[]>([cpp()])

  React.useEffect(() => {
    const yDoc = new Y.Doc()
    const provider = new WebsocketProvider('ws://localhost:1234', 'room-name', yDoc)
    const yText = yDoc.getText()
    const undoManager = new Y.UndoManager(yText)

    setExtensions((prev) => [...prev, yCollab(yText, provider.awareness, { undoManager })])

    return () => {
      if (provider.wsconnected) {
        provider.destroy()
      }
    }
  }, [])

  return (
    <CodeMirror
      extensions={extensions}
      theme={vscodeDark}
      height="100%"
      style={{ height: '100%' }}
    />
  )
}
