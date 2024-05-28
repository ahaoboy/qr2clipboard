import { createSignal } from 'solid-js'
import './App.css'
import { fileToBuffer, uploadFile } from './utils'
import { detect } from 'qr-detect';
export const IMAGE_UPLOAD_OPTION = {
  type: "file",
  accept: "image/*",
  multiple: "false",
};

async function upload() {
  const file = (await uploadFile(IMAGE_UPLOAD_OPTION))[0]
  const buf = await fileToBuffer(file)
  if (!buf) {
    return ''
  }
  const qr = detect(buf)
  return qr.join("\n")
}

function App() {
  const [getText, setText] = createSignal('')
  return (
    <div>
      <p>{getText()}</p>
      <button onClick={async () => {
        const s = await upload()
        setText(s)
        await navigator.clipboard.writeText(s)
      }}
        type='button'
      >
        Upload
      </button>
    </div>
  )
}

export default App
