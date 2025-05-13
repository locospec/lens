import { cn } from "@lens/base/lib/utils";

const VANILLA_THEME = {
  no_data: cn("text-gray-600", "dark:text-gray-400"),
  wrapper: cn("border-gray-100 ", "dark:border-gray-100"),
  header_row: cn(
    "border-b border-gray-200 text-gray-500 font-normal text-sm",
    "dark:border-gray-100 dark:text-white"
  ),
  header_cell: cn(
    "border-r",
    "bg-gray-50",
    "dark:bg-gray-800",
    "data-[islast=true]:border-r-0"
  ),
  resize_handler: cn(
    "border-r-0",
    "hover:border-gray-700 hover:bg-gray-600",
    "dark:hover:border-gray-300 dark:hover:bg-gray-400"
  ),
  resize_handler_isresizing: cn(
    "data-[isresising=true]:bg-gray-700",
    "dark:data-[isresising=true]:bg-gray-300"
  ),
  row: cn(
    "hover:bg-gray-200 data-[state=checked]:bg-gray-200 text-gray-900 border-b border-gray-100 bg-white text-sm",
    "dark:hover:bg-gray-800 dark:data-[state=checked]:bg-gray-800 dark:text-gray-100 dark:border-gray-100 dark:bg-gray-700"
  ),
  cell: cn(
    "border-gray-100",
    "dark:border-gray-100",
    "border-r"
    // 'data-[islast=true]:border-r-0',
  ),
  pinned_cells: cn(
    "group-hover:bg-gray-200 border-gray-100 bg-white",
    "dark:group-hover:bg-gray-800 dark:border-gray-100 dark:bg-gray-700"
  ),
  checkbox: cn(
    "border-gray-900 data-[state=checked]:bg-gray-900 data-[state=checked]:text-white",
    "dark:border-gray-200 dark:data-[state=checked]:bg-gray-200 dark:data-[state=checked]:text-black"
  ),
  dragoverlay: cn(
    "bg-transparent border backdrop-blur-md cursor-grabbing text-black",
    "dark:text-white "
  ),
};

const STRIPPED_THEME = {
  no_data: cn("text-gray-600", "dark:text-gray-400"),
  wrapper: cn("border-gray-100 ", "dark:border-gray-100"),
  header_row: cn(
    "border-b border-gray-200 text-gray-500 font-normal text-xs",
    "dark:border-gray-100 dark:text-white"
  ),
  header_cell: cn(
    "border-r",
    "bg-gray-50",
    "dark:bg-gray-800",
    "data-[islast=true]:border-r-0"
  ),
  resize_handler: cn(
    "border-r-0",
    "hover:border-gray-700 hover:bg-gray-600",
    "dark:hover:border-gray-300 dark:hover:bg-gray-400"
  ),
  resize_handler_isresizing: cn(
    "data-[isresising=true]:bg-gray-700",
    "dark:data-[isresising=true]:bg-gray-300"
  ),
  row: cn(
    "hover:bg-gray-200 data-[state=checked]:bg-gray-200 text-gray-900 border-b border-gray-100 bg-white text-sm",
    "dark:hover:bg-gray-800 dark:data-[state=checked]:bg-gray-800 dark:text-gray-100 dark:border-gray-100 dark:bg-gray-700",
    "data-[even=true]:bg-gray-50 data-[even=true]:hover:bg-gray-200",
    "dark:data-[even=true]:bg-gray-800 dark:data-[even=true]:hover:bg-gray-800"
  ),
  cell: cn("border-gray-100", "dark:border-gray-100", "border-r"),
  pinned_cells: cn(
    "group-hover:bg-gray-200 border-gray-500 bg-white",
    "data-[even=true]:bg-gray-50 data-[even=true]:group-hover:bg-gray-200",
    "dark:group-hover:bg-gray-800 dark:border-gray-100 dark:bg-gray-700",
    "dark:data-[even=true]:bg-gray-800 dark:data-[even=true]:group-hover:bg-gray-800"
  ),
  checkbox: cn(
    "border-gray-900 data-[state=checked]:bg-gray-900 data-[state=checked]:text-white",
    "dark:border-gray-200 dark:data-[state=checked]:bg-gray-200 dark:data-[state=checked]:text-black"
  ),
  dragoverlay: cn(
    "bg-transparent border backdrop-blur-md cursor-grabbing text-black",
    "dark:text-white"
  ),
};

const PLUM_THEME = {
  no_data: cn("text-purple-700", "dark:text-purple-300"),
  cell: cn("border-purple-400", "dark:border-purple-300"),
  header_row: cn(
    "border-b border-purple-400 text-purple-900 font-semibold bg-purple-50",
    "dark:border-purple-300 dark:text-purple-100 dark:bg-purple-950"
  ),
  wrapper: cn("border-purple-400", "dark:border-purple-300"),
  row: cn(
    "hover:bg-purple-100 data-[state=checked]:bg-purple-100 text-purple-900 border-b border-purple-300",
    "dark:hover:bg-purple-900 dark:data-[state=checked]:bg-purple-900 dark:text-purple-100 dark:border-purple-300"
  ),
  resize_handler: cn(
    "bg-transparent border-r data-[islast=true]:border-r-0 border-purple-400 hover:border-purple-600 hover:bg-purple-300/20",
    "dark:border-purple-300 dark:hover:border-purple-400 dark:hover:bg-purple-300/30"
  ),
  resize_handler_isresizing: cn(
    "data-[isresising=true]:bg-purple-600",
    "dark:data-[isresising=true]:bg-purple-300"
  ),
  checkbox: cn(
    "border-purple-900 data-[state=checked]:bg-purple-900 data-[state=checked]:text-white",
    "dark:border-purple-200 dark:data-[state=checked]:bg-purple-200 dark:data-[state=checked]:text-black"
  ),
  dragoverlay: cn(
    "bg-purple-100 border border-purple-300 backdrop-blur-md cursor-grabbing text-purple-900",
    "dark:bg-purple-900 dark:border-purple-600 dark:text-purple-100"
  ),
};

