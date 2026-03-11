import { Suspense } from 'react'
import './App.css'
import Bannar from './Components/Bannar/Bannar'
import Tickets from './Components/Bannar/Tickets'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

const fetchTickets = async () => {
  const res = await fetch("/tickets.json")

  if (!res.ok) {
    throw new Error("Failed to fetch tickets")
  }

  return res.json();
}

function App() {

  const fetchPromise = fetchTickets();


  return (
    <>
      <Navbar />
      <Bannar />
      <Suspense fallback={<div className="grid place-items-center min-h-screen">
        <span className="loading loading-spinner text-success"></span>
      </div>}>
        <Tickets fetchPromise={fetchPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
