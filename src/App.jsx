import { useState } from "react"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const [divis, setdivis] = useState(0)
  const [oneTime, setOneTime] = useState(false)
  function navigateToBuy() {
    navigate("buy")
  }
  const [showBuy, setShowBuy] = useState(true)
  function toggleText() {
    setShowBuy(!showBuy)
    setOneTime(true)
    setdivis(divis + 1)
    if (divis % 2 == 0) {
      setCount(count + 1)
    }
  }
  return (
    <>
      <div className="flex flex-col w-svw h-svh items-center justify-center gap-4">
        <h1 className="text-6xl font-extrabold">Printerium</h1>
        <h2 className="text-2xl">Makes Life Premium</h2>
        <img src="/printer.svg" width={256} />
        <button onClick={toggleText} className="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit">

          {showBuy ?
            "Buy Now"
            :
            "<3 You just bought a Printerium printer!!!!"
          }
        </button>
        {oneTime ? <span>Printerium printers bought: {count}</span> : <></>}

      </div>

    </>
  )
}

export default App
