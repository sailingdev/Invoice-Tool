import React from 'react'
import PrintIcon from '../../assets/printer-blue.png'
import { ItemTable } from '../ItemTable'
import Item from '../ItemTable/Item'

export default function InvoiceDetails(props) {
  return (
    <div className="p-8 bg-white-400">
      <div className="flex justify-between mb-8">
        <div className="flex flex-col">
          <p className="mb-1 text-lg font-medium">INVOICE</p>
          <p className="mb-1 text-sm text-grey-200"># INV1122</p>
          <p className="text-xs text-grey-100">11:35 AM - Today</p>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-end justify-center">
            <p className="mb-1 text-xs text-grey-100">CUSTOMER DETAILS</p>
            <p className="font-medium text-black-400">JOHN DOE</p>
            <p className="mb-1 text-sm text-grey-100">
              johndeo@serviceprocider.com
            </p>
          </div>
          <div className="flex items-center justify-center ml-4">
            <button className="flex px-5 py-2 border-2 border-blue-100 rounded">
              <p className="text-sm font-medium text-blue-100">PRINT</p>
              <img src={PrintIcon} className="ml-3" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <ItemTable />
      </div>
      <div className="flex justify-end mt-6">
        <div className="flex flex-col w-1/5">
          <div className="flex justify-between w-full mb-1">
            <p className="text-sm text-center text-grey-200">Sub Total</p>
            <p className="text-sm text-center text-grey-200">$ 3,470.00</p>
          </div>
          <div className="flex justify-between w-full mb-1">
            <p className="text-sm text-center text-grey-200">Tax(12.36%)</p>
            <p className="text-sm text-center text-grey-200">$ 429.00</p>
          </div>
          <div className="flex justify-between w-full mb-1">
            <p className="text-sm text-center text-grey-200">Discount(10%)</p>
            <p className="text-sm text-center text-grey-200">$ 390.00</p>
          </div>
          <br />
          <div className="flex justify-between w-full">
            <p className="text-sm font-medium">Grand Total</p>
            <p className="text-sm font-medium">$ 3,509.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
