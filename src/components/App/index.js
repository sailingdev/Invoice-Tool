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
    <div className="overflow-hidden">
      <CreateInvoiceModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div className="relative z-0 flex flex-col h-screen">
        <button
          className="absolute z-50 p-4 rounded-full right-14 top-14 bg-pink-primary"
          onClick={openModal}
        >
          <img src={PlusIcon} alt="plusIcon" />
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
