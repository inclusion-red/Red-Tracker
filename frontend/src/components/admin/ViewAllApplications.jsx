import React from 'react';
// import applicants from './dummyDB/applicants'
import './ApplicantsIndex.css';
import PropTypes from 'prop-types';
import Row from '../reusable/Row';

class ApplicantionRow extends React.Component {
  render() {
    return (
      <Row>
        <div className='date'>
          {this.props.createdat}
        </div>
        <div className='email'>
          {this.props.email}
        </div>
        <div className={`status ${this.props.status}`}>
          {this.props.status}
        </div>
      </Row>
    )
  }
}

ApplicantionRow.propTypes = {
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
        email: 'josuerojas@gmail.com'
      },
      {
        createdat: 'Oct 1, 2012',
        status: 'approved',
        email: 'wings@gmail.com'
      },
      {
        createdat: 'Aug 1, 2012',
        status: 'inreview',
        email: 'chickens@gmail.com'
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

  createApplicantRow(applicantData) {
    return (
      <ApplicantionRow
        createdat={applicantData.createdat}
        email={applicantData.email}
        status={applicantData.status}/>
    )
  }

  render() {
    let ApplicationsForms = this.state.forms.map((e) => {
      return this.createApplicantRow(e);
    })
    return (
      <div className='application-index'>
        {ApplicationsForms}
      </div>
    )
  }

}
