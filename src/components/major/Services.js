import React, { useRef } from "react";
import {Link} from 'react-router-dom';

import { IoOpenOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
function Services({ toggle }) {
  const categoryRef = useRef(null);
  const descriptionRef = useRef(null);

  function categoryToggle(categoryClicked) {
    if (categoryRef.current) {
      const currentActive = categoryRef.current.querySelectorAll(
        ".active-category-item"
      );
      currentActive.forEach((element) => {
        element.classList.remove("active-category-item");
      });
    }
    categoryClicked.target.classList.add("active-category-item");
    if (descriptionRef.current) {
      const heading = descriptionRef.current.querySelectorAll(
        ".feature-list-heading"
      );
      heading.forEach((element) => {
        element.innerText = categoryClicked.target.innerText + " Features";
      });
    }
  }

  return (
    <section className="section-container services" id="services">
      <div className="section-header">
        <div className="section-title heading services">What I Offer ?</div>
       
      </div>
      <div className="section-body services items-center">
        <div className="section-body-start h-full">
          <div className="label desc">
            Mai ek freelance e-commerce expert aur website developer hoon, jo
            dynamic aur user-friendly online platforms banane mein specialized
            hoon. Design ki taraf tej nazar aur e-commerce strategies ki gehri
            samajh ke saath,{" "}
          </div>
          <div className="service-category grid grid-cols-2 gap-x-6 gap-y-6 w-3/5 flex-wrap" ref={categoryRef}>
            <div
              className="service-category-item label active-category-item"
              onClick={categoryToggle}
            >
              Websites
            </div>
            <div
              className="service-category-item label"
              onClick={categoryToggle}
            >
              Mobile Apps
            </div>
            <div
              className="service-category-item label"
              onClick={categoryToggle}
            >
              iOS Apps
            </div>
            <div
              className="service-category-item label"
              onClick={categoryToggle}
            >
              Desktop Apps
            </div>
          </div>
        </div>
        <div className="section-body-end justify-end">
          <div className="feature-list-container w-4/5 p-6 flex flex-col gap-y-6" ref={descriptionRef}>
            <div className="feature-list-heading sub-heading">
              Website Features
            </div>
            <div className="feature-list-desc body-normal">
              Karan, a meticulous full-stack developer, harmonizes design and
              code with a focus on quality. Transforming ideas into seamless
              digital experiences is my expertise.
            </div>
            <div className="feature-list-items grid grid-cols-3 gap-y-4 gap-x-3">
              <div className="feature-list-item body-normal">
                <span>
                  <span>
                    <FaCheckCircle />
                  </span>
                </span>
                &ensp; List Item 1
              </div>
              <div className="feature-list-item body-normal">
                <span>
                  <FaCheckCircle />
                </span>
                &ensp; List Item 1
              </div>
              <div className="feature-list-item body-normal">
                <span>
                  <FaCheckCircle />
                </span>
                &ensp; List Item 1
              </div>
              <div className="feature-list-item body-normal">
                <span>
                  <FaCheckCircle />
                </span>
                &ensp; List Item 1
              </div>
              <div className="feature-list-item body-normal">
                <span>
                  <FaCheckCircle />
                </span>
                &ensp; List Item 1
              </div>
              <div className="feature-list-item body-normal">
                <span>
                  <FaCheckCircle />
                </span>
                &ensp; List Item 1
              </div>
            </div>
            <div className="feature-list-cta-btn w-full mt-10 flex justify-end">
              <button className="label  cta-btn feature w-fit" onClick={toggle}>
                Book Your Enquiry Now{" "}
                <span className="label cta-btn-icon">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
