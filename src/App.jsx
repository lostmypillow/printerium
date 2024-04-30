

function App() {
 
  return (
    <>
      <div className="flex flex-col w-svw h-svh items-center justify-center gap-4">
        <h1 className="text-6xl font-extrabold">Printerium</h1>
        <h2 className="text-2xl">Makes Life Premium</h2>
        <img src="/printer.svg" width={256}/>
        <button className="flex bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-fit">Buy Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
      </div>
    </>
  )
}

export default App
