import React, {useState} from 'react'
import s from './PrintVersion.module.css'
import {Viewer, Worker} from '@react-pdf-viewer/core'

import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from './pdf/cv2.pdf'
import pdfFileRus from './pdf/cv3.pdf'

export const PrintVersion = (props) => {
    const [pdfCv, setPdfCv] = useState([pdfFile, pdfFileRus])
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const onZoom = (e: ZoomEvent) => {
        //console.log(`Zoom to ${e.scale}`);
    };
    const onDocumentLoad = (e: DocumentLoadEvent) => {
        // console.log(`Number of pages: ${e.doc.numPages}`);
    };

    return (
        <div className={s.pdf_container} style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: 'auto',
        }}>
            {pdfCv && <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js">
                <Viewer fileUrl={!props.lang ? pdfCv[0] : pdfCv[1]}
                        initialPage={0}
                        onZoom={onZoom}
                        theme='white'
                        defaultScale={1.2}
                        onDocumentLoad={onDocumentLoad}
                        plugins={[defaultLayoutPluginInstance]}/>
            </Worker>}
            {!pdfCv && <>No pdf file selected</>}
        </div>
    )
}