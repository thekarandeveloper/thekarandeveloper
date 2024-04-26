import React, { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceData from "../../data/service.json";
function Services({ toggle }) {
  const categoryRef = useRef(null);
  const descriptionRef = useRef(null);
  const [category, setCategory] = useState(
    ServiceData.categories[0].data.items[0]
  );

  function categoryToggle(categoryClicked,dataItem) {
    // Remove active from all buttons
    if (categoryRef.current) {
      const currentActive = categoryRef.current.querySelectorAll(
        ".active-category-item"
      );
      currentActive.forEach((element) => {
        element.classList.remove("active-category-item");
      });
    }

    // Add active to clicked button
    categoryClicked.target.classList.add("active-category-item");
    if (descriptionRef.current) {
      const heading = descriptionRef.current.querySelectorAll(
        ".feature-list-heading"
      );
      heading.forEach((element) => {
        element.innerText = categoryClicked.target.name + " Features";
      });
    }
    // Now get value of clicked and change the
    console.log(categoryClicked);
    setCategory(dataItem);
  }

  return (
    <section
      className="section-container services bg-primary text-body overflow-hidden 2xl:h-[80vh]"
      id="services"
    >
      {ServiceData.categories.map((categoryData) => (
        <div className="section-header w-full text-center">
          <div className="w-full section-title heading services lg:justify-start text-left">
            {categoryData.heading}
          </div>
        </div>
      ))}

      {ServiceData.categories.map((categoryData) => (
        <div className="section-body h-full services w-full flex flex-col items-center gap-y-10 lg:flex-row justify-between">
          <div className="section-body-start w-full h-full flex justify-center flex-col gap-y-10 gap-x-20 lg:w-[50%]">
            <div className="body-normal desc text-center lg:text-left lg:w-[80%]">
              {categoryData.desc}
            </div>
            <div
              className="service-category w-full h-15 flex gap-x-5 overflow-x-auto lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:w-[70%] lg:h-[20vh] gap-10"
              ref={categoryRef}
            >
              {ServiceData.categories.map((categoryData) =>
                categoryData.data.items.map((dataItem) => (
                  <div
                    id={dataItem.id}
                    className={`service-category-item ${
                      dataItem.id === 1 ? "active-category-item" : ""
                    } flex-shrink-0 label  bg-[#1F6BFF] p-5 flex justify-center items-center cursor-pointer`}
                    onClick={(event) => categoryToggle(event, dataItem)}
                  >
                    {dataItem.name}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="section-body-end flex justify-end  w-[50%] 2xl:h-full">
          
            <div
              className="feature-list-container  p-6 flex flex-col gap-y-6 bg-body text-dark-bg lg:w-[90%] xl:w-[80%] 2xl:justify-between"
              ref={descriptionRef}
            >
              
              <div className="feature-list-heading title pt-4 w-full text-center lg:text-left">
               {category.name}
              </div>
              <div className="feature-list-desc body-normal w-full text-center lg:text-left">
                {category.desc}
              </div>
              <div className="feature-list-items w-full flex flex-col gap-y-4 gap-x-3 lg:grid lg:grid-cols-2 lg:grid-rows-3 text-left">

              {category.tags.map((tag)=>(
                <div className="feature-list-item flex justify-center items-center  body-normal lg:justify-start">
                  <span>
                    <span>
                      <FaCheckCircle className="text-[#0da35f]" />
                    </span>
                  </span>
                  &ensp; {tag}
                </div>
              ))}
               
              </div>
              <div className="feature-list-cta-btn w-full bg-dark-bg text-body mt-5 flex justify-center hover:bg-highlight hover:text-dark-bg">
                <button
                  className="body-normal cta-btn feature w-fit "
                  onClick={toggle}
                >
                  Book Your Enquiry Now{" "}
                  <span className="label cta-btn-icon hidden">
                    <FaArrowRightLong />
                  </span>
                </button>
              </div>
            </div>
          </div>{" "}
        </div>
      ))}
    </section>
  );
}

export default Services;
