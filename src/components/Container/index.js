import React from 'react'
import InvoiceDetails from '../InvoiceDetails'

export default function Container(props) {
  return (
    <div className="relative z-0 flex flex-col w-3/4 p-6 bg-white-100">
      <p className="mb-3 text-sm font-medium text-grey-100">INVOICE DETAILS</p>
      <InvoiceDetails />
    </div>
  )
}
