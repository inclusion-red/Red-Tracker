import React from 'react';
import PropTypes from 'prop-types';

// this page should be for an applicant to view a form and fill it out.
// - it should fetch the form with id
// - and should be able to send a post request when it is done filling it out

export default class ViewSingleFormApplicant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: '',
        formfields: [],
      },
      applicant: {email: ""},
      response: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // should return only if it is active if not then display an error (probably should be a different route)
  componentWillMount() {
    fetch(`/api/form/${this.props.match.params.formid}`)
      .then( d => d.json() )
      .then( form => this.setState({form}) )
      .catch( e => console.log('something went wrong', e))
  }

  handleChange(event,id) {
    if (id > 0) {
      let response = {...this.state.response};
      response[id] = event.target.value;
      console.log(event.target.value);
      console.log(id);
      this.setState({response: response});
    } else {
      this.setState({applicant: {email: event.target.value}});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    //fetch(`/api/form/${this.props.match.params.formid}`, {method: "POST"})
  }
  
  render() {
    console.log(this.state);
    const {title, formfields} = this.state.form;
    return(
      <form>
        <p>{title}</p>
        <label>
          Email:
          <input type="text" value={this.state.applicant.email} onChange={(e)=> this.handleChange(e, -1)}/>
        </label>
        {formfields.map(field => {
          return(
            <label key={field.id}>
              {field.question}
              <field.tag type="text" value={this.state.response[field.id]} onChange={(e)=> this.handleChange(e, field.id)} />
            </label>
          )
        })}
        <button>Submit</button>
      </form>
    )
  }
}


ViewSingleFormApplicant.propTypes = {
  match: PropTypes.object
}
