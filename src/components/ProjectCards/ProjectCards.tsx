import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectData } from "../ProjectDate/projectData";

const ProjectCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {ProjectData.map((project, index) => (
        <div key={index} className="bg-white p-10 shadow-md rounded-lg">
          <Link href={project.link} rel="noopener noreferrer" target="_blank">
            <div className="flex flex-col items-center">
              <h2 className="text-xl border-b-2 border-gray-800 font-bold mb-4">
                {project.name}
              </h2>
              <div className="pt-3 w-96 h-60 mb-5">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  layout="responsive"
                  width={600}
                  height={400}
                  className="rounded"
                />
              </div>
              <p className="w-31ch break-words mb-5">{project.description}</p>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-xl border-b-2 border-gray-800 font-bold mb-3">
                  使用技術
                </h3>
                <div className="flex">
                  <div>
                    <ul className="m-5 font-semibold">
                      <li>言語 :</li>
                      <li>フレームワーク:</li>
                      <li>データベース :</li>
                      <li>その他 :</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="m-5">
                      <li>{project.technologies.language}</li>
                      <li>{project.technologies.framework}</li>
                      <li>{project.technologies.database}</li>
                      <li>{project.technologies.others}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div className="bg-white p-10 shadow-md rounded-lg flex items-center justify-center">
        <h1 className="font-bold text-4xl"> Coming Soon...</h1>
      </div>
    </div>
  );
};

export default ProjectCards;
