import type { FlowbiteToastTheme } from "flowbite-react"

const Toast: { toast: FlowbiteToastTheme } = {
  toast: {
    root: {
      base: "flex w-full md:min-w-[420px] max-w-[580px] gap-2.5 items-center rounded py-2.5 px-3 text-whiteBlack-100 shadow-toast dark:bg-gray-800 dark:text-gray-400",
      closed: "opacity-0 ease-out",
    },
    toggle: {
      base: "ml-auto inline-flex h-3.5 w-3.5 rounded-lg bg-transparent text-whiteBlack-100 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
      icon: "h-3.5 w-3.5 shrink-0",
    },
  },
}

export default Toast
