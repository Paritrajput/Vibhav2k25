import { useState } from "react";
import { useRouter } from "next/router";
import ourwork from "../../data/ourwork.json";
import Layout from "../../Components/UI/Layout";
import WorkCardNew from "../../Components/UI/cards/WorkCard/WorkCardNew.js";

export default function Home() {
  const router = useRouter();
  const [cardState, setCarState] = useState("Events");
  const { id } = router.query;
  const pageState = { Previous: "Previous Years", Current: "Current Years" };
  const currentPage = pageState[id];
  return (
    <Layout>
      <div className="flex justify-center flex-col">
        <div className="mt-14 text-[#edc161] justify-center flex font-[GoodTiming] md:p-0 pl-1 text-4xl md:text-5xl">
          {currentPage}
        </div>

        <div className="text-4xl  mt-12 text-center text-[#edc161] font-[Arial]">
          Events
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 font-[Azonix] py-5 lg:gap-6 md:gap-3 lg:px-12 md:px-6 px-5">
          {ourwork
            ? ourwork[id]
              ? ourwork[id]["Events"]
                ? ourwork[id]["Events"].map((card, ind) => {
                    return (
                      <div key={ind} className="flex justify-center py-2">
                        <WorkCardNew data={card} />
                      </div>
                    );
                  })
                : undefined
              : undefined
            : undefined}
        </div>

        <div className="text-3xl  mt-12 text-center text-[#edc161] font-font-[Arial]">
          Workshops
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 py-5 lg:gap-6 md:gap-3 lg:px-12 md:px-6 px-5">
          {ourwork
            ? ourwork[id]
              ? ourwork[id]["Workshops"]
                ? ourwork[id]["Workshops"].map((card, ind) => {
                    return (
                      <div key={ind} className="flex justify-center py-2">
                        <WorkCardNew data={card} />
                      </div>
                    );
                  })
                : undefined
              : undefined
            : undefined}
        </div>
      </div>
    </Layout>
  );
}
