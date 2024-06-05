import { Button } from "../../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/NovelUI/ui/tab";
import "./tabs.css";

// FIXME: fix shadcn plugin bug

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
      <div className="mt-2 min-h-[170px] rounded-md border-4 px-4 pb-4 pt-1">
        <TabsContent value="account" className="">
          <h2 className="text-xl font-bold text-gray-950">Account</h2>
          <p className="text-gray-500">
            Make changes to your account here. Click save when you're done.
          </p>

          <button className="mt-5 rounded-md bg-black/90 p-2 px-3 text-[12px] text-white">
            Save changes
          </button>
        </TabsContent>
        <TabsContent value="password">
          <h2 className="text-xl font-bold text-gray-950">Password</h2>
          <p className="text-gray-500">
            Make changes to your account here. Click save when you're done.
          </p>
          {/* shadcn button*/}
          <Button variant={"default"} size={"sm"} className="mt-5 text-[12px]">
            Save password
          </Button>
        </TabsContent>
      </div>
    </Tabs>
  );
}
