// import { SidebarTrigger } from "@/components/ui/sidebar";
import ToolCard from "./x-components/home.tool-card";
import { tools } from "@/lib/data.tools";
import { assets } from "@/lib/data.assets";

const Page = () => {
  const toolData = tools.map((tool) => ({
    ...tool,
    image: assets.find((a) => a.type === tool.type)?.image,
    route: `/${tool.type}`,
  }));

  return (
    <div className="bg-gradient-to-b from-purple-200 to-purple-100 h-screen w-full flex justify-center items-start p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-5/6 max-w-7xl pt-16">
        {toolData.map((tool, i) => (
          <ToolCard key={i} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default Page;
