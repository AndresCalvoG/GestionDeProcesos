import React, { useState, useEffect } from "react";
import { AppContext } from "../../context";
import MachineCard from "../MachineCard/MachineCard";
import "./slideshow.css";

function Slideshow() {
  const { machines } = React.useContext(AppContext);
  const [slideIndex, setSlideIndex] = useState(1);
  const [element, setElement] = useState({
    name: "",
    imageURL: "",
    type: "",
    cubicle: "",
    id: "",
  });

  useEffect(() => {
    showSlides(slideIndex);
  }, [machines]);

  function plusSlides(n) {
    let newValue = slideIndex + n;
    setSlideIndex(newValue);
    showSlides(newValue);
  }

  function currentSlide(n) {
    console.log("slideIndex= " + slideIndex);
    console.log("n= " + n);
    setSlideIndex(n);
    showSlides(n);
    console.log("slideIndex= " + slideIndex);
    console.log("n= " + n);
  }

  function showSlides(n) {
    if (n > machines.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(machines.length);
    }
    if (machines[slideIndex - 1] === undefined) {
      setElement(false);
    } else {
      setElement(machines[slideIndex - 1]);
    }
  }

  return (
    <section className="slideshow-container">
      {/* <!-- Full-width images with number and caption text --> */}
      <article className="slideShow-cards">
        {element ? (
          <MachineCard
            name={element.name}
            image={element.imageURL}
            type={element.type}
            cub={element.cubicle}
            key={element.id}
          />
        ) : (
          <p className="slideShow-info fade">
            Porfavor seleccione un area valida
          </p>
        )}
      </article>
      {/* next and preview buttons */}
      <a
        className="prev"
        onClick={() => {
          plusSlides(-1);
        }}
      >
        &#10094;
      </a>
      <a
        className="next"
        onClick={() => {
          plusSlides(1);
        }}
      >
        &#10095;
      </a>

      {/* the dots/circles */}
      <article className="dots">
        {machines.map((value, index, array) => {
          let style = "";
          slideIndex === index + 1 ? (style = "dot active") : (style = "dot");

          return (
            <span
              className={style}
              onClick={() => {
                currentSlide(index);
              }}
              key={index}
            ></span>
          );
        })}
      </article>
    </section>
  );
}
export default Slideshow;