const CITRUS_THEME = {
  no_data: cn("text-amber-600", "dark:text-amber-400"),
  cell: cn("border-yellow-500", "dark:border-amber-300"),
  header_row: cn(
    "border-b border-yellow-500 text-orange-900 font-semibold bg-yellow-50",
    "dark:border-amber-300 dark:text-amber-100 dark:bg-yellow-950"
  ),
  wrapper: cn("border-yellow-500", "dark:border-amber-300"),
  row: cn(
    "hover:bg-yellow-100 data-[state=checked]:bg-yellow-200 text-orange-900 border-b border-yellow-400",
    "dark:hover:bg-yellow-900 dark:data-[state=checked]:bg-yellow-800 dark:text-amber-100 dark:border-yellow-300"
  ),
  resize_handler: cn(
    "bg-transparent border-r data-[islast=true]:border-r-0 border-yellow-400 hover:border-yellow-600 hover:bg-amber-200/50",
    "dark:border-yellow-300 dark:hover:border-amber-400 dark:hover:bg-amber-200/30"
  ),
  resize_handler_isresizing: cn(
    "data-[isresising=true]:bg-yellow-500",
    "dark:data-[isresising=true]:bg-amber-300"
  ),
  checkbox: cn(
    "border-amber-700 data-[state=checked]:bg-amber-700 data-[state=checked]:text-white",
    "dark:border-amber-300 dark:data-[state=checked]:bg-amber-300 dark:data-[state=checked]:text-black"
  ),
  dragoverlay: cn(
    "bg-amber-100 border border-yellow-300 backdrop-blur-md cursor-grabbing text-orange-900",
    "dark:bg-yellow-900 dark:border-yellow-500 dark:text-amber-100"
  ),
};

const BLOSSOM_THEME = {
  no_data: cn("text-rose-600", "dark:text-rose-300"),
  cell: cn("border-pink-400", "dark:border-pink-300"),
  header_row: cn(
    "border-b border-pink-400 text-rose-900 font-semibold bg-pink-50",
    "dark:border-pink-300 dark:text-pink-100 dark:bg-pink-950"
  ),
  wrapper: cn("border-pink-400", "dark:border-pink-300"),
  row: cn(
    "hover:bg-rose-100 data-[state=checked]:bg-rose-200 text-rose-900 border-b border-pink-300",
    "dark:hover:bg-pink-900 dark:data-[state=checked]:bg-pink-800 dark:text-pink-100 dark:border-pink-300"
  ),
  resize_handler: cn(
    "bg-transparent border-r data-[islast=true]:border-r-0 border-pink-300 hover:border-rose-500 hover:bg-pink-300/20",
    "dark:border-pink-300 dark:hover:border-pink-400 dark:hover:bg-pink-400/20"
  ),
  resize_handler_isresizing: cn(
    "data-[isresising=true]:bg-rose-500",
    "dark:data-[isresising=true]:bg-pink-300"
  ),
  checkbox: cn(
    "border-rose-700 data-[state=checked]:bg-rose-700 data-[state=checked]:text-white",
    "dark:border-rose-300 dark:data-[state=checked]:bg-rose-300 dark:data-[state=checked]:text-black"
  ),
  dragoverlay: cn(
    "bg-pink-100 border border-pink-300 backdrop-blur-md cursor-grabbing text-rose-900",
    "dark:bg-pink-900 dark:border-pink-500 dark:text-pink-100"
  ),
};

const COSMIC_THEME = {
  no_data: cn("text-gray-300", "dark:text-fuchsia-400"),
  cell: cn("border-gray-700", "dark:border-fuchsia-300"),
  header_row: cn(
    "border-b border-gray-700 text-white font-semibold bg-gray-900",
    "dark:border-fuchsia-300 dark:text-fuchsia-100 dark:bg-black"
  ),
  wrapper: cn(
    "border-gray-700 bg-gray-950",
    "dark:border-fuchsia-300 dark:bg-black"
  ),
  row: cn(
    "hover:bg-gray-800 data-[state=checked]:bg-gray-800 text-white border-b border-gray-700",
    "dark:hover:bg-fuchsia-950 dark:data-[state=checked]:bg-fuchsia-950 dark:text-fuchsia-100 dark:border-fuchsia-300"
  ),
  resize_handler: cn(
    "bg-transparent border-r data-[islast=true]:border-r-0 border-gray-600 hover:border-fuchsia-400 hover:bg-fuchsia-500/10",
    "dark:border-fuchsia-300 dark:hover:border-fuchsia-400 dark:hover:bg-fuchsia-400/20"
  ),
  resize_handler_isresizing: cn(
    "data-[isresising=true]:bg-fuchsia-600",
    "dark:data-[isresising=true]:bg-fuchsia-300"
  ),
  checkbox: cn(
    "border-fuchsia-700 data-[state=checked]:bg-fuchsia-700 data-[state=checked]:text-white",
    "dark:border-fuchsia-300 dark:data-[state=checked]:bg-fuchsia-300 dark:data-[state=checked]:text-black"
  ),
  dragoverlay: cn(
    "bg-gray-900 border border-fuchsia-600 backdrop-blur-md cursor-grabbing text-white",
    "dark:bg-black dark:border-fuchsia-500 dark:text-fuchsia-100"
  ),
};

export {
  VANILLA_THEME,
  STRIPPED_THEME,
  BLOSSOM_THEME,
  COSMIC_THEME,
  CITRUS_THEME,
  PLUM_THEME,
};
