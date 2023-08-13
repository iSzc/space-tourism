import Header from "../../Header/Header";
import ButtonCrew from "./ButtonCrew/ButtonCrew";
import { useEffect, useState } from "react";
import jsonData from "/public/api/data.json";
import style from "./style.module.css";

function CrewContent(props) {
  const [data, setData] = useState([]);
  const [zoomIn, setZoomIn] = useState(false);
  const [selectedCrew, setSelectedCrew] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    setData(jsonData["crew"]);
    setSelectedCrew(jsonData["crew"][0]);
  }, []);

  const buttonCrew = (crew) => {
    if (selectedCrew === crew && isAnimating) {
      return;
    }

    setSelectedCrew(crew);
    setZoomIn(false);

    setTimeout(() => {
      setButtonClicked(false);
    }, 500);
  };

  useEffect(() => {
    if (selectedCrew) {
      setZoomIn(true);
    }
  }, [selectedCrew]);

  return (
    <main
      className={`main w-screen h-screen w640:bg-bgCrewmob w1024:bg-bgCrewtab bg-bgCrew bg-center bg-no-repeat bg-cover flex justify-center items-between scroll ${style.main}`}
    >
      <Header />
      <section className="section flex flex-col w640:items-center w1024:h-auto w1024:items-center w1024:mt-2 relative w1024:w-screen w-[600px] w1024:ml-0 ml-4 z-[-1]">
        <div className="titleDiv flex gap-x-6 w640:mt-28 w640:justify-center w640:ml-0 w640:self-center w1024:mt-32 w1024:ml-8 w1024:self-start w-72 mt-56">
          <span className="titleNumSpan text-[#5d5d64] font-bold font-Barlow tracking-widest font-bold w640:text-base w1024:text-xl text-2xl">
            02
          </span>
          <span className="titleSpan font-Barlow font-medium w1024:tracking-widest tracking-[5px] text-white w640:text-base w1024:text-xl text-2xl">
            MEET YOUR CREW
          </span>
        </div>
        <div className="divImg w640:h-[227px] w640:mt-7 w640:flex w640:justify-center w640:block hidden">
          <figure>
            <img
              src={selectedCrew ? selectedCrew.images.png : props.image}
              alt=""
              className={`img h-full w-auto ${zoomIn ? style.zoomIn : ""} `}
            />
          </figure>
        </div>
        <hr className="w-11/12 border-[0.1] border-gray-400 w640:block hidden" />
        <div className="buttonDiv w640:flex w640:gap-x-4 w640:mt-8 w640:block hidden ">
          {data.map((crew, index) => (
            <ButtonCrew
              className=""
              key={index}
              onClick={() => {
                buttonCrew(crew);
                setZoomIn(false);
              }}
              disabled={buttonClicked}
            />
          ))}
        </div>
        <div
          className={`contentDiv flex flex-col w1024:items-center w640:max-w-[340px] w640:mt-8 w1024:mt-12 w1024:max-w-[610px] w1024:leading-[20px] w1024:ml-0 w-auto mt-32  h-[320px] w1024:pb-0 pb-24 ${
            zoomIn ? style.zoomIn : ""
          }`}
        >
          <span className="positionDiv w640:text-sm font-light font-Bellefair text-[#8f9296] w1024:text-2xl text-3xl">
            {selectedCrew
              ? selectedCrew.role.toUpperCase()
              : props.crewPosition}
          </span>
          <span className="nameDiv font-Bellefair w640:text-2xl w1024:text-4xl text-white text-6xl mt-4">
            {selectedCrew ? selectedCrew.name.toUpperCase() : props.crewName}
          </span>
          <span className="descDiv  font-Barlow font-light w1024:text-center w640:text-lg text-[#ced4f7] tracking-wider w640:leading-[25px] w1024:mt-4 w1024:text-lg leading-8 w1024:px-1 w1024:w-auto w-9/12 mt-6 text-xl h-full ">
            {selectedCrew ? selectedCrew.bio : props.crewDescription}
          </span>
        </div>
        <div className="buttonDiv w640:hidden flex w1024:gap-x-4 w1024:mt-12 w1024:ml-0 mt-20 gap-x-6">
          {data.map((crew, index) => (
            <ButtonCrew
              className=""
              key={index}
              onClick={() => {
                buttonCrew(crew);
                setZoomIn(false);
              }}
              disabled={buttonClicked}
            />
          ))}
        </div>
        <div className="divImgFooter w640:hidden w1024:w-[390px] mt-16 w1024:relative absolute w1024:right-0 right-0 bottom-0 h-[643px] w-[470px] w1024:block hidden">
          <img
            src={selectedCrew ? selectedCrew.images.png : props.image}
            alt=""
            className={`h-full w-auto ${zoomIn ? style.zoomIn : ""} `}
          />
        </div>
      </section>
      <div className="divImgFooter w-[450px] h-screen w1024:hidden mr-4 pt-80">
        <div className="divImgFooter w1024:hidden sticky h-[619px] w-[450px] ">
          <img
            src={selectedCrew ? selectedCrew.images.png : props.image}
            alt=""
            className={`h-full w-full   ${zoomIn ? style.zoomIn : ""} `}
          />
        </div>
      </div>
    </main>
  );
}

export default CrewContent;
