import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import KaranResumePage1 from "../../assets/docs/KARAN_KUMAR_RESUME_Page_1.jpg"
import KaranResumePage2 from "../../assets/docs/KARAN_KUMAR_RESUME_Page_2.jpg"
import PdfCard from '../major/PdfCard';
function MiscContent() {
   
  return (
    <div className='modal-body-container resume'>
       {/* <Document file={KaranResume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
      <img src={KaranResumePage1}/>
      <hr></hr>
      <img src={KaranResumePage2}/>
      {/* <PdfCard></PdfCard> */}
    </div>
  )
}

export default MiscContent