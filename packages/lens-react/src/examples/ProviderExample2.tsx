import { LensProvider } from "../../../lens-react/lib/main";
// import CustomSearchInput from "./components/CustomSearch";

export interface CallbackInterface {
  url: string;
  data: Record<string, any>;
}

const ProviderExample = () => {
  const lensConfig3 = {
    endpoint: "/api/data-bench/auction-data-3",
    permissionHeaders: { sample: "" },
    context: {
      distributer_id: "abc",
    },
    view: "default_view",
  };

  return <LensProvider lensConfiguration={lensConfig3} />;
};

export default ProviderExample;

// const [showSheet, setShowSheet] = useState(false);

{
  /* <View>
        <div className="flex items-center justify-between gap-x-2 border border-b-0 border-[#eee] p-4">
          <div className="flex h-full flex-col justify-between gap-y-2">
            <SearchInput />
          </div>
          <SimpleFilters />
        </div>
        <div className="h-[400px] px-4">
          <Datatable />
        </div>
      </View>
    </LensProvider> */
}

{
  /* <button
  className="h-9 border border-gray-200 bg-gray-100 p-2 text-center"
  onClick={() => {
    setShowSheet((prev: any) => !prev);
  }}
>
  Customise
</button>; */
}
