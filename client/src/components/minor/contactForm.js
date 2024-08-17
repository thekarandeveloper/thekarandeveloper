import React, { useState } from "react";
import MessageWithIcon from "../minor/MessageWithIcon";
// const nodemailer = require("nodemailer");

function TestimonialCard({ toggle }) {
  const [selectedOption, setSelectedOption] = useState("Email");

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

  return (
    <form className="w-full h-full flex flex-col justify-between items-center gap-y-10">
      <div className="flex w-full gap-x-3 h-6 justify-start items-center  accent-dark-bg">
        <input
          className="w-8 h-full"
          type="radio"
          name="contact-option"
          value={"Email"}
          checked={selectedOption === "Email"}
          onChange={handleOptionChange}
        />
        <label for="email-option" className="mr-4 title">
          Email
        </label>

        <input
          className="w-8 h-full"
          type="radio"
          name="contact-option"
          value={"Video"}
          onChange={handleOptionChange}
          checked={selectedOption === "Video"}
        />
        <label for="video-option">Video Meeting</label>
      </div>

      {selectedOption === "Email" && (
        <div className="w-full h-full flex flex-col justify-between items-center gap-y-10">
          {" "}
          <input
            className="user-email "
            type="email"
            placeholder="YourEmail@gmail.com"
          ></input>
          <select className="user-topic">
            <option value={""} className="default-option">
              What topic you want to talk ?
            </option>
            <option value={"Website"}>Website</option>
            <option value={"App"}>App</option>
            <option value={"Desktop Apps"}>Desktop Apps</option>
            <option value={"iOS Apps"}>iOS Apps</option>
          </select>
          <textarea
            className="user-message h-full"
            placeholder="How I can help you ?"
            spellCheck={false}
          ></textarea>
        </div>
      )}

      {selectedOption === "Video" && (
        <MessageWithIcon description=" Redirecting You to Calendly to Schedule Meeting with Karan"></MessageWithIcon>
      )}
      {/* <button
        className="submit-button cursor-pointer flex justify-center items-center"
        onClick={sendEmail}
      >
        Send
      </button> */}
    </form>
  );
}

export default TestimonialCard;
