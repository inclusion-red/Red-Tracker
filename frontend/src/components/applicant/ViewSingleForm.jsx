import React from 'react';
import PropTypes from 'prop-types';

// this page should be for an applicant to view a form and fill it out.
// - it should fetch the form with id
// - and should be able to send a post request when it is done filling it out

export default class ViewSingleFormApplicant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    }
  }

  // should return only if it is active if not then display an error (probably should be a different route)
  componentWillMount() {
    fetch(`/api/form/${this.props.match.params.formid}`)
      .then( d => d.json() )
      .then( form => this.setState({form}) )
      .catch( e => console.log('something went wrong', e))
  }

  render() {
    return(
      <div>
        Applicant form { this.props.match.params.formid }
      </div>
    )
  }
}


ViewSingleFormApplicant.propTypes = {
  match: PropTypes.object
}
