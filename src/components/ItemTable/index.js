import React from 'react'
import InvoiceItem from './Item'

export function ItemTable(props) {
  return (
    <>
      <table className="w-full">
        <tr className="px-2 py-2 border-t border-b border-grey-100 border-opacity-40">
          <th className="px-2 py-2 text-xs font-medium text-left text-opacity-50 text-grey-100">
            ITEM
          </th>
          <th className="text-xs font-medium text-opacity-50 text-grey-100">
            QUANTITY
          </th>
          <th className="text-xs font-medium text-opacity-50 text-grey-100">
            PRICE
          </th>
        </tr>
        {props?.items?.map((item, index) => (
          <InvoiceItem item={item} key={index} />
        ))}
      </table>
    </>
  )
}
