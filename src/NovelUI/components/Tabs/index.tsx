import { Button } from "../../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tab";
import "./tabs.css";

export function TabsUI() {
  return (
    <Tabs defaultValue="account" className="w-[400px] text-[13px]">
      <TabsList className="grid w-full grid-cols-2 bg-gray-200 text-gray-500">
        <TabsTrigger value="account" className="TabsTrigger">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className="TabsTrigger">
          Password
        </TabsTrigger>
      </TabsList>
      <div className="border-4 rounded-md mt-2 px-4 pt-1  pb-4 min-h-[170px]">
        <TabsContent value="account" className="">
          <h2 className="text-gray-950 font-bold text-xl">Account</h2>
          <p className="text-gray-500">
            Make changes to your account here. Click save when you're done.
          </p>

          <button className="bg-black/90 text-white text-[12px] p-2 px-3 rounded-md mt-5">
            Save changes
          </button>
        </TabsContent>
        <TabsContent value="password">
          <h2 className="text-gray-950 font-bold text-xl">Password</h2>
          <p className="text-gray-500">
            Make changes to your account here. Click save when you're done.
          </p>
          {/* shadcn button*/}
          <Button variant={"default"} size={"sm"} className="text-[12px] mt-5">
            Save password
          </Button>
        </TabsContent>
      </div>
    </Tabs>
  );
}
