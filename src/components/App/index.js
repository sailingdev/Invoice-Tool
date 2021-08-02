import React from 'react'
import Container from '../Container'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import PlusIcon from '../../assets/plus-white.png'
import CreateInvoiceModal from '../CreateInvoiceModal'
function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <CreateInvoiceModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div className="flex flex-col h-screen relative">
        <button
          className="absolute right-14 top-14 bg-pink-primary rounded-full p-4"
          onClick={openModal}
        >
          <img src={PlusIcon} />
        </button>
        <Navbar />
        <div className="flex h-full">
          <Sidebar />
          <Container />
        </div>
      </div>
    </div>
  )
}

export default App
