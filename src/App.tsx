import { createSignal } from "solid-js"
import "./App.css"
import { fileToBuffer, uploadFile } from "./utils"
export const IMAGE_UPLOAD_OPTION = {
  type: "file",
  accept: "image/*",
  multiple: "false",
}

async function upload() {
  const file = (await uploadFile(IMAGE_UPLOAD_OPTION))[0]
  if (!file) {
    return ""
  }

  const buf = await fileToBuffer(file)
  if (!buf) {
    return ""
  }

  const qr = await import("qr-detect").then((mod) => mod.detect(buf))
  return qr.join("\n")
}

function App() {
  const [getText, setText] = createSignal("")
  const [getLoad, setLoad] = createSignal(false)
  return (
    <div>
      <p>{getText()}</p>
      <button
        onClick={async () => {
          setLoad(true)
          const s = await upload()
          setText(s)
          await navigator.clipboard.writeText(s)
          setLoad(false)
        }}
        type="button"
      >
        {getLoad() ? "loading..." : "upload"}
      </button>
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(getText())
        }}
        disabled={!getText().length}
        type="button"
      >
        copy
      </button>
    </div>
  )
}

export default App
