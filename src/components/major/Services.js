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
    <section className="section-container services">
      <div className="section-header">
        <div className="section-title heading services">What I Offer ?</div>
        <Link to='https://www.instagram.com/karankumarrcv/' target="_blank" rel="noopener noreferrer" className="section-navigation">
          <IoOpenOutline className="card-title" />
        </Link>
      </div>
      <div className="section-body services">
        <div className="section-body-start">
          <div className="label desc">
            Mai ek freelance e-commerce expert aur website developer hoon, jo
            dynamic aur user-friendly online platforms banane mein specialized
            hoon. Design ki taraf tej nazar aur e-commerce strategies ki gehri
            samajh ke saath,{" "}
          </div>
          <div className="service-category" ref={categoryRef}>
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
        <div className="section-body-end">
          <div className="feature-list-container" ref={descriptionRef}>
            <div className="feature-list-heading sub-heading">
              Website Features
            </div>
            <div className="feature-list-desc body-normal">
              Karan, a meticulous full-stack developer, harmonizes design and
              code with a focus on quality. Transforming ideas into seamless
              digital experiences is my expertise.
            </div>
            <div className="feature-list-items ">
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
            <div className="feature-list-cta-btn">
              <button className="label  cta-btn feature" onClick={toggle}>
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
