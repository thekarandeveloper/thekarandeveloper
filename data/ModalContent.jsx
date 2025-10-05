// modalContent.js
import { Play } from "lucide-react";
// import MyCustomComponent from "./MyCustomComponent";
import VideoWithTranscript from "../components/VideoIntro";

const introScript = [
  "Hey, I’m Karan an iOS developer who",
  "loves building apps that feel smooth, fast, and genuinely enjoyable to use.",
"I focus on frontend experience crafting clean interfaces, meaningful animations", 
"and small details that make an app feel premium and human.",
"I’ve built and shipped a few production apps, each teaching me", 
"how design, performance, and real-world use come together. Thanks a lot for checking out my work."
];

export const modalContent = {


  
  hero: {
    heading: "Meet Karan",
    component: (
     <VideoWithTranscript
  videoSrc="IntroVideo.mp4"
  transcript={introScript}
  lineHeight={60}
  speed={0.4}
/>
    ),
  },
//   project: {
//     heading: "Project Details",
//     component: <MyCustomComponent />,
//   },
  
};