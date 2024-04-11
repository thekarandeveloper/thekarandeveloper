import React, { useRef } from "react";
import { Link } from "react-router-dom";

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
    <section
      className="section-container services bg-primary text-body overflow-hidden"
      id="services"
    >
      <div className="section-header w-full text-center">
        <div className="section-title heading services">What I Offer ?</div>
      </div>
      <div className="section-body services w-full flex flex-col items-center gap-y-10">
        <div className="section-body-start w-full h-full flex justify-center flex-col gap-y-10">
          <div className="body-normal desc text-center">
            Mai ek freelance e-commerce expert aur website developer hoon, jo
            dynamic aur user-friendly online platforms banane mein specialized
            hoon. Design ki taraf tej nazar aur e-commerce strategies ki gehri
            samajh ke saath,{" "}
          </div>
          <div
            className="service-category w-full h-15 flex gap-x-5 overflow-x-auto"
            ref={categoryRef}
          >
            <div
              className="service-category-item flex-shrink-0 label active-category-item   bg-[#1F6BFF] p-5"
              onClick={categoryToggle}
            >
              Websites
            </div>
            <div
              className="service-category-item flex-shrink-0 label bg-[#1F6BFF] p-5"
              onClick={categoryToggle}
            >
              Mobile Apps
            </div>
            <div
              className="service-category-item flex-shrink-0 label  bg-[#1F6BFF] p-5"
              onClick={categoryToggle}
            >
              iOS Apps
            </div>
            <div
              className="service-category-item flex-shrink-0 label  bg-[#1F6BFF] p-5"
              onClick={categoryToggle}
            >
              Desktop Apps
            </div>
          </div>
        </div>
        <div className="section-body-end justify-end bg-body text-dark-bg">
          <div
            className="feature-list-container lg:5/5 xl:w-4/5 p-6 flex flex-col gap-y-6"
            ref={descriptionRef}
          >
            <div className="feature-list-heading title pt-4 w-full text-center">
              Website Features
            </div>
            <div className="feature-list-desc body-normal w-full text-center">
              Karan, a meticulous full-stack developer, harmonizes design and
              code with a focus on quality. Transforming ideas into seamless
              digital experiences is my expertise.
            </div>
            <div className="feature-list-items w-full flex flex-col gap-y-4 gap-x-3">
              <div className="feature-list-item flex justify-center items-center  body-normal">
                <span>
                  <span>
                    <FaCheckCircle className="text-[#0da35f]" />
                  </span>
                </span>
                &ensp; List Item 1
              </div>
              <div className="feature-list-item flex justify-center items-center body-normal">
                <span>
                  <FaCheckCircle className="text-[#0da35f]"/>
                </span>
                &ensp; List Item 1
              </div>
              <div className="feature-list-item flex justify-center items-center body-normal">
                <span>
                  <FaCheckCircle className="text-[#0da35f]"/>
                </span>
                &ensp; List Item 1
              </div>
              <div className="feature-list-item flex justify-center items-center body-normal">
                <span>
                  <FaCheckCircle className="text-[#0da35f]" />
                </span>
                &ensp; List Item 1
              </div>
              <div className="feature-list-item flex justify-center items-center body-normal">
                <span>
                  <FaCheckCircle className="text-[#0da35f]"/>
                </span>
                &ensp; List Item 1
              </div>
              <div className="feature-list-item flex justify-center items-center body-normal">
                <span>
                  <FaCheckCircle className="text-[#0da35f]"/>
                </span>
                &ensp; List Item 1
              </div>
            </div>
            <div className="feature-list-cta-btn w-full bg-dark-bg text-body mt-5 flex justify-center">
              <button className="label cta-btn feature w-fit" onClick={toggle}>
                Book Your Enquiry Now{" "}
                <span className="label cta-btn-icon hidden">
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
