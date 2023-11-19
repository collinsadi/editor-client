import React from 'react'
import "./MainCodeArea.css"

export const MainCodeArea = ({ showSidebar,source, code, setCode,currentType,setSource,language}) => {
  const handleCodeChange = (e) => {
    setCode(e.target.value)
    console.log(currentType)
    const extractedSource = source

    extractedSource[language] = code
    
    setSource(extractedSource)
    
    
  }
  return (
    <pre><code className='line'><textarea value={code} id="editor" className={showSidebar ? 'code-area half-codearea' : "code-area full-codearea"} onChange={handleCodeChange}></textarea></code></pre>
  )
}


// import React, { useState } from "react";
// import Editor from "@monaco-editor/react";
// import './MainCodeArea.css';

// export const MainCodeArea = ({ showSidebar,language, code, setCode,currentType }) => {
//   const [theme, setTheme] = useState("vs-dark");
//   const [isEditorReady, setIsEditorReady] = useState(false);

//   function handleEditorDidMount() {
//     setIsEditorReady(true);
//   }

 

//   const handleChange = (newValue) => {
//     setCode(newValue);
//   };

//   return (
//     <div className="main-code-area">
//       <div className="line">
//           <Editor 
//         theme={theme}
//         language={language}
//         value={code}
//         editorDidMount={handleEditorDidMount}
//         loading={"Loading..."}
//         className={showSidebar ? 'code-area half-codearea' : "code-area full-codearea"}
//          onChange={handleChange}
//       />
//       </div>
//     </div>
//   );
// };
