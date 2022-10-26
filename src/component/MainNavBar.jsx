const MainNavBar =() => {
    return (
        <div
        role="menubar"
            className="
         
        hidden
lg:flex
md:hidden
sm:hidden
  z-40
  w-full
  
  justify-between  
  pt-8
  gap-8
  absolute
  right-0
  left-0
  top-16
  bg-amber-400
  shadow-xl
  text-center
  text-lg
  p-6
  items-center
  lg:static
  lg:shadow-none
  lg:w-full
  "
      >
        <a
          href="/"
          role="menuitem"
          className="
  py-1
  px-6
  dark:text-neutral-900
  focus:outline-none
  focus-visible:ring-2
  ring-neutral-900
  rounded-md
  text-neutral-900
  hover:text-white
  hover:bg-teal-900
  hover:dark:text-neutral-100
  transition-colors"
        >
          Home
        </a>
        <a
          href="/"
          role="menuitem"
          className="
       
     mr-auto
    py-1
    px-6
    dark:text-neutral-900
    focus:outline-none
  focus-visible:ring-2
  ring-neutral-900
  rounded-md
  ring-offset-4
  ring-offset-amber-400
  text-neutral-900
  hover:text-white
  hover:bg-teal-900
  hover:dark:text-neutral-100
  transition-colors
  "
        >
          Contact
        </a>
        <a
          href="/"
          role="menuitem"
          className="
    py-1
    px-6
    dark:text-neutral-900
    focus:outline-none
  focus-visible:ring-2
  ring-neutral-900
  rounded-md
  ring-offset-4
  ring-offset-amber-400
  text-neutral-900
  hover:text-white
  hover:bg-teal-900
  hover:dark:text-neutral-100
  transition-colors"
        >
          Login
        </a>
        <a
          href="/"
          role="menuitem"
          className="
    py-1
    px-6
    dark:text-neutral-900
    focus:outline-none
  focus-visible:ring-2
  ring-neutral-900
  rounded-md
  ring-offset-4
  ring-offset-amber-400
  text-neutral-900
  hover:text-white
  hover:bg-teal-900
  hover:dark:text-neutral-100
  transition-colors"
        >
          Sign Up
        </a>
      </div>
    )
}

export default MainNavBar