import React from "react";
import { IoOpenOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
function Services() {
  return (
    <div className="section-container services">
      <div className="section-header">
        <div className="section-title heading services">What I Offer ?</div>
        <div className="section-navigation">
          <IoOpenOutline className="card-title" />
        </div>
      </div>
      <div className="section-body services">
        <div className="section-body-start">
          <div className="label desc">
            Mai ek freelance e-commerce expert aur website developer hoon, jo
            dynamic aur user-friendly online platforms banane mein specialized
            hoon. Design ki taraf tej nazar aur e-commerce strategies ki gehri
            samajh ke saath,{" "}
          </div>
          <div className="service-category">
            <div className="service-category-item label active">Websites</div>
            <div className="service-category-item label">Mobile Apps</div>
            <div className="service-category-item label">iOS Apps</div>
            <div className="service-category-item label">Desktop Apps</div>
          </div>
        </div>
        <div className="section-body-end">
          <div className="feature-list-container">
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
              <a className="label feature cta-btn" href={"/"} download={true}>
                Book Your Enquiry Now{" "}
                <span className="label cta-btn-icon">
                  <FaArrowRightLong />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
