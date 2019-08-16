import React from 'react';
import './ViewSingleApplicant.css';

// this is a page for an admin to view a single application
// an admin should be able to change the Status
// comment on the application

// todo:
// link api endpoint and updat data
// add comments

export default class ViewSingleApplicant extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "Some Application - Josue",
      questions: [],
      status: 'New'
    }
  }

  componentWillMount() {
    // {this.props.match.params.applicantid}
    // {this.props.match.params.formid}
    // fetch('/api/form/')
  }

  render() {
    return(
      <div class='view-wrapper'>
        <div className='view-single-applicant'>
          <header>{this.state.title}</header>
          <h3>Date Created - August 3, 2019</h3>
          <div className='form-responces'>
            <div className='single-responce'>
              <div className='label'>What is the question?</div>
              <div className='responce'>To be or not to be</div>
            </div>
            <div className='single-responce'>
              <div className='label'>What is the question?</div>
              <div className='responce'>To be or not to be</div>
            </div>
            <div className='single-responce'>
              <div className='label'>What is the question?</div>
              <div className='responce'>To be or not to be</div>
            </div>
          </div>
          <div className='status-wrapper'>
            <div className='label'>Status</div>
            <div className={`status ${this.state.status}`}>{this.state.status}</div>
          </div>
        </div>
      </div>
    )
  }
}
