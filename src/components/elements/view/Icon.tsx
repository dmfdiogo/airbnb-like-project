import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AppIcons } from "@utils/iconsEnum"
import { useIcons } from "../hooks/useIcon"

type IconsType = keyof typeof AppIcons

interface IconProps {
  onClick?: () => void
  name: IconsType
  className?: string
}

const Icon = ({ onClick, name, className }: IconProps) => {
  const { definition } = useIcons({ name })

  return (
    <div onClick={onClick} className={className ?? "text-2xl text-black"}>
      <FontAwesomeIcon icon={definition} />
    </div>
  )
}

export default Icon
export type { IconProps, IconsType }
