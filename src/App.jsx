import { useState } from "react"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()
  function navigateToBuy() {
    navigate("buy")
  }
  const [showBuy, setShowBuy] = useState(false)
  function toggleText() {
    setShowBuy(!showBuy)
  }
  return (
    <>
      <div className="flex flex-col w-svw h-svh items-center justify-center gap-4">
        <h1 className="text-6xl font-extrabold">Printerium</h1>
        <h2 className="text-2xl">Makes Life Premium</h2>
        <img src="/printer.svg" width={256} />
        <button onClick={toggleText} className="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit">
          
          {showBuy? 
         "Buy Now"          
          :
"<3 You just bought a Printerium printer!!!!"
        }
          </button>
      </div>
    </>
  )
}

export default App
