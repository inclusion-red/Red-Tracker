import React from 'react';
import './ViewSingleApplicant.css';
import { formatDate } from '../helpers/formattext';
import PropTypes from 'prop-types';


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
      form_title: "",
      questions: [],
      user_name: '',
      date_create: '',
      responces: [],
      status: '',
    }
    this.setCleanData = this.setCleanData.bind(this);
  }

  componentWillMount() {
    let userid = this.props.match.params.applicantid;
    let formid = this.props.match.params.formid;
    fetch(`/api/user/${userid}/${formid}`)
      .then( d => d.json() )
      .then( data => this.setCleanData(data))
      .catch( e => console.error('error fetch', e))
  }

  // clean the data nicely to manage it better in state
  setCleanData(data) {
    // console.log(data);
    this.setState({
      user_name: data.email,
      form_title: data.forms[0] ? data.forms[0].title : '',
      date_create: formatDate(data.createdAt),
      responces: data.forms[0].formfields.map((e) => {
        return {
          question: e.question,
          answer: e.applicantForms[0].applicantResponse.input_value
        }
      }),
      status: data.forms[0].applicantForm.status
    })
  }

  createResponces(responces) {
    return responces.map((e, i) => {
      return(
        <div className='single-responce' key={`responce-${i}`}>
          <div className='label'>{e.question}</div>
          <div className='responce'>{e.answer}</div>
        </div>
      )
    })
  }

  render() {
    // console.log(this.state.responces);
    return(
      <div className='view-wrapper'>
        <div className='view-single-applicant'>
          <header>{this.state.form_title} {this.state.user_name}</header>
          <h3>Date Created - {this.state.date_create}</h3>
          <div className='form-responces'>
            {this.createResponces(this.state.responces)}
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

ViewSingleApplicant.propTypes = {
  match: PropTypes.object
}
