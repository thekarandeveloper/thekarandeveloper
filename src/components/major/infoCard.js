import React,{useState} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
function InfoCard() {
  const [modal,setModal] = useState(false);
  const toggleModal = ()=>{
    setModal(!modal)

  }
  return (
    <div className="card-container intro">
      <div className="heading-large">Hello,</div>
      <div className="body-normal intro">
        I'm Karan, a meticulous full-stack developer, harmonizes design and code
        with a focus on quality. Transforming ideas into seamless digital
        experiences is my expertise.
      </div>
      <a
            className="label info cta-btn"
            href={"/"}
            download={true}
            onClick={toggleModal}
          >
            View Resume{" "}
            <span className="heading cta-btn-icon">
            <MdKeyboardArrowRight />
            </span>
          </a>
    </div>
  );
}

export default InfoCard;
