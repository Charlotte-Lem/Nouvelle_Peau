import React from "react";
import work from "../assets/work.jpeg";
import work2 from "../assets/work2.jpeg";
export default function Gallery() {
  return (
    <div className="gallery">
      <h2> hello gallery</h2>
      <article className="gallery__wrapper">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sapiente
        suscipit labore reprehenderit perferendis! Eaque incidunt labore debitis
        libero quos nesciunt nulla fugiat explicabo sed ducimus architecto, ex
      </article>

      <div className="gallery__mozaic">
        <img className="img" src={work} alt="work" />
        <img className="img" src={work2} alt="work" />
        <img className="img" src={work} alt="work" />
        <img className="img" src={work2} alt="work" />
        <img className="img" src={work} alt="work" />
        <img className="img" src={work2} alt="work" />

      </div>
    </div>
  );
}
