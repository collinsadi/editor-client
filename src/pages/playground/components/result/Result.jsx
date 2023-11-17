import React, { useState, useEffect } from 'react'
import "./Result.css"


// icons



export const Result = ({showSidebar, setShowSidebar, source}) => {

  const [showResult, setShowResult] = useState(false)
  const [src, setSrc] = useState('');

    const srcCode = `
        <html>
            <body><h1> Hello World </h1></body>
            <style>h1{color:red;}</style>
            <script>""</script>
        </html>
    `
    // const srcCode = `
    //     <html>
    //         <body>${source.html}</body>
    //         <style>${source.css}</style>
    //         <script>${source.javascript}</script>
    //     </html>
    // `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);

        return () => clearTimeout(timeout);
    }, [source, srcCode])

  const handleShowresult = () => {
    
    !showResult && setShowResult(true)
    setShowSidebar(false)

  }

  const handleHideresult = () => {
    showResult && setShowResult(false)
    setShowSidebar(true)
  }

  const handleExtraResult = () => {

    const resultContainer = document.getElementById("extra-result")

    resultContainer.classList.add("extra-result")
    setShowSidebar(false)

    
  }

  return (
    <>
      <div id='extra-result' className={!showResult ? 'result-container small-result' : 'result-container full-result' }>
        <div className="resize-btn">
          <div onClick={handleShowresult} className="expand">
              <span>{"<"}</span>
          </div>
          <div onClick={handleExtraResult} className="extra">
              <span>{"<"}</span>
          </div>
          <div onClick={handleHideresult} className="reduce">
              <span>{">"}</span>

          </div>
      </div>
      <iframe srcDoc={src} title='result' sandbox='allow-scripts' frameborder="0"></iframe>
      </div>
    </>
  )
}
