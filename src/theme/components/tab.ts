import type { FlowbiteTabTheme } from "flowbite-react"

const Tab: { tab: FlowbiteTabTheme } = {
  tab: {
    base: "flex flex-col gap-5",
    tablist: {
      base: "tablist flex text-center",
      styles: {
        default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
        underline: "flex-wrap -mb-px border-b border-neutral-200 w-fit",
        pills: "flex-wrap  text14Regular text-neutral-500 dark:text-gray-400",
        fullWidth:
          "hidden text14Regular rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400",
      },
      tabitem: {
        base: "flex items-center outline-0 justify-center px-1 pb-2 text14Regular ml-3 first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-neutral-500",
        styles: {
          default: {
            base: "rounded-t-lg",
            active: {
              on: "bg-gray-100 text-primary-600 dark:bg-gray-800 dark:text-primary-500",
              off: "text-neutral-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
            },
          },
          underline: {
            base: "rounded-t-lg",
            active: {
              on: "text14Medium -mb-px text-primary-600 rounded-t-lg border-b border-primary-600 active dark:text-primary-500 dark:border-primary-500",
              off: "text-neutral-500 hover:border-neutral-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
            },
          },
          pills: {
            base: "",
            active: {
              on: "rounded-lg bg-primary-600 text-white",
              off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
            },
          },
          fullWidth: {
            base: "ml-2 first:ml-0 w-full first:rounded-l-lg last:rounded-r-lg",
            active: {
              on: "inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 active focus:outline-none dark:bg-gray-700 dark:text-white",
              off: "bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
            },
          },
        },
        icon: "mr-2 h-5 w-5",
      },
    },
    tabpanel: "tabpanel p-4 bg-whiteBlack-100 shadow-sm rounded-md",
  },
}

export default Tab
