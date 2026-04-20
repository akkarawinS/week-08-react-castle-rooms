import Hall from "./Hall"
export default function Room() {
    return (
        <div
            className="flex flex-col justify-center items-center pt-10 bg-green-500 w-[90%]">
                <h1>Room</h1>
                <Hall />

        </div>
    )
}