import React from 'react'

export default function Item(props) {
  return (
    <tr className="px-2 py-3 border-b cursor-pointer border-grey-100 border-opacity-20">
      <td className="px-2 py-4 text-sm font-medium text-left text-grey-200">
        {props.item.itemName}
      </td>
      <td className="text-sm font-medium text-center text-grey-200">
        {props.item.itemQuantity}
      </td>
      <td className="text-sm font-medium text-center text-grey-200">
        {props.item.itemPrice}
      </td>
    </tr>
  )
}
