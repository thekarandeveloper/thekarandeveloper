import React, { useRef } from "react";

import TestimonialCard from "../minor/testimonialCard";
import ProfileImg from "../../assets/media/bg.png";

function ReviewCard({ toggle }) {
  const ratingsRef = useRef(null);

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
    <section className="section-container review">
      <div className="section-body review">
        <div className="section-body-start">
          <div className="heading">What They Have To Say</div>
          <div className="body-normal">
            Mai ek freelance e-commerce expert aur website developer hoon, jo
            dynamic aur user-friendly online platforms banane mein specialized
            hoon. Design ki taraf tej nazar aur e-commerce strategies ki gehri
            samajh ke saath,
          </div>
        </div>
        <div className="section-body-end test" ref={ratingsRef}>
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
