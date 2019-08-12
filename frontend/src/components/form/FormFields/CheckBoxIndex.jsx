import React from 'react'

function CheckBoxIndex(prop) {

    return (
        <div className="column">
            <label className="checkbox">
                <input type="checkbox"></input>
                <div className="control">
                    <input className="input" type="text" placeholder="choice"></input>
                </div>
            </label>
        </div>
    )
}
//test
export default CheckBoxIndex
