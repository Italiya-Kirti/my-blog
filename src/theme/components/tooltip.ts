import type { FlowbiteTooltipTheme } from "flowbite-react"

const Tooltip: { tooltip: FlowbiteTooltipTheme } = {
  tooltip: {
    target: "w-fit",
    base: "absolute inline-block z-10 rounded-md py-[9px] px-3 text12Regular",
    animation: "transition-opacity",
    hidden: "invisible hidden opacity-0",
    style: {
      dark: "bg-neutral-1000 opacity-95 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
    },
    content: "relative z-15",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-neutral-1000 opacity-95 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700",
      },
      placement: "-4px",
    },
  },
}

export default Tooltip
