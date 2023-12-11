import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-5 px-10 flex-wrap">
        <ProjectCard
          src="/123.jpg"
          title="Netflix Clone"
          description="This is Netflix Clone Full project But Login no Working and I am write Api Netflix Clone"
        />
        <ProjectCard
          src="/tiffest.jpg"
          title="Tiffest.Uz"
          description="Мастерклассы Ташкентского международного кинофестиваля: возможность для начинающих кинематографистов"
        />
        <ProjectCard
          src="/space.jpg"
          title="Space Themed Website"
          description="This Project My Project and Protofolio !!"
        />
        <ProjectCard
          src="/moment.jpg"
          title="Space Themed Website"
          description="Заказать изготовление памятников в Москве и МО — гранитная мастерская Монумент
          Изготовление памятников!"
        />
        <ProjectCard
          src="/alisherRustamov.jpg"
          title="Alisher Rustamov website"
          description="This is Project Tasking and Frilanse!"
        />
        <ProjectCard
          src="/anime.jpg"
          title="My Anime Website"
          description="This is Project interesting anime and I like anime! Iam full write Api"
        />
        <ProjectCard
          src="/ussd.jpg"
          title="USSDQUICK"
          description="This is Project Searching Play Store USSSQUICK Webview"
        />
        <ProjectCard
          src="/notion.jpg"
          title="Notion AI"
          description="This is Project Notion AI clone Version! Iam full write Api"
        />
      </div>
    </div>
  );
};

export default Projects;
