import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import work1 from "../../img/work_1.jpeg";
import work2 from "../../img/work_2.jpeg";
import work3 from "../../img/work_3.jpeg";
import work4 from "../../img/work_4.jpeg";
import work5 from "../../img/work_5.jpeg";
import work6 from "../../img/work_6.jpeg";
import work7 from "../../img/work_7.jpeg";

const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="containerSlide">
      <Slide {...properties}>
        <div className="each-slide">
          <div>
            <img src={work1} alt="img1" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={work2} alt="img2" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={work3} alt="img3" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={work4} alt="img4" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={work5} alt="img5" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={work6} alt="img6" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={work7} alt="img7" />
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
// export default function Slide() {
//   return (
//     <div>Slide</div>
//   )
//}
