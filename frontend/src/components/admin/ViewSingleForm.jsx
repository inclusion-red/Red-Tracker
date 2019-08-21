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
      .then(d => d.json())
      .then(form => this.setState({ form }))
      .catch(e => console.log('something went wrong', e))
  }


  render() {
    // console.log('forms stuff', this.state.form);
    if (this.state.form.formFields === undefined) {
      return null;
    }
    console.log(this.state)
    let lis = this.state.form.formFields.map((ele) => {
      if (ele.tag === 'input') {
        return (
          <>
          <div className="field">
            <div className="control">
              <textarea className="textarea has-background-primary" id='question' row={1} name="question" value={ele.question}></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea className="textarea" id='answer'placeholder="Answer"></textarea>
            </div>
          </div>
                </>  
        )
  }
})
return (
  <div>
    {this.state.form.title}
    {lis}
    Admin form {this.props.match.params.formid}
  </div>
)
  }
}

ViewSingleFormAdmin.propTypes = {
  match: PropTypes.object
}
