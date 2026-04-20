import Header from "./components/Header"
import Castle from "./components/Castle"
export default function App() {

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center  bg-gray-800 text-white">
      <Header />
      <p className="text-purple-300">
        Message for JSD12 🐎 🥷 ✉️ :

        <span
          className="text-yellow-300">
          { }
        </span>
      </p>

      <textarea
        className="bg-white text-black rounded px-2 py-1 "
        placeholder="Type your message here..."
      />

      <p></p>
      <Castle />


    </div>
  )


}
