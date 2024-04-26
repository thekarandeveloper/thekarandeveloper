import React, { useRef, useState, useEffect } from "react";

import TestimonialCard from "../minor/testimonialCard";
import ProfileImg from "../../assets/media/bg.png";
import ReviewData from "../../data/review.json";

function ReviewCard({ toggle }) {
  const ratingsRef = useRef(null);

  var ratings = ReviewData.categories.flatMap(
    (categoryData) => categoryData.data.items
  );
  function autoScroll() {
    if (ratingsRef.current) {
      const ratingContainer = ratingsRef.current;
      ratingContainer.scrollLeft++;
      ratingContainer.scrollTop++;
    }
  }

  // setInterval(autoScroll, 35);

  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRenderCount((prevCount) => prevCount + 1);
    }, 10000); // Interval time: 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="section-container review w-full h-full flex justify-center items-center bg-dark-bg text-body overflow-hidden lg:justify-between lg:h-[70vh] ">
      <div className="section-body w-full review flex flex-col justify-start gap-y-8 gap-x-12">
        {ReviewData.categories.map((categoryData) => (
          <div className="section-body-start test w-full flex flex-col justify-center  gap-y-8 text-center  lg:w-[50%] lg:text-left">
            <div className="heading">{categoryData.heading}</div>
            <div className="body-normal flex justify-center items-center flex-wrap">
              {categoryData.desc}
            </div>
          </div>
        ))}

        <div
          id="testCard"
          className="section-body-end w-full h-full   lg:w-[50%]   overflow-auto  lg:h-[60vh] lg:pb-12 flex flex-row lg:flex-col"
          ref={ratingsRef}
        >
          <div className="testCard gap-y-8 gap-x-6 whitespace-no-wrap flex justify-start pt-4 lg:flex-col  lg:items-end">
            {ratings.map((dataItem) => (
              <TestimonialCard
                profileImg={dataItem.image}
                userName={dataItem.name}
                category={dataItem.category}
                desc={dataItem.desc}
              ></TestimonialCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewCard;
