import { useContext} from "react"
import { HeadderContext } from "../App";

export default function SecretRoom() {
    //const [roomText, setRoomText] = useState('')
    const { inputText,roomText, setRoomText} = useContext(HeadderContext);
    function saveInputText(event) {
        setRoomText(event.target.value)
    }

    return (
        <>
            <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center  bg-gray-800 w-[100%] ">
                <h1>SecretRoom</h1>
                <p
                    className="text-purple-300">
                    Message from the outside ✉️ :

                </p>

                <p
                    className="text-yellow-500">
                    {inputText === '' && (<p className="text-yellow-500">⏳ Waiting for a message...</p>)}
                    {inputText != '' && (<p className="text-yellow-500">✅{inputText}</p>)}

                </p>

                <p
                    className="text-green-500">
                    Reply to the outside 👨‍💻:
                </p>
                <textarea
                    value={roomText}
                    onChange={saveInputText}
                    className="bg-white text-black rounded px-2 py-1 "
                    placeholder="Type your message here..."
                />

                {roomText === '' && (<p className="text-yellow-500">⏳ Waiting for a message...</p>)}
                {roomText != '' && (<p className="text-yellow-500">✅{roomText}</p>)}





            </div>
        </>
    )
}