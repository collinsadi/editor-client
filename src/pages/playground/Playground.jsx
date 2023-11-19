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
  const [source, setSource] = useState({})
  const [currentType, setCurrentType] = useState("")
  const [src, setSrc] = useState('');

  // const runCode = () => {
  //   setSrc(srcCode)
  // }

  const srcCode = `
        <html>
            <body>${source?.html ? source?.html: "No Code To Run" }</body>
            <style>${source?.css ? source?.css: "" }</style>
            <script>${source?.javascript ? source?.javascript: "" }</script>
        </html>
    `

    const demoFolders = [
  {
    "_id": "654d13e75cab1400793c728e",
    "folderName": "Training Projects",
    "public_id": "d_zsimi-k",
    "folderUniqueName": "trainingkd",
    "projects": [
      /** 
* Paste one or more documents here
*/
{
  "owner_username": "user_name",
  "owner_id": "654bc751ad5964040f0291cf",
  "public_id": "f0dedmqxj",
  "projectTitle": "Landing Page",
  "projectDescription": "Landing Page Design Test",
  "code": {
    "html": "<h1>Hello World edited2</h1>",
    "javascript": 'const h1 = document.querySelector("h1"); \n h1.addEventListener("click", ()=>{ \n h1.style.color = "red";})',
    "css":"h1{color:green;}body{background-color:#fff;}"
  },
  "forks": [],
  "likes": [],
  "teamMembers": [],
  "private": true,
  "public": false,
  "deleted": false,
  "comments": [
    {
      "user_id": "654bc751ad5964040f0291cf",
      "comment": "This is a Nice Project For real!!!",
      "public_id": "j-laggc_a",
      "_id": {
        "$oid": "654ce6cadd93c53eab2e2556"
      }
    },
    {
      "user_id": "654bc751ad5964040f0291cf",
      "user_username": "user_name",
      "comment": "This is a Nice Project For real!!!",
      "public_id": "wrnnzpmi0",
      "_id": {
        "$oid": "654ce7a1db7b71687f7d856c"
      }
    }
  ],
  "createdAt": {
    "$date": "2023-11-08T23:30:58.308Z"
  },
  "updatedAt": {
    "$date": "2023-11-09T14:07:29.463Z"
  },
  "__v": 2,
  "commentCount": 2,
  "likesCount": 0
}  ],
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
      <Sidebar  demoFolders={demoFolders} setSource={setSource} setCode={setCode} setLanguage={setLanguage}  showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Result src={src} setSrc={setSrc} srcCode={srcCode} code={code} source={source} setSource={setSource} showSidebar={showSidebar} setShowSidebar={setShowSidebar}  />
      <MainCodeArea source={source} code={code} setSource={setSource} setCode={setCode} language={language} showSidebar={showSidebar} />
      </div>
  )
}
