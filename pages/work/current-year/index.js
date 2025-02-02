import { useEffect, useState } from "react";
import WorkCard, {
  SkeletonWorkCard,
} from "../../../Components/UI/cards/WorkCard";
import ourWorkData from "../../../data/ourwork.json";
import Layout from "../../../Components/UI/Layout";
export default function Home() {
  const [events, setEvents] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    setTimeout(() => {
      setEvents(ourWorkData.Current.Events);
      setWorkshops(ourWorkData.Current.Workshops);
      setIsLoading(false);
    }, 500);
  }, []);
  if (events.length === 0 && workshops.length === 0) {
    return (
      <Layout>
        {" "}
        <div className="h-[90Vh]  font-batman">
        <div className="pt-60 mx-auto flex flex-col justify-center items-center h-[70vh] gap-5 w-full p-5 relative text-gray-500">
          <h1 className=" text-2xl sm:text-4xl font-bold ">
            Current Year Work
          </h1>
          <h1 className=" text-2xl sm:text-4xl font-bold ">Coming Soon ...</h1>
        </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container text-center mx-auto mt-0 p-1 font-batman ">
        <div className="z-50 relative  text-white font-batman">
          <h1 className="text-3xl font-extraboldnz-50 font-batman">Our Work</h1>
          {events.length > 0 && (
            <div className="mb-3 md:p-5 xl:p-10">
              <div className="text-3xl font-bold pb-5 mb-5">
                Current Year Events
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-sm:gap-10 px-0">
                {isLoading
                  ? Array.from({ length: 2 }).map((_, index) => (
                      <SkeletonWorkCard key={index} />
                    ))
                  : events.map((item, index) => (
                      <WorkCard
                        key={item.id}
                        index={index}
                        work={item}
                        year="current-year"
                        type="events"
                      />
                    ))}
              </div>
            </div>
          )}
          {workshops.length > 0 && (
            <div className=" mb-4 pt-7 md:p-5 xl:p-10 z-50 ">
              <div className="text-3xl font-bold pb-5">
                Current Year Workshops
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-sm:gap-10 mt-5">
                {isLoading
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <SkeletonWorkCard key={index} />
                    ))
                  : workshops.map((item, index) => (
                      <WorkCard
                        key={item.id}
                        work={item}
                        year="current-year"
                        type="workshops"
                      />
                    ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
