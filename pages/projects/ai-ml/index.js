import { useEffect, useState } from "react";
import ProjectCard, {SkeletonProjectCard} from "../../../Components/UI/cards/ProjectCard/ProjectCard";
import projects from "../../../data/Projects.json";
import Layout from '../../../Components/UI/Layout'


const Page = () => {
  const [loading , setLoading]=useState(true)
const [projectList, setProjectList]=useState([])
useEffect(()=>{
  
  setProjectList(projects["AI/ML"])
  setTimeout(()=>{setLoading(false)},500)
  
})

  return (
    <Layout>
      <div className="">
          {/* <img src="/Assets/background3.png" className="fixed h-screen w-screen z-[-1]  "/> */}
    <div className="pt-32  bg-black/50 text-center z-50 font-batman">

      <div className="text-4xl text-white text-center font-extrabold mb-5 z-50">
        Projects
      </div>
      <span className="text-3xl text-white text-center mt-12 font-bold z-50">
        AI-ML
      </span>
      <div className="container mx-auto  p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {loading? Array.from({ length: projectList.length || 6 }).map((projectSkelatol, index)=>(<SkeletonProjectCard key={index}/> )) :projectList.map((project, index) => (
          <ProjectCard key={index} project={project}  />
        ))}
      </div>
    </div>
    </div>
    </Layout>
  );
};

export default Page;
