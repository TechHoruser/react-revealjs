interface HeaderProps {
  visible: boolean
  darkMode: boolean
}

export const Header = ({
  visible,
  darkMode,
}: HeaderProps) => {
  return <div
    key="header-navbar"
    className={`
      absolute
      top-0
      left-0
      w-full
      h-16
      px-8
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
        w-full
        h-full
      `}
    >
      <h3
        className={`
          font-bebas
          text-2xl
          transition-color
          duration-700
          ease-in-out
        `}
      >Inteligencia Artificial</h3>
      <div className="flex justify-right align-center relative h-8 w-52">
        <img
          className={`
            absolute right-0
            ${darkMode ? "opacity-100" : "opacity-0"}
            transition-opacity
            duration-700
            ease-in-out
          `}
          src="white_logo_horizontal.png"
          alt="logo"
        />
        <img
          className={`
            absolute right-0
            h-8
            ${darkMode ? "opacity-0" : "opacity-100"}
            transition-opacity
            duration-700
            ease-in-out
          `}
          src="black_logo_horizontal.png"
          alt="logo"
        />
      </div>
    </div>
  </div>
}
