import { useEffect, useState } from "react";
import ProjectCard, {
  SkeletonProjectCard,
} from "../../../Components/UI/cards/ProjectCard/ProjectCard";
import projects from "../../../data/Projects.json";
import Layout from "../../../Components/UI/Layout";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    setProjectList(projects["QUANTUM COMPUTING"]);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <Layout>
      <div className="pt-32 text-center font-batman">
        <div className="text-4xl text-white text-center font-extrabold mb-5">
          Projects
        </div>
        <span className="text-3xl text-white text-center mt-12 font-bold">
         QUANTUM COMPUTING
        </span>
        <div className="container mx-auto  p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {loading
            ? Array.from({ length: projectList.length || 6 }).map(
                (projectSkelatol, index) => <SkeletonProjectCard key={index} />
              )
            : projectList.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
