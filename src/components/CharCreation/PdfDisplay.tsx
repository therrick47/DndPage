import { PDFDocument } from 'pdf-lib';
import React, { useState } from 'react';
import playerSheet from '../../assets/charsheetFillable.pdf';
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';
import { Box, Typography } from '@mui/material';
import { View } from '@react-pdf/renderer';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export const PdfDisplay = () => {
  const [pdf, setPdf] = React.useState<File>();
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  React.useEffect(() => {
    fetch(playerSheet)
      .then((response) => response.blob())
      .then(async (blob) => {
        const file = new File([blob], 'charsheetFillable.pdf', {
          type: 'application/pdf',
        });
        const arr = await file.arrayBuffer();
        setPdf(file);
        const stuff = await PDFDocument.load(arr);
        console.log('check');

        const form = stuff.getForm();
        // form.getFields().forEach((field) => {
        //   console.log(`${field.getName()}`);
        // });
      });
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <Box
      maxWidth={'500px'}
      maxHeight={'400px'}
    >
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber}>
          <View>
            <Typography>Section #1</Typography>
          </View>
        </Page>
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </Box>
  );
  // return <ReactPDF file={pdf} />;
};
