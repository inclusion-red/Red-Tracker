import React from 'react';
import PropTypes from 'prop-types';


export default class ViewSingleFormApplicant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    }
  }

  // should return only if it is active if not then display an error
  componentWillMount() {
    fetch(`/api/form/${this.props.match.params.formid}`)
      .then( d => d.json() )
      .then( form => this.setState({form}) )
      .catch( e => console.log('something went wrong', e))
  }

  render() {
    console.log(this.state.form);
    return(
      <div>
        { this.props.match.params.formid }
      </div>
    )
  }
}


ViewSingleFormApplicant.propTypes = {
  match: PropTypes.object
}
