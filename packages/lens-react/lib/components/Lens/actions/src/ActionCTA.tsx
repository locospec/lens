export interface ActionCTAInterface {
  data: any;
  callback: any;
  icon: any;
}

const ActionCTA = ({ data, callback, icon }: any) => {
  return (
    <button
      className="le-flex le-cursor-pointer"
      onClick={() => {
        callback(data);
      }}
    >
      {icon}
    </button>
  );
};

export { ActionCTA };
