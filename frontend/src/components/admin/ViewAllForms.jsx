import React from 'react';
import PropTypes from 'prop-types';
import './ViewAllForms.css';
import { LinkRow } from '../reusable/Row';

// this page is for an admin to view all the forms
// then the admin can click on a form and update
// (not sure if we should add create new since we have a button on the admin page)

function FormRow({ createdat, title, active, to, delay }) {
  return (
    <LinkRow to={to} delay={delay}>
      <div className='date'>
        { createdat }
      </div>
      <div className='row-title'>
        { title }
      </div>
      <div className={`status ${active}`}>
        { active ? 'Is Live' : 'Not Live' }
      </div>
    </LinkRow>
  )
}

FormRow.propTypes = {
  delay: PropTypes.string,
  to: PropTypes.string,
  createdat: PropTypes.string,
  title: PropTypes.string,
  active: PropTypes.bool,
};


// todo:
// - should fetch data
// - rows should be links
//
export default class AllForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
    }
  }

  //todo
  // update with with endpoint
  // application row click should be a link
  componentWillMount() {
    fetch('/api/form/')
      .then(d => d.json())
      .then( forms => this.setState({ forms: forms.forms || [] }))
      .catch( e => console.log(e));
  }

  createFormRow(formData, delay) {
    return (
      <FormRow
        key={`form-row-${formData.id}`}
        delay={`${delay}ms`}
        createdat={formData.createdAt}
        title={formData.title}
        active={formData.active}
        to={`/Admin/form/${formData.id}`}/>
    )
  }

  render() {
    let delay = 350;
    let Forms = this.state.forms.map((e) => {
      let row = this.createFormRow(e, delay);
      delay+=350;
      return row;
    })
    console.log(this.state.forms);
    return (
      <div className='all-forms'>
        {Forms}
      </div>
    )
  }
}
