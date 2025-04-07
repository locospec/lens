import { Card } from "@/base/components/ui/card";
import { Dialog, DialogTrigger } from "@/base/components/ui/dialog";
import AddViewDialog from "./AddViewDialog";
import { TabsContent } from "@/base/components/ui/tabs";

export interface AddViewTabInterface {}

const AddViewTab = ({}: AddViewTabInterface) => {
  const card_classes = "w-[200px] h-[200px] flex items-center justify-center";

  return (
    <TabsContent key={"add"} value="add">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <h1 className="font-bold text-2xl">Add new view here</h1>
        <div className="flex gap-x-5">
          <Dialog>
            <DialogTrigger asChild>
              <Card className={card_classes}>Add a Data Table</Card>
            </DialogTrigger>
            <AddViewDialog viewType="table" />
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <Card className={card_classes}>Add a Raw Data </Card>
            </DialogTrigger>
            <AddViewDialog viewType="raw" />
            <Card className={card_classes}>Coming Soon</Card>
          </Dialog>
        </div>
      </div>
    </TabsContent>
  );
};

export default AddViewTab;
