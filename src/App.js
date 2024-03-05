import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import { placeholder } from "./images";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'IBM Plex Sans', sans-serif",
    headingFontFamily: "'Ubuntu', sans-serif",
    mainBg: "#fff",
    header: {
      subHeading: "TOOLS FOR PRODUCTIVITY",
      subHeadingColor: "#155EEF",
      heading: "5 Time Management Techniques for Busy Professionals",
      headingColor: "#000",
    },
    introduction: {
      title: "Introduction",
      titleColor: "#155EEF",
      info: "Do you often find yourself overwhelmed by your ever-growing to-do list? You're not alone. In today's fast-paced world, managing time efficiently is a skill that many busy professionals struggle to master. In this blog post, we'll explore five proven time management techniques that can help you maximize productivity, reduce stress, and reclaim your personal time.",
      infoColor: "#000",
      bg: "#fff",
      border: "1px solid #D0D5DD",
    },

    mainContent: {
      title: "MAIN CONTENT",
      titleColor: "#155EEF",
      info: "The Importance of Time Management -- In the realm of professional success and personal well-being, effective time management plays a pivotal role. It's not just about getting more done in less time but about enhancing the quality of your work and life.",
      infoColor: "#000",
      border: "1px solid #D0D5DD",
      bg: "#fff",

      contents: [
        {
          title: "TECHNIQUE 1",
          titleColor: "#155EEF",
          tagline: "The Pomodoro Technique",
          taglineColor: "#000",
          border: "1px solid #B2CCFF",
          bg: "#EFF4FF",
          infoColor: "#000",
          data: [
            {
              subTitle: "Overview: ",
              info: "Work for 25 minutes, then take a 5-minute break. After four cycles, take a longer break.",
            },
            {
              subTitle: "Benefits: ",
              info: "Helps maintain focus and provides regular breaks to refresh.",
            },
          ],
        },
        {
          title: "TECHNIQUE 2",
          titleColor: "#155EEF",
          tagline: "The Pomodoro Technique",
          taglineColor: "#000",
          border: "1px solid #B2CCFF",
          bg: "#EFF4FF",
          infoColor: "#000",
          data: [
            {
              subTitle: "Overview: ",
              info: "Work for 25 minutes, then take a 5-minute break. After four cycles, take a longer break.",
            },
            {
              subTitle: "Benefits: ",
              info: "Helps maintain focus and provides regular breaks to refresh.",
            },
          ],
        },
        {
          title: "TECHNIQUE 3",
          titleColor: "#155EEF",
          tagline: "The Eisenhower Matrix",
          taglineColor: "#000",
          border: "1px solid #B2CCFF",
          bg: "#EFF4FF",
          infoColor: "#000",
          data: [
            {
              subTitle: "Overview:",
              info: "Categorize tasks by urgency and importance into four quadrants to prioritize.",
            },
            {
              subTitle: "Benefits: ",
              info: "Helps distinguish between tasks that require immediate attention and those that can wait.",
            },
          ],
        },
        {
          title: "TECHNIQUE 4",
          titleColor: "#155EEF",
          tagline: "The Two-Minute Rule",
          taglineColor: "#000",
          border: "1px solid #B2CCFF",
          bg: "#EFF4FF",
          infoColor: "#000",
          data: [
            {
              subTitle: "Overview:",
              info: "If a task takes less than two minutes, do it immediately.",
            },
            {
              subTitle: "Benefits: ",
              info: "Keeps small tasks from piling up and becoming overwhelming.",
            },
          ],
        },
        {
          title: "TECHNIQUE 5",
          titleColor: "#155EEF",
          tagline: "Saying 'No'",
          taglineColor: "#000",
          border: "1px solid #B2CCFF",
          bg: "#EFF4FF",
          infoColor: "#000",
          data: [
            {
              subTitle: "Overview:",
              info: "Learn to decline requests that do not align with your priorities.",
            },
            {
              subTitle: "Benefits: ",
              info: "Preserves valuable time for tasks that are truly important to you.",
            },
          ],
        },
      ],
      practicalTips: {
        title: "Practical Tips",
        titleColor: "#fff",
        tagline: "The Pomodoro Technique",
        taglineColor: "#000",
        border: "1px solid #155EEF",
        bg: "#155EEF",
        infoColor: "#fff",
        idColor: "#000",
        idBg: "#fff",
        data: [
          {
            subTitle: "Start small: ",
            info: "Incorporate one technique at a time.",
          },
          {
            subTitle: "Be consistent: ",
            info: "Practice your chosen technique(s) daily.",
          },
          {
            subTitle: "Adjust as needed:",
            info: "Find what works best for you and adapt.",
          },
        ],
      },
    },

    visualElements: {
      title: "VISUAL ELEMENTS",
      titleColor: "#155EEF",
      border: "1px solid #D0D5DD",
      bg: "#fff",
      infoColor: "#000",
      elements: [
        {
          img: placeholder,
          info: "Chart showing the potential time savings with each technique.",
        },
        {
          img: placeholder,
          info: "Chart showing the potential time savings with each technique.",
        },
        {
          img: placeholder,
          info: "Chart showing the potential time savings with each technique.",
        },
      ],
    },

    conclusions: {
      title: "Conclusions",
      titleColor: "#155EEF",
      info: "Mastering time management is an ongoing journey, not a destination. By integrating these techniques into your daily routine, you can enhance your productivity, reduce stress, and achieve a better work-life balance. Remember, the ultimate goal is not to be busy, but to be effective. Which technique will you try first?",
      infoColor: "#000",
      border: "1px solid #D0D5DD",
      bg: "#fff",
    },
    callToAction: {
      title: "Call to Action",
      titleColor: "#155EEF",
      info: "Have you tried any of these time management techniques? Share your experiences and tips in the comments below. Let's learn from each other and conquer our busy schedules together!",
      infoColor: "#000",
      border: "1px solid #D0D5DD",
      bg: "#fff",
    },
    authorBio: {
      title: "Author Bio",
      titleColor: "#155EEF",
      info: 'Jane Doe is a productivity coach and author of the bestselling book "Time Mastery for Professionals." Jane shares her insights on various platforms to help others achieve more with less.',
      infoColor: "#000",
      border: "1px solid #D0D5DD",
      bg: "#F9FAFB",
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          "--headingFontFamily": allData.headingFontFamily,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
