interface HeaderProps {
  visible: boolean
}

export const Header = ({
  visible,
}: HeaderProps) => {
  return <div
    key="header-navbar"
    className={`
      absolute
      top-0
      left-0
      w-full
      h-16
      flex
      justify-center
      items-center
      z-10
      ${visible ? "opacity-100" : "opacity-0"}
      transition-opacity
      duration-700
      ease-in-out
      delay-800
    `}
  >
    <div
      className={`
        flex
        justify-between
        items-center
      `}
    >
      <h3
        className={`
          font-bebas
          text-2xl
          transition-color
          duration-700
          ease-in-out
          p-12
        `}
      >IA</h3>
    </div>
  </div>
}
