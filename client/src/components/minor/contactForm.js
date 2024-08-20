import React, { useEffect, useState } from "react";
import MessageWithIcon from "../minor/MessageWithIcon";
// const nodemailer = require("nodemailer");
import { useGlobalContext } from "../../context/GlobalDataManager";

function TestimonialCard({ toggle }) {
  const [selectedOption, setSelectedOption] = useState("Email");
  const {formData, setForm, resetForm, openCustomWindow} = useGlobalContext() // Here set the gloabal context
const [email, setEmail] =  useState("")
const [subject, setSubject] =  useState("")

const [message, setMessage] =  useState("")


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  


// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: "contact@karankumar.dev",
//     pass: "#Karan.mail@12345",
//   },
// });

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"Karan Kumar" <contact@karankumar.devl>', // sender address
//     to: "thekarankumar.dev@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

// main().catch(console.error);
const handleEmailChecked = (e) =>{
  e.target.checked = true
  setSelectedOption("Email")
}
useEffect(()=>{
if (selectedOption === "Video" ){
    openCustomWindow("https://calendly.com/karankumarcv/30min","Schedule Meeting with karan")
} 
  // openCustomWindow()
}, [selectedOption])
  return (
    <form className="w-full h-full flex flex-col justify-between items-center gap-y-10">
      <div className="flex w-full gap-x-3 h-6 justify-start items-center  accent-dark-bg">
        <input
          className="w-8 h-full cursor-pointer"
          type="radio"
          name="contact-option"
          value={"Email"}
          checked={selectedOption === "Email"}
          onChange={(e) => handleEmailChecked(e)}
        />
        <label for="email-option" className="mr-4 label">
          Email
        </label>

        <input
          className="w-8 h-full cursor-pointer"
          type="radio"
          name="contact-option"
          value={"Video"}
          onChange={() => setSelectedOption("Video")}
          // onChange={(e) => setForm((prevData) => ({...prevData, subject: (e.target.checked ? e.target.value : "" )}))}
          
          
        />
        <label for="video-option" className="label cursor-pointer w-full">Video Meeting</label>
      </div>

      {selectedOption === "Email" && (
        <div className="w-full h-full flex flex-col justify-between items-center gap-y-10">
          {" "}
          <input
            className="user-email "
            type="email"
            name="email"
            placeholder="Your Name "
            onChange={(e) => setForm({ name: e.target.value })}
            
          ></input>
           <input
            className="user-email "
            type="email"
            name="email"
            placeholder="youremail@email.com"
            onChange={(e) => setForm({ email: e.target.value })}
            
          ></input>
          <select className="user-topic"
           onChange={(e) => setForm({ subject: e.target.value })}
          >
            <option value={""} className="default-option">
              What topic you want to talk ?
            </option>
            <option value={"Creelance"}>Freelance Work</option>
            <option value={"Hire"}>Full Time Hire</option>
            <option value={"Part-Time"}>Part Time</option>
            <option value={"talk"}>Casual Talk</option>
          </select>
          <textarea
            className="user-message h-full"
            placeholder="How I can help you ?"
            spellCheck={false}
            onChange={(e) => setForm({ message: `${e.target.value} `})}

          ></textarea>
        </div>
      )}

      {selectedOption === "Video" && (
        
        <MessageWithIcon description=" Redirecting You to Calendly to Schedule Meeting with Karan"></MessageWithIcon>
      )}
    </form>
  );
}

export default TestimonialCard;
