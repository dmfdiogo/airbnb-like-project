"use client"

import Icon from "@components/elements/view/Icon"

const Search = () => {
  return (
    <div className="w-full cursor-pointer rounded-full border-[1px] py-2 shadow-sm transition hover:shadow-md md:w-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold">Anywhere</div>
        <div className="px-6 text-sm font-semibold">Any week</div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-darkgray">
          <div className="hidden sm:block">Add guests</div>
          <Icon
            name={"faMagnifyingGlass"}
            className="cursor-pointer rounded-full bg-rose-500 px-2 py-1 text-xl text-white"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default Search
