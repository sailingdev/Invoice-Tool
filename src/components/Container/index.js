import React from 'react'
import InvoiceDetails from '../InvoiceDetails'

export default function Container(props) {
  return (
    <div className="w-3/4 bg-white-100 p-6 flex flex-col">
      <p className="text-grey-100 text-sm font-medium mb-3">INVOICE DETAILS</p>
      <InvoiceDetails />
    </div>
  )
}
