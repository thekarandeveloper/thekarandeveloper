import React, {createContext, useState, useContext} from 'react';

// CTA Types

const CTATypes = {
        LINK: 'link',
        DOWNLOAD: 'download',
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
            default:
                break;
        }
    }

    // Combine Everything in one Context
    return(
        <GlobalContext.Provider value={{modalData, openModal, closeModal, handleCtaAction}}>
            {children}
        </GlobalContext.Provider>
    )

};

// Custom Hook to use the Global Context
export const useGlobalContext = () => useContext(GlobalContext);