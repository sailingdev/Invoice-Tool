import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectItem } from '../../store/Invoice/invoiceSlice'

export default function InvoiceItem(props) {
  const { item } = props
  const dispatch = useDispatch()
  const selectItem = () => {
    dispatch(setSelectItem(item))
  }
  return (
    <div
      className="flex flex-col px-6 py-3 cursor-pointer hover:bg-grey-500 group"
      onClick={selectItem}
    >
      <div className="flex justify-between">
        <p className="text-grey-100 group-hover:text-white-400">
          INV. # - {item?.invoiceNumber}
        </p>
        <p className="text-grey-100">11:35 AM - Today</p>
      </div>
      <p className="text-sm text-grey-100 group-hover:text-white-400">
        Items - {item?.productDetails.items.length}
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
