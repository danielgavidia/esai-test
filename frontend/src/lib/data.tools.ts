import { Tool } from "@/types/types";

export const tools: Tool[] = [
  {
    type: "story-strategist",
    title: "Story Strategist",
    tags: ["gettingstarted", "yourstory"],
    isFree: true,
    description:
      "Uncover unique themes and make unlikely connections across your story to package your most effective college application narrative.",
    questionBlocks: [
      {
        title: "Tell us about your values",
        description:
          "A value is something that you believe is really important in life. Share three values that matter most to you — such as courage, belonging, or your connection to nature.",
        placeholder:
          "example: I’ve always cared deeply about animal rights and caring for all creatures big and small.",
        rating: 0,
        answer: "",
      },
      {
        title: "Tell us about a hardship or challenge",
        description:
          "Remember, this doesn’t have to be your most traumatic experience. For instance, some students share stories about living in rural areas where accessing resources can be tough, or challenges they've faced navigating certain school subjects. The key here is to focus on you!",
        placeholder:
          "example: Growing up with a learning disability made it hard for me to comprehend what I was reading, which put me behind in school before I found specialized help",
        rating: 0,
        answer: "",
      },
      {
        title: "Tell us about your hobbies",
        description:
          "List the most important sports, clubs, interests, or extra curricular you’re involved with. We don’t need them all, just the ones that are crucial to understanding who you are.",
        placeholder:
          "example: I’m passionate about astrology and the history and culture behind the pseudoscience",
        rating: 0,
        answer: "",
      },
      {
        title: "Tell us about your background",
        description:
          "For many students, race, ethnicity, and family traditions significantly shape their experiences and aspirations. If relevant to you, please share how your cultural background has influenced your journey and future goals.",
        placeholder:
          "example: Growing up in a large Latinx family has shaped my views on family, community, and the significance of our cultural heritage on society.",
        rating: 0,
        answer: "",
      },
      {
        title: "Tell us about your accomplishments",
        description:
          "What are you most proud of achieving? This could be academic, athletic, personal growth-related, family-oriented — no wrong answers!",
        placeholder:
          "example: I was the top scoring player on the JV lacrosse team and took my team to regional championships two years in a row.",
        rating: 0,
        answer: "",
      },
      {
        title: "Tell us about your future goals",
        description:
          "Some students know exactly what they want to pursue on campus, in their major, in under grad school, in their social advocacy work, or in their career path. Share your specific goals if you have them, or give us a general idea of your future goals if you’re undecided.",
        placeholder:
          "example: Ever since I was little I’ve known I want to be a lawyer. I think I want to be a public defender to help people who really need legal assistance but can’t afford it",
        rating: 0,
        answer: "",
      },
      {
        title: "Lastly, tell us the most unique thing about you and your story.",
        description:
          "Think about something that sets you apart from your friends or classmates — maybe it's a special upbringing, a unique hobby or interest you're passionate about, a cause you care deeply about, or a future goal that defines who you are.",
        placeholder:
          "example: One thing that makes me unique is my passion for robotics. While others enjoy sports or music, I love designing and programming robots.",
        rating: 0,
        answer: "",
      },
    ],
  },
  {
    title: "School Match Maker",
    type: "school-matchmaker",
    tags: ["gettingstarted", "perfectmatch"],
    description:
      "Find the best schools and programs for you based on your strengths, goals, and budget.",
    isFree: true,
    questionBlocks: [
      {
        title: "Tell us about your values",
        description:
          "A value is something that you believe is really important in life. Share three values that matter most to you — such as courage, belonging, or your connection to nature.",
        placeholder:
          "example: I’ve always cared deeply about animal rights and caring for all creatures big and small.",
        rating: 0,
        answer: "",
      },
    ],
  },
  {
    title: "Major Mentor",
    type: "major-mentor",
    tags: ["perfectmatch", "gettingstarted"],
    description:
      "Discover the best majors for you! Align your interests, strengths, and goals to find a future that fits.",
    isFree: true,
    questionBlocks: [
      {
        title: "Tell us about your values",
        description:
          "A value is something that you believe is really important in life. Share three values that matter most to you — such as courage, belonging, or your connection to nature.",
        placeholder:
          "example: I’ve always cared deeply about animal rights and caring for all creatures big and small.",
        rating: 0,
        answer: "",
      },
    ],
  },
];
