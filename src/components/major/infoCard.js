import { MdKeyboardArrowRight } from "react-icons/md";
function InfoCard({toggle}) {
  return (
    <div className="card-container intro">
      <div className="heading-large">Hello,</div>
      <div className="body-normal intro">
        I'm Karan, a meticulous full-stack developer, harmonizes design and code
        with a focus on quality. Transforming ideas into seamless digital
        experiences is my expertise.
      </div>
      <button
        className="label info cta-btn"
        // href={""}
        onClick={toggle}
      >
        View Resume{" "}
        <span className="heading cta-btn-icon">
          <MdKeyboardArrowRight />
        </span>
      </button>
    </div>
  );
}

export default InfoCard;
