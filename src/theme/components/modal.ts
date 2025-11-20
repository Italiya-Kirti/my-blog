import type { FlowbiteModalTheme } from "flowbite-react"

const Modal: { modal: FlowbiteModalTheme } = {
  modal: {
    root: {
      base: "fixed top-0 right-0 left-0 z-15 overflow-y-auto overflow-x-hidden md:inset-0 md:h-full max-w-screen",
      show: {
        on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
        off: "hidden",
      },
      sizes: {
        sm: "max-w-[350px]",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-[600px]",
        "2xl": "max-w-[650px]",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl",
      },
      positions: {
        "top-left": "items-start justify-start",
        "top-center": "items-start justify-center",
        "top-right": "items-start justify-end",
        "center-left": "items-center justify-start",
        center: "items-center justify-center",
        "center-right": "items-center justify-end",
        "bottom-right": "items-end justify-end",
        "bottom-center": "items-end justify-center",
        "bottom-left": "items-end justify-start",
      },
    },
    content: {
      base: "relative w-full h-auto rounded-lg max-h-[92vh] overflow-hidden mx-2",
      inner: "relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[92vh]",
    },
    body: {
      base: "flex-1 overflow-auto !bg-lightBg",
      popup: "pt-0",
    },
    header: {
      base: " px-6 py-3.5 flex items-center justify-between dark:border-gray-600 border-b bg-whiteBlack-100",
      popup: "!p-2 !border-b-0",
      title: "text16Medium text-neutral-900 dark:text-white flex-1",
      close: {
        base: "text-neutral-500 hover:text-neutral-700 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-4 w-4",
      },
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600 bg-whiteBlack-100",
      popup: "border-t",
    },
  },
}

export default Modal
