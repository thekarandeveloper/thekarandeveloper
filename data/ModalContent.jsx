// modalContent.js
import { Play } from "lucide-react";
// import MyCustomComponent from "./MyCustomComponent";
import VideoWithTranscript from "../components/VideoIntro";

const introScript = [
  "Hi, I'm Karan Kumar, it's really nice to meet you.",
  "Before we get started, let me introduce myself.",
  "I'm an iOS developer, specialized in working with SwiftUI.",
  "As you can see in my projects, I have hands-on experience.",
  "I also have experience presenting my apps to the Apple team.",
  "I'm really looking forward to talking to you.",
  "Please feel free to explore my work.",
  "Let's sit down for a coffee, my email is right there."
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