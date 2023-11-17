import React, { useState } from 'react'
import { Sidebar } from './components/sidebar/Sidebar'
import {MainCodeArea} from "./components/mainCodeArea/MainCodeArea"
import { Result } from './components/result/Result'



import "./Playground.css"

export const Playground = () => {

document.title = "Codellins || Playground"
  
  const [showSidebar, setShowSidebar] = useState(true)
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("")
  const [source,setSource] = useState("")

    const demoFolders = [
  {
    "_id": "654d13e75cab1400793c728e",
    "folderName": "Training Projects",
    "public_id": "d_zsimi-k",
    "folderUniqueName": "trainingkd",
    "projects": [
      {
        "_id": "654d1557739a988be059e387",
        "public_id": "houlgwpoi",
        "projectTitle": "Landing Page",
        "projectDescription": "Landing Page Design Test2",
        "likesCount": 0,
        "commentCount": 0
      },
      {
        "_id": "654d1557739a988be059e387",
        "public_id": "houlgwposi",
        "projectTitle": "Landing Page",
        "projectDescription": "Landing Page Design Test2",
        "likesCount": 0,
        "commentCount": 0
      },
      {
        "_id": "654d1557739a988be059e387",
        "public_id": "houlgwsposi",
        "projectTitle": "Landing Page",
        "projectDescription": "Landing Page Design Test2",
        "likesCount": 0,
        "commentCount": 0
      },
      {
        "_id": "654d1557739a988be059e387",
        "public_id": "houslgwsposi",
        "projectTitle": "Landing Page",
        "projectDescription": "Landing Page Design Test2",
        "likesCount": 0,
        "commentCount": 0
      },
      // ... (additional projects in the "Training Projects" folder)
    ],
    "createdAt": "2023-11-09T17:16:23.693Z"
  },
  {
    "_id": "654d13e75cab1400793c7284",
    "folderName": "Training Projects",
    "public_id": "d_zsimi-ks",
    "folderUniqueName": "trainingkd1",
    "projects": [
      {
        "_id": "654d1557739a988be059e387",
        "public_id": "houlgwpoi",
        "projectTitle": "Landing Page",
        "projectDescription": "Landing Page Design Test2",
        "likesCount": 0,
        "commentCount": 0
      },
      // ... (additional projects in the "Training Projects" folder)
    ],
    "createdAt": "2023-11-09T17:16:23.693Z"
  }
];


  return (
      <div className='playGround'>
      <Sidebar demoFolders={demoFolders} setSource={setSource} setCode={setCode} setLanguage={setLanguage}  showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Result showSidebar={showSidebar} setShowSidebar={setShowSidebar}  />
      <MainCodeArea source={source} code={code} setCode={setCode} language={language} showSidebar={showSidebar} />
      </div>
  )
}
