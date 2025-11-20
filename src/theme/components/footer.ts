import type { FlowbiteFooterTheme } from "flowbite-react"

const Footer: { footer: FlowbiteFooterTheme } = {
  footer: {
    root: {
      base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
      bgDark: "bg-gray-800",
      container: "w-full p-6",
    },
    groupLink: {
      base: "flex flex-wrap text12Medium text-neutral-500 dark:text-white",
      link: {
        base: "last:mr-0 mr-2",
        href: "hover:underline",
      },
      col: "flex-col space-y-4",
    },
    icon: {
      base: "text-gray-500 dark:hover:text-white",
      size: "h-5 w-5",
    },
    title: {
      base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white",
    },
    divider: {
      base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8",
    },
    copyright: {
      base: "text12Medium text-neutral-500 dark:text-gray-400 sm:text-center",
      href: "hover:underline mr-2",
      span: "",
    },
    brand: {
      base: "mb-4 flex items-center sm:mb-0",
      img: "mr-3 h-8",
      span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white",
    },
  },
}

export default Footer
