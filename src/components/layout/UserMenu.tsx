"use client"

import Icon from "@components/elements/view/Icon"
import { useCallback, useState } from "react"
import Avatar from "./Avatar"
import MenuItem from "./MenuItem"

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-200 md:block"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <Icon
            className=" cursor-pointer px-2 text-2xl text-darkgray"
            name={"faBars"}
            onClick={() => {}}
          />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            <>
              <MenuItem onClick={() => {}} label={"Login"} />
              <MenuItem onClick={() => {}} label={"Sign up"} />
            </>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
