import React, { useState } from 'react'
import { updateCustomerDetails } from '../../store/Invoice/invoiceSlice'
import { useDispatch } from 'react-redux'
import SkipIcon from '../../assets/skip-icon.png'

export default function Customerdetails(props) {
  const dispatch = useDispatch()
  const [customerDetails, setCustomerDetails] = useState({
    fullName: 'test',
    address: 'test',
    phoneNumber: '',
    emailId: 'test@gmail.com',
    pinCode: '123456',
  })
  const SaveCustomerDetails = () => {
    dispatch(updateCustomerDetails(customerDetails))
    props.setStep('step2')
  }
  return (
    <div>
      <div className="flex items-center justify-between px-6 pb-1 border-b border-grey-100 border-opacity-20">
        <p className="text-xs font-medium tracking-wider">CUSTOMER DETAILS</p>
        <button
          className="flex items-center px-4 py-2 bg-white-100"
          onClick={SaveCustomerDetails}
        >
          <p className="text-sm font-medium text-blue-100">SKIP</p>
          <img className="ml-2" src={SkipIcon} alt="skipIcon" />
        </button>
      </div>
      <div className="flex justify-between p-6 py-4">
        <div className="flex flex-col w-5/12">
          <div className="flex flex-col mb-6">
            <p className="mb-2 text-xs font-medium text-grey-100">Full Name</p>
            <input
              type="text"
              placeholder="Customer Name"
              value={customerDetails.fullName}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  fullName: e.target.value,
                })
              }
              className="p-2 text-sm border rounded-md border-opacity-40 placeholder-opacity-40 border-grey-100 placeholder-grey-100 text-opacity-40 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-xs font-medium text-grey-100">Address</p>
            <textarea
              type="text"
              placeholder="Complete Address"
              rows="5"
              value={customerDetails.address}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  address: e.target.value,
                })
              }
              className="p-2 text-sm border rounded-md border-opacity-40 placeholder-opacity-40 border-grey-100 placeholder-grey-100 text-opacity-40 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        <div className="flex flex-col w-5/12">
          <div className="flex flex-col mb-6">
            <p className="mb-2 text-xs font-medium text-grey-100">
              Phone Number
            </p>
            <input
              type="number"
              placeholder="Phone Number"
              value={customerDetails.phoneNumber}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  phoneNumber: e.target.value,
                })
              }
              className="p-2 text-sm border rounded-md border-opacity-40 placeholder-opacity-40 border-grey-100 placeholder-grey-100 text-opacity-40 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex flex-col mb-6">
            <p className="mb-2 text-xs font-medium text-grey-100">Email ID</p>
            <input
              type="text"
              placeholder="Customer Email Address"
              value={customerDetails.emailId}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  emailId: e.target.value,
                })
              }
              className="p-2 text-sm border rounded-md border-opacity-40 placeholder-opacity-40 border-grey-100 placeholder-grey-100 text-opacity-40 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex flex-col w-2/6 mb-6">
            <p className="mb-2 text-xs font-medium text-grey-100">Pincode</p>
            <input
              type="number"
              placeholder="560067"
              maxLength="5"
              value={customerDetails.pinCode}
              onChange={(e) =>
                setCustomerDetails({
                  ...customerDetails,
                  pinCode: e.target.value,
                })
              }
              className="p-2 text-sm border rounded-md border-opacity-40 border-grey-100 placeholder-grey-100 placeholder-opacity-40 text-opacity-40 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end p-4 bg-white-100">
        <button
          className="px-8 py-2 text-sm bg-blue-100 rounded-md text-white-400"
          onClick={SaveCustomerDetails}
        >
          PROCEED
        </button>
      </div>
    </div>
  )
}
