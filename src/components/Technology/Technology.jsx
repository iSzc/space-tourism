import Header from "../Header/Header";
import ButtonTechnology from "./ButtonTechnology/ButtonTechnology";
import style from "./style.module.css";
import jsonData from "/src/api/data.json";
import { useEffect, useState, useLayoutEffect } from "react";

function TechnologyContent(props) {
  const [data, setData] = useState([]);
  const [zoomIn, setZoomIn] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [btnZoomActive, setBtnZoomActive] = useState(false);

  useEffect(() => {
    setData(jsonData["technology"]);
    setSelectedTech(jsonData["technology"][0]);
  }, []);

  const buttonTech = (technology) => {
    if (selectedTech === technology && isAnimating) {
      return;
    }

    setTimeout(() => {
      setSelectedTech(technology);
    }, 50);

    setZoomIn(false);
    setBtnZoomActive(true);

    setTimeout(() => {
      setButtonClicked(false);
    }, 500);
  };

  useEffect(() => {
    if (selectedTech && btnZoomActive) {
      setZoomIn(true);
      setBtnZoomActive(false);
    }
  }, [selectedTech, btnZoomActive]);

  return (
    <main
      className={`main w-screen h-screen w640:bg-bgTechmob w1024:bg-bgTechtab bg-bgTech bg-center bg-no-repeat bg-cover flex w1024:justify-center justify-end w1024:px-0  ${style.main}`}
    >
      <Header />
      <section className="section w640:mt-20 w1024:mt-28 flex flex-col items-center w1024:w-screen w-[720px]">
        <div className="titleDiv flex w640:justify-center w640:ml-0 w-full w1024:gap-x-4 w1024:ml-6 w1024:mt-4 mt-52 gap-x-6">
          <span className="numDiv text-[#5d5d64] font-bold font-Barlow w640:text-base w1024:text-xl text-3xl">
            03
          </span>
          <span className="textDiv text-white w640:font-light font-Barlow w1024:tracking-[3px] tracking-[4px] w640:text-base w1024:text-xl text-3xl">
            SPACE LAUNCH 101
          </span>
        </div>
        <div className="divImg w640:mt-8 w-screen w640:h-auto w1024:mt-16 h-96 hidden w1024:block">
          <img
            src={selectedTech ? selectedTech.images.landscape : props.images}
            className={` ${
              zoomIn ? style.zoomIn : ""
            }img object-contain h-auto w-screen`}
          />
        </div>
        <div className="btnDiv w640:mt-8 w-screen gap-x-4 mt-12 gap-y-6 justify-center w1024:flex hidden">
          {data.map((tech, index) => (
            <ButtonTechnology
              className={isActive ? style.isActive : ""}
              num={index + 1}
              key={index}
              onClick={() => {
                buttonTech(tech);
                setZoomIn(false);
              }}
              isActive={selectedTech === tech}
              disabled={buttonClicked}
            />
          ))}
        </div>
        <div
          className={`allContentUp  w640:mt-4 flex flex-col items-center w-full w1024:mt-10 hidden w1024:flex ${
            zoomIn ? style.zoomIn : ""
          }`}
        >
          <span className="Terminology text-[#ced4f7] font-Barlow tracking-[2px] font-light">
            THE TERMINOLOGY
          </span>
          <span className="Shipname w640:text-2xl font-Bellefair text-white w640:mt-0 w1024:mt-4 w768:text-4xl w1024:text-5xl">
            {selectedTech ? selectedTech.name.toUpperCase() : props.techName}
          </span>
          <span className="description text-center text-[#ced4f7] mt-4 w640:leading-6 w1024:leading-[27px] px-2 w640:max-w-[350px] w1024:max-w-[450px] h-auto">
            {selectedTech ? selectedTech.description : props.techDescription}
          </span>
        </div>
        <div className="allContentDown flex items-center w-full w1024:hidden block gap-x-20 mt-36 ">
          <div className="button flex gap-y-6 flex-col  self-start">
            {data.map((tech, index) => (
              <ButtonTechnology
                className={isActive ? style.isActive : ""}
                num={index + 1}
                key={index}
                onClick={() => {
                  buttonTech(tech);
                  setZoomIn(false);
                }}
                isActive={selectedTech === tech}
                disabled={buttonClicked}
              />
            ))}
          </div>

          <div
            className={`allContentHidden ${
              zoomIn ? style.zoomIn : ""
            } flex flex-col h-[290px]`}
          >
            <span className="Terminology text-[#ced4f7] font-Barlow tracking-[2px] font-light">
              THE TERMINOLOGY
            </span>
            <span className="Shipname font-Bellefair text-white text-6xl mt-2">
              {selectedTech ? selectedTech.name.toUpperCase() : props.techName}
            </span>
            <span className="description text-[#ced4f7] leading-[30px] px-2 h-auto w-5/6 mt-8">
              {selectedTech ? selectedTech.description : props.techDescription}
            </span>
          </div>
        </div>
      </section>
      <div className="divImg w640:mt-8 w-auto h-screen pt-64 w1024:mt-16 self-end justify-self-end sticky z-[-1]">
        <div className="sticky w-auto h-[520px]">
          <img
            src={selectedTech ? selectedTech.images.portrait : props.images}
            className={`img ${zoomIn ? style.zoomIn : ""}   h-full w-auto`}
          />
        </div>
      </div>
    </main>
  );
}

export default TechnologyContent;
