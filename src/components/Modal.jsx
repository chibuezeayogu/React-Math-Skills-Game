import React from 'react';


const Modal = () => (
  <div 
    className="modal fade" 
    id="modal" tabIndex="-1" 
    role="dialog" 
    aria-labelledby="exampleModalLabel" 
    aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header text-center">
          <h3 className="modal-title"
            id="exampleModalLabel">How To Play</h3>
        </div>
        <div className="modal-body">
          <div className="row text-center">
          The aim of the game is to select all the numbers displayed on the 
          card to match the number of randomly generated stars on the left.
          </div>
          <hr />
          <div className="row text-center">{
             `You can select the exact or any possible combinations of number 
             that sums to the number of stars displayed. Check if your selection 
             is correct by clicking button with equal {=} sign.`
          }
          </div>
          <hr />
          <div className="row text-center">{
            `The button is marked green for correct answers and red for wrong 
            answers. You can accept a correct answer by clicking the button 
            again to start another round. Used numbers will no longer 
            be available for selection once answer is accepted`
          }
          </div>
          <hr />
          <div className="row text-center">{
            `You are provided with 5 redraws shown on the yellow button. 
            You may use this to generate another set of random stars when the 
            numbers available for selection cannot combine to satisfy 
            the number of stars displayed. `
          }
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
