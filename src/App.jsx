import Header from "./components/Header"
import Castle from "./components/Castle"
import { createContext, useState } from "react"
export const HeadderContext = createContext();

export default function App() {
  const [inputText, setInputText] = useState('')
  function saveInputText(event) {
    setInputText(event.target.value)
  }
  return (
    <HeadderContext.Provider value={{ inputText }}>
      <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center  bg-gray-800 text-white">
        <Header />
        <p className="text-purple-300">
          Message for JSD12 🐎 🥷 ✉️ :

          <span
            className="text-yellow-300">
          </span>
        </p>

        <textarea
          value={inputText}
          onChange={saveInputText}
          className="bg-white text-black rounded px-2 py-1 "
          placeholder="Type your message here..."
        />

        {inputText === '' && (<p className="text-yellow-500">⏳ Waiting for a message...</p>)}
        {inputText != '' && (<p className="text-yellow-500">✅{inputText}</p>)}

        <p
          className="text-green-600">
          Reply from the Secret Room:
        </p>
      




        <Castle />

      </div>
    </HeadderContext.Provider>
  )


}
