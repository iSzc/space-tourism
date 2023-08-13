import ButtonDestination from "./ButtonDestination/ButtonDestination";
import { useEffect, useState } from "react";
import jsonData from "/public/api/data.json";
import style from "./style.module.css";
import Header from "../../Header/Header";

function DestinationContent(props) {
  const [data, setData] = useState([]);
  const [zoomIn, setZoomIn] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [rotate, setRotate] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    setData(jsonData["destinations"]);
    setSelectedDestination(jsonData["destinations"][0]);
  }, []);

  const buttonDestination = (destination) => {
    if (selectedDestination === destination && isAnimating) {
      return;
    }

    setSelectedDestination(destination);
    setZoomIn(false);
    setRotate(true);

    setTimeout(() => {
      setRotate(false);
      setButtonClicked(false);
    }, 500);
  };

  useEffect(() => {
    if (selectedDestination) {
      setZoomIn(true);
    }
  }, [selectedDestination]);

  return (
    <main
      className={`main w-screen h-screen w640:bg-bgDestmob w1024:bg-bgDesttab bg-bgDest bg-center bg-no-repeat bg-cover flex justify-center w1024:px-0 px-12  ${style.main}`}
    >
      <Header />
      <section className="section flex w1024:flex-col  w1024:w-full w1024:h-screen w425:mt-36 w640:mt-28 w1024:mt-32  w640:gap-y-8 w1024:gap-y-20 max-w-[1090px] max-h-screen w1024:self-start w1024:mb-16 mt-60 mx-5 ">
        <div className="leftDiv w1024:h-auto w480:gap-y-4 w1024:w-full w-7/12 flex flex-col justify-between h-[560px]">
          <div className="titleDiv flex w640:justify-center mb-2 gap-x-6 w640:pl-0 w768:pl-6 w1024:pl-8">
            <span className="titleLeftNum text-[#4b5057] font-bold w1024:text-xl text-3xl font-Barlow tracking-widest">
              01
            </span>
            <span className="titleLeftText font-Barlow font-medium tracking-widest w1024:text-xl text-3xl text-white">
              PICK YOUR DESTINATION
            </span>
          </div>
          <div
            className={`${
              zoomIn ? style.zoomIn : ""
            } divImg w1024:w-full w1024:h-full w1024:flex w1024:justify-center w1024:items-center w640:mt-0  w1024:mt-8`}
          >
            <figure>
              <img
                src={
                  selectedDestination
                    ? selectedDestination.images.png
                    : props.image
                }
                className={`img w640:w-44 w640:h-44 w1024:w-[300px] w1024:h-[300px] ${
                  rotate ? style.animation : ""
                }`}
                alt="Destiny image"
              />
            </figure>
          </div>
        </div>
        <div className="rightDiv w1024:px-6 w1024:h-auto flex flex-col items-center w640:gap-y-6 w1024:gap-y-12 w1024:w-full w-5/12 justify-end gap-y-8 h-[560px] w480:pb-12">
          <div className="btnDiv flex w-full gap-x-8 font-Barlow w1024:justify-center ">
            {data.map((destination, index) => (
              <ButtonDestination
                key={index}
                satelliteName={destination.name.toUpperCase()}
                onClick={() => {
                  buttonDestination(destination);
                  setZoomIn(false);
                  setButtonClicked(true);
                }}
                isActive={selectedDestination === destination}
                disabled={buttonClicked}
              />
            ))}
          </div>
          <div
            className={`contentDiv w-82 w480:h-auto w640:h-64  h-3/6 w1024:gap-y-4 flex flex-col w1024:items-center gap-y-12 ${
              zoomIn ? style.zoomIn : ""
            }`}
          >
            <span className="titleDiv w640:text-6xl w1024:text-7xl font-Bellefair tracking-wider w768:tracking-normal text-white text-8xl">
              {selectedDestination
                ? selectedDestination.name.toUpperCase()
                : props.satelliteName}
            </span>
            {selectedDestination && (
              <span className="descriptionDiv w375:text-base w640:text-center w640:text-[.9rem] text-[#d0d6f9]  w600:w-full w640:w-3/5 w1024:w-3/5  text-lg w1024:text-center w768:leading-0 leading-8">
                {selectedDestination.description}
              </span>
            )}
          </div>
          <hr className="border-[0.1] border-gray-400 w-80 w640:w-full w1024:w-4/6 w1024:w-8/12 w480:mt-2 w-full" />
          <div
            className={`${
              zoomIn ? style.zoomIn : ""
            }statsDiv w375:mt-0 w480:mt-4 w480:gap-y-4 w480:h-auto flex w640:flex-col w640:justify-center w640:items-center w640:w-full w600:h-full w640:h w1024:w-7/12 mb-8 w-full`}
          >
            <div className="statsLeft  w480:w-full w1024:h-full w-3/6 flex flex-col w1024:items-center gap-y-1 ">
              <span className="distanceDiv tracking-widest font-light text-[#d0d6f9] font-Barlow">
                AVG. DISTANCE
              </span>
              <span className="distanceNum text-3xl font-Bellefair text-white">
                {selectedDestination
                  ? selectedDestination.distance.toUpperCase()
                  : props.distanceNumLeft}
              </span>
            </div>
            <div className="statsRight w640:h-5/6 w640:w-full flex flex-col w1024:items-center gap-y-1 w-3/6 ">
              <span className="distanceDiv tracking-widest font-light text-[#d0d6f9] font-Barlow ">
                EST. TRAVEL TIME
              </span>
              <span className="distanceNum font-Bellefair text-3xl text-white">
                {selectedDestination
                  ? selectedDestination.travel.toUpperCase()
                  : props.distanceNumRi}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DestinationContent;
