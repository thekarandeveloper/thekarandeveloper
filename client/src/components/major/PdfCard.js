// import React, { useState } from 'react';
// // import { Document, Page } from 'react-pdf';
// import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// // Create styles
// const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'row',
//       backgroundColor: '#E4E4E4',
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1,
//     },
//   });
//   const MyDocument = () => (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text>Section #1</Text>
//         </View>
//         <View style={styles.section}>
//           <Text>Section #2</Text>
//         </View>
//       </Page>
//     </Document>
//   );
  
//   const PDFCard = () => (
//     <div>
//       <PDFDownloadLink document={<MyDocument />} fileName="../../assets/KARAN_KUMAR_RESUME.pdf">
//         {({ blob, url, loading, error }) =>
//           loading ? 'Loading document...' : 'Download now!'
//         }
//       </PDFDownloadLink>
//     </div>
//   );
  
//   export default PDFCard;

//   import React from 'react';
// import { Document, Page } from 'react-pdf';

// const PdfCard = () => {
//   return (
//     <div>
//       <Document file="../assets/KARAN_KUMAR_RESUME.pdf">
//         <Page pageNumber={1} />
//       </Document>
//     </div>
//   );
// };

// export default PdfCard;
// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// // Set up the worker
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const PdfCard = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [error, setError] = useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//     setPageNumber(1);
//   };

//   const onDocumentLoadError = (error) => {
//     console.error('Failed to load PDF:', error);
//     setError(error);
//   };

//   return (
//     <div>
//       {error ? (
//         <p>Error loading PDF: {error.message}</p>
//       ) : (
//         <>
//           <Document
//             file="../../assets/KARAN_KUMAR_RESUME.pdf"
//             onLoadSuccess={onDocumentLoadSuccess}
//             onLoadError={onDocumentLoadError}
//             options={{ disableAutoFetch: false, disableStream: true }}
//           >
//             <Page pageNumber={pageNumber} />
//           </Document>
//           <p>
//             Page {pageNumber} of {numPages}
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// export default PdfCard;
// import React from 'react';
// import { Viewer } from '@react-pdf-viewer/core';
// // import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // Import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // Create new plugin instance
// const defaultLayoutPluginInstance = defaultLayoutPlugin();

// const PdfCard = () => {
//   return (
//     <div style={{ height: '750px' }}> {/* Adjust height as needed */}
//       {/* <Viewer
//         fileUrl='../../assets/KARAN_KUMAR_RESUME.pdf' // Update path to your PDF file
//         plugins={[defaultLayoutPluginInstance]}
//       /> */}
//     </div>
//   );
// };

// export default PdfCard;
