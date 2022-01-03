import React, {useState} from 'react'
import s from './PrintVersion.module.css'
import { Viewer } from '@react-pdf-viewer/core'
import { getFilePlugin } from '@react-pdf-viewer/get-file';


import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Worker } from '@react-pdf-viewer/core'
import pdfFile from './pdf/cv2.pdf'

export const PrintVersion = () => {
    const [pdfCv, setPdfCv] = useState(pdfFile)
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const getFilePluginInstance = getFilePlugin();

    const onZoom = (e: ZoomEvent) => {
        //console.log(`Zoom to ${e.scale}`);
    };
    const onDocumentLoad = (e: DocumentLoadEvent) => {
        // console.log(`Number of pages: ${e.doc.numPages}`);
    };
    return (
        <div className={s.pdf_container} style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '750px',
        }}>
            {pdfCv && <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfCv}
                        initialPage={0}
                        onZoom={onZoom}
                        theme='dark'
                        defaultScale={2}
                        onDocumentLoad={onDocumentLoad}
                        plugins={[defaultLayoutPluginInstance]}/>
            </Worker>}
            {!pdfCv && <>No pdf file selected</>}
        </div>
    )
}