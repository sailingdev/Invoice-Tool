import React from 'react'
import SearchIcon from '../../assets/search-icon.png'

export default function SearchInput(props) {
  return (
    <div className="flex rounded-full border-grey-200 border bg-grey-200 p-2 m-3">
      <button>
        <span className="w-auto flex justify-end items-center text-grey p-2">
          <img src={SearchIcon} />
        </span>
      </button>
      <input
        className="w-full rounded mr-4 bg-grey-200 text-white-400 focus:border-opacity-0"
        type="text"
        placeholder="Search..."
      />
    </div>
  )
}
