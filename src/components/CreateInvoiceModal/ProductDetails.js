import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addInvoiceItem,
  updateProductDetails,
} from '../../store/Invoice/invoiceSlice'
import EditIcon from '../../assets/edit.png'
import EnterIcon from '../../assets/enter-icon.png'
import { ItemTable } from '../ItemTable'

export default function Productdetails(props) {
  const dispatch = useDispatch()
  const customerDetails = useSelector(
    (state) => state?.invoice.newItem.customerDetails
  )
  const [productDetails, setProductDetails] = useState({
    items: [],
    taxPercent: 0,
    discountPercent: 0,
    subTotal: 0,
    grandTotal: 0,
    taxAmount: 0,
    discountAmount: 0,
  })
  const [itemName, setItemName] = useState('')
  const [itemQuantity, setItemQuantity] = useState(0)
  const [itemPrice, setItemPrice] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [grandTotal, setGrandTotal] = useState(0)
  const [taxAmount, setTaxAmount] = useState(0)
  const [discountAmount, setDiscountAmount] = useState(0)

  useEffect(() => {
    let _subTotal = 0
    let _taxAmount = 0
    let _discountAmount = 0
    let _grandTotal = 0
    productDetails?.items?.forEach((item) => {
      _subTotal =
        _subTotal + parseInt(item.itemQuantity) * parseFloat(item.itemPrice)
    })
    console.log(productDetails?.items)
    _taxAmount = _subTotal * (productDetails.taxPercent / 100)
    _discountAmount = _subTotal * (productDetails.discountPercent / 100)
    _grandTotal = _subTotal - _taxAmount - _discountAmount
    setSubTotal(_subTotal.toFixed(4))
    setTaxAmount(_taxAmount.toFixed(4))
    setDiscountAmount(_discountAmount.toFixed(4))
    setGrandTotal(_grandTotal)
  }, [productDetails])

  console.log(productDetails)

  useEffect(() => {
    setProductDetails((prev) => {
      return { ...prev, subTotal, taxAmount, discountAmount, grandTotal }
    })
  }, [subTotal, taxAmount, discountAmount, grandTotal])

  const addItem = () => {
    setProductDetails({
      ...productDetails,
      items: [...productDetails.items, { itemName, itemQuantity, itemPrice }],
    })
  }

  const saveProductDetails = () => {
    dispatch(updateProductDetails(productDetails))
    dispatch(addInvoiceItem())
    props.setStep('step1')
    props.closeModal()
  }

  return (
    <div>
      <div className="flex items-end justify-between px-6 pb-2 mb-2">
        <p className="text-xs font-medium tracking-wider">PRODUCT DETAILS</p>
        <div className="flex items-center mr-8">
          <div className="flex flex-col items-end justify-center">
            <p className="mb-1 text-xs text-grey-100">CUSTOMER DETAILS</p>
            <p className="text-sm font-medium text-black-400">
              {customerDetails?.fullName}
            </p>
            <p className="mb-1 text-sm text-grey-100">
              {customerDetails?.emailId}
            </p>
          </div>
          <div
            className="flex items-center justify-center ml-4 cursor-pointer"
            onClick={() => props.setStep('step1')}
          >
            <img src={EditIcon} className="ml-3" alt="editIcon" />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6">
        <div className="flex">
          <ItemTable items={productDetails?.items} />
        </div>
        <div className="flex justify-between mt-4">
          <input
            type="text"
            placeholder="Please enter item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-3/6 p-2 text-sm border rounded-md border-opacity-40 placeholder-opacity-40 border-grey-100 placeholder-grey-100 text-opacity-40 focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="number"
            placeholder="0.00"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            className="w-1/6 p-2 text-sm border rounded-md border-opacity-40 placeholder-opacity-40 border-grey-100 placeholder-grey-100 text-opacity-40 focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="number"
            placeholder="0.00"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            className="w-1/6 p-2 text-sm border rounded-md border-opacity-40 placeholder-opacity-40 border-grey-100 placeholder-grey-100 text-opacity-40 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="p-3 border border-blue-100" onClick={addItem}>
            <img src={EnterIcon} alt="enterIcon" />
          </button>
        </div>
        <br />
        <div className="flex justify-between">
          <div className="flex justify-between w-3/12">
            <input
              type="number"
              placeholder="Tax"
              value={productDetails.taxPercent}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  taxPercent: e.target.value,
                })
              }
              className="w-2/6 p-2 text-sm border rounded-md border-opacity-40 placeholder-opacity-40 border-grey-100 placeholder-grey-100 text-opacity-40 focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="number"
              placeholder="Discount"
              value={productDetails.discountPercent}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  discountPercent: e.target.value,
                })
              }
              className="w-2/6 p-2 text-sm border rounded-md border-opacity-40 placeholder-opacity-40 border-grey-100 placeholder-grey-100 text-opacity-40 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex justify-between w-3/12">
            <p className="text-sm">Sub Total</p>
            <p className="text-sm text-grey-100">{subTotal}</p>
          </div>
        </div>
        <br />
      </div>
      <div className="flex items-end justify-between py-4 pl-8 pr-4 bg-white-100">
        <div className="flex justify-between w-3/12">
          <div className="flex flex-col">
            <p className="text-sm font-medium">Tax</p>
            <p className="text-sm text-grey-100">{taxAmount}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium">Discount</p>
            <p className="text-sm text-grey-100">{discountAmount}</p>
          </div>
        </div>
        <div className="flex justify-between w-3/12">
          <div className="flex flex-col">
            <p className="text-sm font-medium">Grand Total</p>
            <p className="text-sm text-grey-100">{grandTotal}</p>
          </div>
          <button
            className="px-12 py-2 text-sm bg-blue-100 rounded-md text-white-400"
            onClick={saveProductDetails}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  )
}
