import React from 'react';

const PdfViewer = () => {
  return (
    <div>
      <embed src="path_to_your_pdf_file.pdf" type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

export default PdfViewer;
