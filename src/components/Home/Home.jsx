import Header from "../Header/Header";
import style from "./style.module.css";

function Home() {
  return (
    <main
      className={`main w-screen h-screen w640:bg-bgHomemobi w1024:bg-bgHometablet bg-bgHome bg-center bg-no-repeat bg-cover flex justify-center ${style.main}`}
    >
      <Header />
      <section className="section h-auto w-full flex flex-row w1024:flex-col w375:px-3 w640:px-8 w480:gap-y-24 w640:gap-y-16 w480:mt-36 w640:mt-32 w1024:mt-44 absolute z-0 max-w-[1080px] h-auto mt-96 px-4">
        <div className="leftDiv w600:gap-y-4 w-full  w1024:flex w1024:flex-col flex flex-col w1024:justify-center w1024:items-center h-auto leading-snug ">
          <span className="subTitle text-[#d0d6f9] w640:text-lg w1024:text-xl w640:font-light font-Barlow tracking-widest w1024:font-medium text-3xl font-light ">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <span className="title text-white font-Bellefair w640:text-8xl text-[9.5rem]">
            SPACE
          </span>
          <span className="description text-[#d0d6f9] w480:px-2 w480:w-full w640:px-2 w640:w-[430px] w768:px-2 w1024:w-[450px] w-4/6  w1024:text-center font-Barlow w640:text-lg w1024:text-xl w640:tracking-normal w640:px-0 w768:px-8 text-justify text-xl tracking-wide font-light">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover king of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </span>
        </div>
        <div className="rightDiv w1024:min-h-2/4 w1024:flex w1024:justify-center w1024:items-center w1024:w-auto w640:mt-0 w1024:mt-44 min-h-auto w-6/12 flex flex-col justify-end items-end">
          <div className="btnDiv">
            <button
              className={`btn w640:w-40 w640:h-40 w1024:w-60 w1024:h-60 w-64 h-64 bg-white cursor-pointer rounded-full w640:text-2xl text-3xl font-Bellefair tracking-wider ${style.circlebutton}`}
            >
              EXPLORE
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
