// "use client";

// import { SheetHeader, SheetTitle } from "@/components/Sheet";
// import { ChevronRight, List, ListCheck } from "lucide-react";
// import { SheetOptionsType } from "./interface";
// import { OptionWrapper } from "../wrappers";

// export interface DefaultSheetInterface {
//   setCurrentSheet: React.Dispatch<React.SetStateAction<SheetOptionsType>>;
// }

// const DefaultSheet = ({ setCurrentSheet }: DefaultSheetInterface) => {
//   return (
//     <>
//       <SheetHeader>
//         <SheetTitle>{"Customise Views"}</SheetTitle>
//       </SheetHeader>
//       <div className="flex flex-col gap-2 pt-4">
//         <OptionWrapper
//           callback={() => {
//             setCurrentSheet("layout_options");
//           }}
//         >
//           <div className="flex gap-x-2 text-sm items-center">
//             <List className="text-[var(--gray-9)]" size={14} />
//             <label>Layout Options</label>
//           </div>
//           <ChevronRight size={15} className="text-[var(--gray-9)]" />
//         </OptionWrapper>
//         <div className="w-full h-[1px] bg-[var(--gray-7)]" />
//         <OptionWrapper
//           callback={() => {
//             setCurrentSheet("field_options");
//           }}
//         >
//           <div className="flex gap-x-2 text-sm items-center">
//             <ListCheck className="text-[var(--gray-9)]" size={14} />
//             <label>Fields</label>
//           </div>
//           <ChevronRight size={15} className="text-[var(--gray-9)]" />
//         </OptionWrapper>
//       </div>
//     </>
//   );
// };

// export default DefaultSheet;
