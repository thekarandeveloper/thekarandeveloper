import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import KaranResume from "../../assets/media/KARAN_KUMAR_RESUME.jpeg"
function MiscContent() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }){
      setNumPages(numPages);
    }
  return (
    <div className='modal-body-container resume'>
       {/* <Document file={KaranResume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
      <img src={KaranResume}/>
    </div>
  )
}

export default MiscContent