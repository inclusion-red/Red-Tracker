import React from 'react';

class form {
    constructor() {
        let formID = 0;
    }

    getRow(o) {
        console.log("BABAY");
    }
    question() {

    }
    textField() {
        return (
            <div class="container">
                <div class="field">
                    <div class="control">
                        <textarea class="textarea" placeholder="Question" rows={this.scrollHeight}></textarea>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <textarea class="textarea" placeholder="Answer" rows={this.scrollHeight}></textarea>
                    </div>
                </div>
            </div>

            // <textarea className='remove-outline'></textarea>
        )
    }

    radio() {

    }

    dropDown() {

    }

}

export default form;