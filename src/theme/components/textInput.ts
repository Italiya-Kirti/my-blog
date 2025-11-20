import type { FlowbiteTextInputTheme } from "flowbite-react"

const TextInput: { textInput: FlowbiteTextInputTheme } = {
  textInput: {
    base: "flex w-full rounded-md",
    addon:
      "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      rightIcon: {
        base: "absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      input: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 outline-0",
        sizes: {
          sm: "h-9.5 pl-4 pr-3 text14Regular",
          md: "h-10 pl-4 pr-3 !text14Regular",
          lg: "h-13 pl-4 pr-3 text14Regular",
        },
        colors: {
          gray: "bg-transparent outline-0 border-neutral-200 text-neutral-800 placeholder-neutral-150 hover:border-primary-500 active:border-primary-600 focus:border-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          failure:
            "bg-transparent outline-0 border-red-600 text-neutral-1000 placeholder-neutral-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          success:
            "bg-transparent outline-0 border-green-600 text-neutral-1000 placeholder-neutral-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
          error:
            "border-red-500 text-red-900 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          info: "border-blue-500 bg-blue-50 text-blue-900 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500",
          warning:
            "border-yellow-500 bg-yellow-50 text-yellow-900 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        },
        withRightIcon: {
          on: "pr-10",
          off: "",
        },
        withIcon: {
          on: "!pl-10",
          off: "",
        },
        withAddon: {
          on: "rounded-r-md",
          off: "rounded-md",
        },
        withShadow: {
          on: "shadow-sm dark:shadow-sm-light",
          off: "",
        },
      },
    },
  },
}

export default TextInput
