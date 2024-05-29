export const sleep = (time: number) => new Promise((r) => setTimeout(r, time))

export const uploadFile = (options: Record<string, string> = {}) => {
  const input = document.createElement("input")
  for (const k in options) {
    input.setAttribute(k, options[k])
  }

  return new Promise<File[]>((r) => {
    input.addEventListener("change", async () => {
      const files: File[] = Array.from(input.files || [])
      r(files)
    })
    input.addEventListener("cancel", () => {
      r([])
    })
    input.click()
  })
}

export const fileToBuffer = (file: Blob) => {
  return new Promise<Uint8Array | null>((r) => {
    const reader = new FileReader()
    reader.onload = () => {
      const content = reader.result as ArrayBuffer
      if (!content) {
        r(null)
        return
      }
      r(new Uint8Array(content || []))
    }
    reader.readAsArrayBuffer(file)
  })
}
