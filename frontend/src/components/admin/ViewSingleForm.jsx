import React from 'react';
import PropTypes from 'prop-types';

export default class ViewSingleFormAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    }
  }

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

ViewSingleFormAdmin.propTypes = {
  match: PropTypes.object
}
