import React, { useState } from 'react'
import "./Sidebar.css"
import logo from "../../../../assets/logo-png-white.png"
import { Modal } from '../../../../components/modal/Modal'

// import image from "./plgu.png"

// ICOnS

import {BiLeftIndent,BiLogoJavascript} from "react-icons/bi"
import { BsTextIndentLeft,BsFillFolderSymlinkFill, BsSignTurnLeft } from "react-icons/bs"
import { FcFolder, FcOpenedFolder } from "react-icons/fc"
import { FaFileCode,FaCss3Alt,FaSave } from "react-icons/fa"
import {AiFillHtml5, AiFillFolderAdd,AiFillLock,AiFillUnlock} from "react-icons/ai"


export const Sidebar = ({ showSidebar, setShowSidebar,setLanguage,setCode,setSource,demoFolders}) => {
  const [folderOpen, setFolderOpen] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [projectOpen, setProjectOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(false);
  const [autoSave, setAutosave] = useState(true)

  const handleSidebarState = () => {
    showSidebar ? setShowSidebar(false) : setShowSidebar(true);

    if (!showSidebar) {
      const resultContainer = document.getElementById("extra-result");
      resultContainer.classList.remove("extra-result");
    }
  };

  const handleFolderState = (folder) => {
    // Toggle the folder open/closed state
    setFolderOpen(!folderOpen);
    // Set the selected folder
    setSelectedFolder(folder);
  };

  const handleFileState = (file) => {
    
    setProjectOpen(!projectOpen);
    setSelectedFile(file)
    setSource(file.code)
    

  };

  const handleFileClick = (file, type) => {
    // Check if a folder is selected
    if (selectedFolder) {
      // Find the selected project based on the public_id
      const selectedProject = selectedFolder.projects.find(project => project.public_id === file.public_id);

      // Check if the selected project exists
      if (selectedProject) {
        // Find the selected file based on the file type (HTML, CSS, JavaScript)
        const selectedFile = selectedProject.code[type];

        // Check if the selected file exists
        // if (selectedFile) {

        setLanguage(type)
        setCode(selectedFile ? selectedFile : "")
    

          console.log(selectedFile)
          console.log(type)

          // Set the content of the selected file to the state
          // setSelectedFileContent(selectedFile.content);
        // }
      }
    }
  };

  const handleCloseModal = () => {
    
    setShowModal(false)

  }

  const handleShowModal = (modal) => {
    
    setCurrentModal(modal)
    setShowModal(BsSignTurnLeft)

  }

  return (
    <>
      <Modal modalStatus={showModal} closeHandler={handleCloseModal}>
        {/* Save Project Modal */}

        {currentModal === "save" && selectedFile && (
          <div>
            <p>Save Changes Made to <span>{selectedFile.projectTitle}</span>?</p>

            <button>Save Project</button>
            <button>Turn Autosave {"On"}</button>

          </div>
        )}

        {currentModal === "newFolder" && (
          <div>New Folder</div>
        )}

        {currentModal === "shareLink" && (
          <div>Share Folder</div>
        )}

        {currentModal === "lock" && (
          <div>Lock Folder</div>
        )}

        {currentModal === "unlock" && (
          <div>Unlock Folder</div>
        )}
        
    </Modal>
    <div className={showSidebar ? 'playgroundsidebar full-sidebar' : 'playgroundsidebar half-sidebar'}>

      <div className="playgroundsidebar-inner">

        <div className="playgroundsidebar-top">

          <div className="playgroundsidebar-top-left">

            <img src={logo} alt="Codellins Logo" />

          </div>

          <div className="playgroundsidebar-top-right">

            <span onClick={handleSidebarState}>{!showSidebar ? <BsTextIndentLeft /> : <BiLeftIndent />}</span>

          </div>

        </div>

        <div className="playgroundsidebar-body">

          <div className="playgroundsidebar-body-inner">


            <div className="sidebar-buttons">

              <div title='Save Changes' className="single-button">
                <span onClick={()=> handleShowModal("save")}><FaSave /></span>
              </div>
              <div title='Add Folder' className="single-button">
                <span><AiFillFolderAdd onClick={()=> handleShowModal("newFolder")}/></span>
              </div>
              <div title='Share Folder' className="single-button">
                  <span><BsFillFolderSymlinkFill onClick={() => handleShowModal("shareLink")} /></span>
              </div>
              <div title='Privatize' className="single-button">
                  <span><AiFillLock onClick={() => handleShowModal("lock")} /></span>
              </div>
              <div title='Public' className="single-button">
                  <span><AiFillUnlock onClick={() => handleShowModal("unlock")} /></span>
              </div>

            </div>

            {demoFolders && demoFolders.map((folder) => (
              <div key={folder.folderUniqueName} className="sidebar-folder">

                <div id="sidebar-folder" className="sidebarfolder-icon-name" onClick={() => handleFolderState(folder)}>
                  <div className="sidebar-folder-icon">
                    <span>{folderOpen ? <FcOpenedFolder /> : <FcFolder />}</span>
                  </div>
                  <div className="sidebar-folder-name">
                    <p>{folder.folderName}</p>
                  </div>
                </div>

                {folderOpen && selectedFolder && selectedFolder.folderUniqueName === folder.folderUniqueName && (
                  <div className="folder-projects">
                    {folder.projects.map((project) => (
                      <div key={project.public_id} className="single-projects">
                        <div onClick={()=>handleFileState(project)} className="project-icon-name">
                          <div className="project-icon">
                            <span><FaFileCode /></span>
                          </div>
                          <div className="project-name">
                            <p>{project.projectTitle}</p>
                          </div>
                        </div>

                        {projectOpen && selectedFile && selectedFile.public_id === project.public_id && (
                            
                          

                        <div className="project-code-files">
                          {/* Assuming you want to display HTML, CSS, and JavaScript files */}

                          <div onClick={()=>handleFileClick(project, "html")} className="single-project-file">
                            <div className="project-file-icon">
                              <span><AiFillHtml5 /></span>
                            </div>
                            <div className="project-file-name">
                              <p>HTML</p>
                            </div>
                          </div>
                          <div onClick={()=>handleFileClick(project, "css")} className="single-project-file">
                            <div className="project-file-icon css">
                              <span><FaCss3Alt /></span>
                            </div>
                            <div className="project-file-name">
                              <p>CSS</p>
                            </div>
                          </div>
                          <div onClick={()=>handleFileClick(project, "javascript")} className="single-project-file">
                            <div className="project-file-icon javascript">
                              <span><BiLogoJavascript /></span>
                            </div>
                            <div className="project-file-name">
                              <p>Javascript</p>
                            </div>
                          </div>


                          </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
