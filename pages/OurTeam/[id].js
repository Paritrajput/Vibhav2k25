import { useRouter } from "next/router";
import Layout from "../../Components/UI/Layout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CurrentTeamPhotos from "../../data/team.json";
import AluminiTeamPhotos from "../../data/alumni.json";
import TeamCardnew from "../../Components/UI/cards/TeamCardnew";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 540 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1,
  },
};

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const pageState = { currteam: "Current Team", alumni: "Alumni" };
  const tabs = ["Current Team", "Alumni"];
  const alumniYear = ["2019", "2020", "2021", "2022", "2023"];
  const currentPage = pageState[id];
  return (
    <Layout>
      <div className="sm:m-8  ">
        <h1 className=" text-4xl rounded-md text-[#edc161] mt-12 md:text-5xl flex justify-center items-center font-[GoodTiming]  ">
          {" "}
          {currentPage}{" "}
        </h1>
        {currentPage === "Alumni" ? (
          alumniYear.map((year, index) => {
            return (
              <div key={index}>
                <h1 className="text-2xl mb-4 mt-12 text-center text-[#edc161] font-[arial] ">
                  {year}
                </h1>
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  responsive={responsive}
                  ssr={true}
                  infinite={true}
                  autoPlaySpeed={2000}
                  keyBoardControl={true}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  itemClass="carousel-item-padding-40-px my-4"
                  partialVisbile
                >
                  {AluminiTeamPhotos[year].map((post, ind) => {
                    return (
                      <TeamCardnew cardType="alumni" key={ind} data={post} />
                    );
                  })}
                </Carousel>
              </div>
            );
          })
        ) : (
          <div >
            <h1 className="text-[#edc161] text-2xl mt-12 mb-4 text-center font-[arial]">
              SUPER FINAL YEAR MEMBERS
            </h1>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="carousel-item-padding-40-px my-4"
            >
              {CurrentTeamPhotos["Super Final Year"].map((post, ind) => {
                return <TeamCardnew cardType="team" key={ind} data={post} />;
              })}
            </Carousel>

            <h1 className="text-[#edc161] text-2xl mt-12 mb-4 text-center font-[arial]">
              FINAL YEAR MEMBERS
            </h1>

            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="carousel-item-padding-40-px my-4"
            >
              {CurrentTeamPhotos["Final Year"].map((post, ind) => {
                return <TeamCardnew cardType="team" key={ind} data={post} />;
              })}
            </Carousel>

            <h1 className="text-[#edc161] text-2xl mt-12 mb-4 text-center font-[arial]">
              COORDINATORS
            </h1>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="carousel-item-padding-40-px my-4"
            >
              {CurrentTeamPhotos["Third Year"].map((post, ind) => {
                return <TeamCardnew cardType="team" key={ind} data={post} />;
              })}
            </Carousel>
            <h1 className="text-[#edc161] text-2xl mt-12 mb-4 text-center font-[arial]">
              EXECUTIVE MEMBERS
            </h1>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="carousel-item-padding-40-px my-4"
            >
              {CurrentTeamPhotos["Second Year"].map((post, ind) => {
                return <TeamCardnew cardType="team" key={ind} data={post} />;
              })}
            </Carousel>

            <h1 className="text-[#edc161] text-2xl mt-12 mb-4 text-center font-[arial]">
              VOLUNTEERS
            </h1>
            <div className="blob blob-9"></div>

            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="carousel-item-padding-40-px my-4"
            >
              {CurrentTeamPhotos["First Year"].map((post, ind) => {
                return (
                  <>
                    <TeamCardnew cardType="team" key={ind} data={post} />
                  </>
                );
              })}
            </Carousel>
          </div>
        )}
      </div>
    </Layout>
  );
}
