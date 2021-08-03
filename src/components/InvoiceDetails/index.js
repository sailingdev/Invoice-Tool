import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print'
import PrintIcon from '../../assets/printer-blue.png'
import { ItemTable } from '../ItemTable'

export default function InvoiceDetails(props) {
  const invoiceDetails = useSelector((state) => state?.invoice.selectedItem)
  const tableRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  })
  if (
    Object.keys(invoiceDetails).length === 0 &&
    invoiceDetails.constructor === Object
  )
    return <></>
  return (
    <div className="p-8 bg-white-400" ref={tableRef}>
      <div className="flex justify-between mb-8">
        <div className="flex flex-col">
          <p className="mb-1 text-lg font-medium">INVOICE</p>
          <p className="mb-1 text-sm text-grey-200">
            # INV{invoiceDetails?.invoiceNumber}
          </p>
          <p className="text-xs text-grey-100">11:35 AM - Today</p>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-end justify-center">
            <p className="mb-1 text-xs text-grey-100">CUSTOMER DETAILS</p>
            <p className="font-medium text-black-400">
              {invoiceDetails?.customerDetails?.fullName}
            </p>
            <p className="mb-1 text-sm text-grey-100">
              {invoiceDetails?.customerDetails?.emailId}
            </p>
          </div>
          <div className="flex items-center justify-center ml-4">
            <button
              className="flex px-5 py-2 border-2 border-blue-100 rounded"
              onClick={handlePrint}
            >
              <p className="text-sm font-medium text-blue-100">PRINT</p>
              <img src={PrintIcon} className="ml-3" alt="printIcon" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <ItemTable items={invoiceDetails?.productDetails?.items} />
        </div>
        <div className="flex justify-end mt-6">
          <div className="flex flex-col w-1/5">
            <div className="flex justify-between w-full mb-1">
              <p className="text-sm text-center text-grey-200">Sub Total</p>
              <p className="text-sm text-center text-grey-200">
                $ {invoiceDetails?.productDetails?.subTotal}
              </p>
            </div>
            <div className="flex justify-between w-full mb-1">
              <p className="text-sm text-center text-grey-200">
                Tax({invoiceDetails?.productDetails?.taxPercent}%)
              </p>
              <p className="text-sm text-center text-grey-200">
                $ {invoiceDetails?.productDetails?.taxAmount}
              </p>
            </div>
            <div className="flex justify-between w-full mb-1">
              <p className="text-sm text-center text-grey-200">
                Discount({invoiceDetails?.productDetails?.discountPercent}%)
              </p>
              <p className="text-sm text-center text-grey-200">
                $ {invoiceDetails?.productDetails?.discountAmount}
              </p>
            </div>
            <br />
            <div className="flex justify-between w-full">
              <p className="text-sm font-medium">Grand Total</p>
              <p className="text-sm font-medium">
                $ {invoiceDetails?.productDetails?.grandTotal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
