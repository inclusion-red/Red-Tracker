import React from 'react';
import PropTypes from 'prop-types';

// this page is to show a single form for an admin to update or change

export default class ViewSingleFormAdmin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        form: {
          title: '',
          formfields: [],
        }
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
      console.log(this.state);
      const {title, formfields} = this.state.form;
      return(
        <form>
          <p>{title}</p>
          <label>
            Email:
            <input type="text" value={this.state.applicant.email}/>
          </label>
          {formfields.map(field => {
            return(
              <label key={field.id}>
                {field.question}
                <field.tag type="text" value={this.state.response[field.id]} />
              </label>
            )
          })}
          <button>Submit</button>
        </form>
      )
    }
  }
  

ViewSingleFormAdmin.propTypes = {
  match: PropTypes.object
}
