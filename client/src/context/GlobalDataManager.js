import React, {createContext, useState, useContext} from 'react';
import emailjs from "emailjs-com"

// CTA Types

const CTATypes = {
        LINK: 'link',
        DOWNLOAD: 'download',
        SUBMIT: 'submit',
        OTHER: 'other'
};

// Create the context
const GlobalContext = createContext();

// Create a Custom Provider
export const GlobalDataManager = ({children}) =>{
    
    // Modal
    const [modalData, setModalData] = useState({
        isOpen: false,
        content:[],
        title:"",
        ctaLabel:'',
        ctaType:CTATypes.OTHER,
        url:'',
        file:'',
    });

   

    // Set Modal

    const openModal = ( title, newContent, ctaLabel,ctaType, url="", file="") => {
        setModalData(prevState => ({
            isOpen:true,
            content:[...prevState.content, newContent],
            title,
            ctaLabel,
            ctaType,
            url,
            file,
        }))
    }

    const closeModal = () =>{
        setModalData({
            isOpen: false,
            content:[],
            title:"",
            ctaLabel:'',
            ctaType:CTATypes.OTHER,
            url:'',
            file:'',
        });
    }

    // Open URL in Same Window

    const handleCtaAction = () => {
        switch (modalData.ctaType) {
            case CTATypes.LINK:
                window.location.href = modalData.url;
                break;
            case CTATypes.DOWNLOAD:
                const link = document.createElement('a');
                link.href = modalData.url;
                link.download = modalData.file;
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            break;
            case CTATypes.SUBMIT:
                sendForm();
                // resetForm();
                console.log("This was form Data", formData);
                break;
            default:
                break;
        }
    }

     // Contact Form
     const [formData, setFormData] = useState({
            name: "",
            email:"",
            subject: "",
            message: ""
      })
      
      // Set Form

      const setForm = (newData) => {
        setFormData((prevData) => ({
            ...prevData,
            ...newData
        }));
    };

      // Reset Form

      const resetForm = () =>{
        setFormData({
            name: "",
            email:"",
            subject: "",
            message: ""
          })
      }

      // Send Form

      const sendForm = () => {
        
        emailjs.send(
          'service_ec0ote6',
          'template_7g9gqeg',
          formData,
          'Yishw-clgSPF7NKJV'
        ).then((result) => {
          console.log(result.text);
          alert("Message Sent Succesffully");
        }, (error)=> {
          console.log(error.text);
          alert("Error Occured", error.text);
        });
      
        
      
      }

      // Open Custom Window
      const openCustomWindow = (url, windowName)=>{
        const width = 1400
        const height = 900
        const left = (window.screen.width / 2) - (width /2)
        const top = (window.screen.height / 2) - (height /2)
        const windowFeatures = `width=${width},height=${height},left=${left}, top=${top}`
        window.open(url, windowName, windowFeatures)
    }


    // Combine Everything in one Context
    return(
        <GlobalContext.Provider value={{modalData, openModal, closeModal, handleCtaAction, formData,setForm, resetForm, sendForm, openCustomWindow}}>
            {children}
        </GlobalContext.Provider>
    )

};

// Custom Hook to use the Global Context
export const useGlobalContext = () => useContext(GlobalContext);