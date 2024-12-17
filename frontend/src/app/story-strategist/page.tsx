import { tools } from "@/lib/data.tools";
import ToolMain from "../x-components/tool.main";

const Page = () => {
  return (
    <div className="h-full">
      <ToolMain tool={tools[0]} />
    </div>
  );
};

export default Page;
