import {
  IconDefinition,
  IconLookup,
  IconName,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core"
import { IconsType } from "../view/Icon"

interface IUseIcons {
  name: IconsType
}

const useIcons = ({ name }: IUseIcons) => {
  const icon = {
    getIconName: () => {
      return icon.formatName(name) as IconName
    },
    formatName: (name: IconsType) => {
      return name
        .toString()
        .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
        .replace("fa-", "")
    },
    getIconLook: (): IconLookup => {
      return { prefix: "fas", iconName: icon.getIconName() }
    },
    getIconDefinition: (): IconDefinition => {
      return findIconDefinition(icon.getIconLook())
    },
  }

  return {
    icon,
    definition: icon.getIconDefinition(),
  }
}

export { useIcons }
