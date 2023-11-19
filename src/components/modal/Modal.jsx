import React  from 'react'
import "./Modal.css"

export const Modal = ({modalStatus,closeHandler,children}) => {
  return (
    <>
      {modalStatus && (
      <div className='modal'>
      
      <div className="modal-inner">

        <div className="modal-close-button">
          <span onClick={closeHandler}>&times;</span>
        </div>

        <div className="main-modal-body">


          {children}


        </div>
        

      </div>

    </div>
      )}
    
    </>
  )
}


