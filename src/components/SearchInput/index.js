import React from 'react'
import SearchIcon from '../../assets/search-icon.png'

export default function SearchInput(props) {
  return (
    <div className="flex p-2 m-3 border rounded-full border-grey-200 bg-grey-200">
      <button>
        <span className="flex items-center justify-end w-auto p-2 text-grey">
          <img src={SearchIcon} alt="searchIcon" />
        </span>
      </button>
      <input
        className="w-full mr-4 rounded bg-grey-200 text-white-400 focus:border-opacity-0"
        type="text"
        placeholder="Search..."
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
    </div>
  )
}
