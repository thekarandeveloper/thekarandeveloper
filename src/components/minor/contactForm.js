import React, { useState } from "react";
import MessageWithIcon from "../minor/MessageWithIcon";

function TestimonialCard({ toggle }) {
  const [selectedOption, setSelectedOption] = useState("Email");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  const [email, setEmail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const baseURL = "http://localhost:8000";

  const sendEmail = async () => {
    let dataSend = {
      email: email,
      subject: subject,
      message: message,
    };

    const res = await fetch(`${baseURL}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // Handling Errors

      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          alert("Send Sucessfully !");
        }
      });
  };

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
      <button
        className="submit-button cursor-pointer flex justify-center items-center"
        onClick={sendEmail}
      >
        Send
      </button>
    </form>
  );
}

export default TestimonialCard;
