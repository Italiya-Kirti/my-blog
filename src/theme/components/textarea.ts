import type { FlowbiteTextareaTheme } from "flowbite-react"

const Textarea: { textarea: FlowbiteTextareaTheme } = {
  textarea: {
    base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 outline-0 py-2.5 px-4 text14Regular rounded-md",
    colors: {
      gray: "bg-transparent outline-0 border-neutral-200 text-neutral-800 placeholder-neutral-500 hover:border-primary-500 active:border-primary-600 focus:border-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
      error:
        "bg-transparent outline-0 border-red-600 text-neutral-1000 placeholder-neutral-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
      success:
        "bg-transparent outline-0 border-green-600 text-neutral-1000 placeholder-neutral-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
      failure:
        "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
      info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
      warning:
        "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
    },
    withShadow: {
      on: "shadow-sm dark:shadow-sm-light",
      off: "",
    },
  },
}

export default Textarea
