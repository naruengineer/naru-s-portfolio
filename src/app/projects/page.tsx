import React from "react";
import ProjectCards from "@/components/ProjectCards/ProjectCards";
import Footer from "@/components/Footer/Footer";

const ProjectsPage = () => {
  return (
    <div>
      <div className="p-20 bg-gray-100">
        <h2 className="text-6xl font-sans font-bold underline mb-16 text-center">
          MY PROJECTS
        </h2>
        <div className="m-10">
          <ProjectCards />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
