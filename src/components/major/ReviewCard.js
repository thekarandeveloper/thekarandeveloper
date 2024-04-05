import React, { useRef, useState, useEffect } from "react";

import TestimonialCard from "../minor/testimonialCard";
import ProfileImg from "../../assets/media/bg.png";

function ReviewCard({ toggle }) {
  const ratingsRef = useRef(null);
  // const initialData = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);
  // const [data, setData] = useState(initialData);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Rotate the data by 1 position
  //     setData(prevData => [
  //       ...prevData.slice(1), // remove the first element
  //       prevData[0] // add the first element to the end
  //     ]);
  //   }, 1000); // Change the interval as per your requirement

  //   return () => clearInterval(interval); // Cleanup
  // }, []); // Runs only once on component mount

  // return (
  //   <div>
  //     <ul>
  //       {data.map((item, index) => (
  //         <li key={index}>{item}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  function autoScroll() {
    if (ratingsRef.current) {
      const ratingContainer = ratingsRef.current;
      
      ratingContainer.scrollTop++;
    }
  }

  function generateReviews(params) {
    // dynamic generate reviews using json
  }

  setInterval(autoScroll, 30);

  return (
    <section className="section-container review h-[70vh] justify-center items-center">
      <div className="section-body review flex flex-row">
        <div className="section-body-start test w-5 flex flex-col justify-center gap-y-1">
          <div className="heading">What They Have To Say</div>
          <div className="body-normal">
            Mai ek freelance e-commerce expert aur website developer hoon, jo
            dynamic aur user-friendly online platforms banane mein specialized
            hoon. Design ki taraf tej nazar aur e-commerce strategies ki gehri
            samajh ke saath,
          </div>
        </div>
        <div className="section-body-end test flex-col justify-start gap-y-6 overflow-y-scroll" ref={ratingsRef}>
          <TestimonialCard
            profileImg={ProfileImg}
            userName="Omani Yova"
            category="Artist"
            desc=" Mai ek freelance e-commerce expert aur website developer hoon, jo
        dynamic aur user friendly online platforms banane"
          ></TestimonialCard>
          <TestimonialCard
            profileImg={ProfileImg}
            userName="Omani Yova"
            category="Artist"
            desc=" Mai ek freelance e-commerce expert aur website developer hoon, jo
        dynamic aur user friendly online platforms banane"
          ></TestimonialCard>
          <TestimonialCard
            profileImg={ProfileImg}
            userName="Omani Yova"
            category="Artist"
            desc=" Mai ek freelance e-commerce expert aur website developer hoon, jo
        dynamic aur user friendly online platforms banane"
          ></TestimonialCard>
          <TestimonialCard
            profileImg={ProfileImg}
            userName="Omani Yova"
            category="Artist"
            desc=" Mai ek freelance e-commerce expert aur website developer hoon, jo
        dynamic aur user friendly online platforms banane"
          ></TestimonialCard>
          <TestimonialCard
            profileImg={ProfileImg}
            userName="Omani Yova"
            category="Artist"
            desc=" Mai ek freelance e-commerce expert aur website developer hoon, jo
        dynamic aur user friendly online platforms banane"
          ></TestimonialCard>
        </div>
      </div>
    </section>
  );
}

export default ReviewCard;
