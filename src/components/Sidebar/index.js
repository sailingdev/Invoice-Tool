import React, { useState } from 'react'
import InvoiceItemList from '../InvoiceItemList'
import SearchInput from '../SearchInput'

export default function Sidebar(props) {
  const [keyword, setKeyword] = useState('')
  return (
    <div className="w-1/4 bg-grey-300">
      <SearchInput
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <InvoiceItemList keyword={keyword} />
    </div>
  )
}
