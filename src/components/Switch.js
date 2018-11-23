import React from "react";


function Switch(props) {
    return(
        <div>
            <h5>Toggle state:</h5>
            <p>current state is <b>{props.typeOfState}</b></p>
            <label className="switch">
              <input type="checkbox" id="toggleSwitch" onClick={(e) => {props.handleTypeOfState(e.target.checked)}}/>
              <span className="slider round"></span>
            </label>
        </div>
    )
}
export default Switch;