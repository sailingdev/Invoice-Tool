import React from 'react'

export default function InvoiceItem(props) {
  const { item } = props
  return (
    <div className="flex flex-col px-6 py-3 hover:bg-grey-500 group">
      <div className="flex justify-between">
        <p className="text-grey-100 group-hover:text-white-400">
          INV. # - 1122
        </p>
        <p className="text-grey-100">11:35 AM - Today</p>
      </div>
      <p className="text-sm text-grey-100 group-hover:text-white-400">
        Items - 05
      </p>
      <div className="flex items-center justify-between">
        <p className="text-xs text-blue-secondary">
          {item?.customerDetails.fulName}
        </p>
        <p className="text-grey-100 group-hover:text-white-400">
          {item?.productDetails.grandTotal}
        </p>
      </div>
    </div>
  )
}
