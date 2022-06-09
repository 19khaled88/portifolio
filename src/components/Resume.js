import React, { useState } from 'react'
import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { Worker } from '@react-pdf-viewer/core'

import pdfFile from '../resume_of_khaled_ahasan.pdf'

const Resume = () => {
  const [defaultPdfFile] = useState(pdfFile)
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  return (
    <div>
      {defaultPdfFile && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
            <Viewer
              fileUrl={defaultPdfFile}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </>
      )}
    </div>
  )
}

export default Resume
