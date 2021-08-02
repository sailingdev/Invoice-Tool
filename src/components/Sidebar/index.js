import React from 'react'
import InvoiceItemList from '../InvoiceItemList'
import SearchInput from '../SearchInput'

export default function Sidebar(props) {
  return (
    <div className="w-1/4 bg-grey-300">
      <SearchInput />
      <InvoiceItemList />
    </div>
  )
}
