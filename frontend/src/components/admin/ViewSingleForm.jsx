import React from 'react';
import PropTypes from 'prop-types';

// this page is to show a single form for an admin to update or change

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
        Admin form { this.props.match.params.formid }
      </div>
    )
  }
}

ViewSingleFormAdmin.propTypes = {
  match: PropTypes.object
}
