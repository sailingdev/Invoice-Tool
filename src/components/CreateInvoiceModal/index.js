import React from 'react'
import Modal from 'react-modal'
import CloseIcon from '../../assets/close-btn.png'
import CustomerDetails from './CustomerDetails'
import ProductDetails from './ProductDetails'

const customStyles = {
  content: {
    position: 'fixed',
    top: '25%',
    left: '25%',
    width: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
}

Modal.setAppElement('#root')

export default function CreateInvoiceModal(props) {
  const [step, setStep] = React.useState('step1')
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      overlayClassName="Overlay"
      contentLabel="Create New Invoice Modal"
      className="flex flex-col bg-white-400 "
    >
      <div className="flex justify-between px-6 py-4 mb-1">
        <div className="flex items-center justify-center">
          <p className="text-lg font-medium">Create New Invoice</p>
          <p className="ml-6 text-xs font-medium text-grey-100">
            ORDER NO: 1234
          </p>
        </div>
        <button onClick={() => props.closeModal()}>
          <img src={CloseIcon} alt="closeIcon" />
        </button>
      </div>
      {step === 'step1' ? (
        <CustomerDetails setStep={setStep} />
      ) : (
        <ProductDetails setStep={setStep} closeModal={props.closeModal} />
      )}
    </Modal>
  )
}
