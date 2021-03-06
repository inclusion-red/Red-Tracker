import React from 'react';
// import applicants from './dummyDB/applicants'
import './ApplicantsIndex.css';
import PropTypes from 'prop-types';
import { LinkRow } from '../reusable/Row';


// this page should show all applications that an admin can review or do stuff..

class ApplicantionRow extends React.Component {
  render() {
    return (
      <LinkRow to={this.props.to} delay={this.props.delay}>
        <div className='date'>
          {this.props.createdat}
        </div>
        <div className='email'>
          {this.props.email}
        </div>
        <div className={`status ${this.props.status}`}>
          {this.props.status}
        </div>
      </LinkRow>
    )
  }
}

ApplicantionRow.propTypes = {
  delay: PropTypes.string,
  to: PropTypes.string,
  createdat: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
};

export default class AllApplicants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [{
        createdat: 'Sept 1, 2012',
        status: 'approved',
        email: 'josuerojas@gmail.com',
        id: 1
      },
      {
        createdat: 'Oct 1, 2012',
        status: 'approved',
        email: 'wings@gmail.com',
        id: 2
      },
      {
        createdat: 'Aug 1, 2012',
        status: 'inreview',
        email: 'chickens@gmail.com',
        id: 3
      }]
    }
  }

  //todo
  // update with with endpoint
  // application row click should be a link
  componentWillMount() {
    // fetch('/api/user')
    //   .then(d => d.json())
    //   .then( forms => this.setState({ forms: forms.forms || [] }))
    //   .catch( e => console.log(e));
  }

  // todo: this is not linked right ()
  createApplicantRow(applicantData, delay) {
    return (
      <ApplicantionRow
        delay={`${delay}ms`}
        createdat={applicantData.createdat}
        email={applicantData.email}
        status={applicantData.status}
        to={`/Admin/Applicants/form/${applicantData.id}`}/>
    )
  }

  render() {
    let delay = 350;
    let ApplicationsForms = this.state.forms.map((e) => {
      let row = this.createApplicantRow(e, delay);
      delay+=350;
      return row;
    })
    return (
      <div className='application-index'>
        {ApplicationsForms}
      </div>
    )
  }

}
