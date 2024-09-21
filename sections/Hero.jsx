"use client";

import { useState } from "react";
import Collapsible from "react-collapsible";

const FAQSection = () => {
  const [isFirstVisible, setFirstVisibility] = useState(false);
  const [isSecondVisible, setSecondVisibility] = useState(false);
  const [isThirdVisible, setThirdVisibility] = useState(false);
  const [isFourthVisible, setFourthVisibility] = useState(false);

  return (
    <section className="grid place-items-center lg:-mt-[200px] -mt-[50px]">
      <div className="bg-white shadow-lg rounded-xl p-[50px] w-full max-w-[400px] lg:max-w-[900px]">
        <div className="flex items-center gap-5">
          <img
            src="icon-star.svg"
            className="h-8 w-8 lg:h-10 lg:w-10"
            alt="Star Icon"
          />
          <h1 className="text-3xl lg:text-6xl font-black text-[#4A1C4E]">
            FAQs
          </h1>
        </div>
        {/* First Collapsible */}
        <Collapsible
          trigger={
            <div className="flex justify-between items-center mt-10 cursor-pointer">
              <span className="font-bold text-[#4A1C4E] text-md lg:text-xl w-[220px] lg:w-[500px]">
                What is Frontend Mentor, and how will it help me?
              </span>
              <img
                src={isFirstVisible ? "icon-minus.svg" : "icon-plus.svg"}
                alt="Toggle Icon"
                className="h-[30px] w-[30px] cursor-pointer object-contain"
                onClick={() => setFirstVisibility(!isFirstVisible)}
              />
            </div>
          }
          open={isFirstVisible}
        >
          <p className="text-[#8A6A87] mt-5 text-base lg:text-lg">
            Frontend Mentor provides developers with practical coding challenges
            that help improve skills in HTML, CSS, JavaScript, and more. It’s an
            ideal platform for learners at any stage, as it offers various
            projects that can enhance your portfolio and practical experience,
            simulating real-world tasks that developers encounter.
          </p>
        </Collapsible>
        <div className="h-[2px] bg-gray-100 mt-4 w-full" />
        {/* Second Collapsible */}
        <Collapsible
          trigger={
            <div className="flex justify-between items-center mt-10 cursor-pointer">
              <span className="font-bold text-[#4A1C4E] text-md lg:text-xl">
                Is Frontend Mentor free?
              </span>
              <img
                src={isSecondVisible ? "icon-minus.svg" : "icon-plus.svg"}
                alt="Toggle Icon"
                className="h-[30px] w-[30px] cursor-pointer object-contain"
                onClick={() => setSecondVisibility(!isSecondVisible)}
              />
            </div>
          }
          open={isSecondVisible}
        >
          <p className="text-[#8A6A87] mt-5 text-base lg:text-lg">
            Tailwind CSS is a utility-first CSS framework that offers an
            efficient way to design web interfaces. Rather than writing custom
            styles, Tailwind allows developers to apply utility classes directly
            in HTML, facilitating a more cohesive and faster development
            process. This approach reduces the need for context-switching and
            enables more responsive and mobile-friendly designs without
            extensive CSS management.
          </p>
        </Collapsible>
        <div className="h-[2px] bg-gray-100 mt-4 w-full" />
        {/* Third Collapsible */}
        <Collapsible
          trigger={
            <div className="flex justify-between items-center mt-10 cursor-pointer">
              <span className="font-bold text-[#4A1C4E] text-md lg:text-xl w-[250px] lg:w-[500px]">
                Can I use Frontend Mentor projects in my portfolio?
              </span>
              <img
                src={isThirdVisible ? "icon-minus.svg" : "icon-plus.svg"}
                alt="Toggle Icon"
                className="h-[30px] w-[30px] cursor-pointer object-contain"
                onClick={() => setThirdVisibility(!isThirdVisible)}
              />
            </div>
          }
          open={isThirdVisible}
        >
          <p className="text-[#8A6A87] mt-5 text-base lg:text-lg">
            Version control systems like Git are essential for modern software
            development. They allow developers to track changes in code,
            collaborate with others more effectively, and revert to previous
            versions if necessary. Using Git also facilitates branching,
            enabling multiple features to be developed simultaneously without
            interference. This makes the development process smoother and more
            organized, especially in team environments.
          </p>
        </Collapsible>
        <div className="h-[2px] bg-gray-100 mt-4 w-full" />
        {/* Fourth Collapsible */}
        <Collapsible
          trigger={
            <div className="flex justify-between items-center mt-10 cursor-pointer">
              <span className="font-bold text-[#4A1C4E] text-md lg:text-xl w-[220px] lg:w-[500px]">
                How can I get help if I'm stuck on a challenge?
              </span>
              <img
                src={isFourthVisible ? "icon-minus.svg" : "icon-plus.svg"}
                alt="Toggle Icon"
                className="h-[30px] w-[30px] cursor-pointer object-contain"
                onClick={() => setFourthVisibility(!isFourthVisible)}
              />
            </div>
          }
          open={isFourthVisible}
        >
          <p className="text-[#8A6A87] mt-5 text-base lg:text-lg">
            Improving your JavaScript skills can be achieved through consistent
            practice and learning. Consider building small projects,
            participating in coding challenges, or contributing to open-source
            projects. Additionally, using resources like online courses,
            tutorials, and coding communities can provide valuable insights and
            support. The key is to stay curious and keep experimenting with new
            concepts and features in JavaScript.
          </p>
        </Collapsible>
      </div>
    </section>
  );
};

export default FAQSection;
