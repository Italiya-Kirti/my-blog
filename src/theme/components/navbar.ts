import type { NavbarTheme } from "flowbite-react"

const Navbar: { navbar: NavbarTheme } = {
  navbar: {
    root: {
      base: "!bg-transparent px-2 py-2.5 sm:px-4",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full md:block md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pr-4 pl-3 md:p-0 relative font-medium text-base !transition-none hover:!bg-transparent",
      active: {
        on: "!text-white !bg-blue-700",
        off: "!text-black hover:!text-black",
      },
      disabled: {
        on: "!text-gray-400",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden",
      icon: "h-6 w-6 shrink-0",
      title: "",
    },
  },
}

export default Navbar

