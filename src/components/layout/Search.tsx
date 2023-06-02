"use client"

import Icon from "@components/elements/view/Icon"

const Search = () => {
  return (
    <div className="border-2 w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="text-sm font-semibold px-6">Any week</div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">Add guests</div>
          <Icon
            name={"faMagnifyingGlass"}
            className="cursor-pointer text-xl px-2 py-1 bg-rose-500 text-white rounded-full"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default Search
