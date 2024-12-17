"use client";

import { tools } from "@/lib/data.tools";
import ToolMain from "../x-components/tool.main";
import { useEffect, useState } from "react";
import { Tool } from "@/types/types";

const Page = () => {
  const [toolData, setToolData] = useState<Tool[] | null>(null);

  useEffect(() => {
    setToolData(tools);
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="h-full w-full bg-gradient-to-b from-purple-200 to-purple-100 p-4 flex justify-center"
    >
      {toolData && <ToolMain tool={tools[0]} />}
    </div>
  );
};

export default Page;
