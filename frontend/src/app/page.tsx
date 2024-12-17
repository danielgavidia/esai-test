// import { SidebarTrigger } from "@/components/ui/sidebar";
import ToolCard, { ToolCardProps } from "./x-components/home.tool-card";

const toolCardData: ToolCardProps[] = [
  {
    title: "Story Strategist",
    image:
      "https://strapi-aws-images.s3.amazonaws.com/module_images/Story_Strategist.png?w=1200&q=75",
    tags: ["gettingstarted", "yourstory"],
    description:
      "Uncover unique themes and make unlikely connections across your story to package your most effective college application narrative.",
    isFree: true,
    route: "/story-strategist",
  },
  {
    title: "School Match Maker",
    image:
      "https://strapi-aws-images.s3.amazonaws.com/module_images/School_match_maker_1.png?w=1200&q=75",
    tags: ["gettingstarted", "perfectmatch"],
    description:
      "Find the best schools and programs for you based on your strengths, goals, and budget.",
    isFree: true,
  },
  {
    title: "Major Mentor",
    image:
      "https://strapi-aws-images.s3.amazonaws.com/module_images/Untitled_design_19.png?w=1200&q=75",
    tags: ["perfectmatch", "gettingstarted"],
    description:
      "Discover the best majors for you! Align your interests, strengths, and goals to find a future that fits.",
    isFree: true,
  },
];

const Page = () => {
  return (
    <div className="bg-gradient-to-b from-purple-200 to-purple-100 h-screen w-full flex justify-center items-start p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-5/6 max-w-7xl pt-16">
        {toolCardData.map((tool, i) => (
          <ToolCard key={i} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default Page;
