import React from 'react';
import PropTypes from 'prop-types';
import { LinkRow } from '../reusable/Row';

// thi page is for applicants to view all available applications.

function FormRow({ createdat, title, to, delay }) {
  return(
    <LinkRow to={to} delay={delay}>
      <div className='date'>
        { createdat }
      </div>
      <div className='row-title'>
        { title }
      </div>
    </LinkRow>
  )
}

FormRow.propTypes = {
  delay: PropTypes.string,
  to: PropTypes.string,
  createdat: PropTypes.string,
  title: PropTypes.string,
};

export default class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [{
        createdat: 'Sept 1, 2012',
        title: 'Some Form',
        active: false,
        id: 1
      },
      {
        createdat: 'Oct 1, 2012',
        title: 'Another Form',
        active: false,
        id: 2

      },
      {
        createdat: 'Nov 1, 2012',
        title: 'A third form',
        active: false,
        id: 3
      }]
    }
  }

  //todo
  // update with with endpoint
  componentWillMount() {
    // fetch('/api/user')
    //   .then(d => d.json())
    //   .then( forms => this.setState({ forms: forms.forms || [] }))
    //   .catch( e => console.log(e));
  }

  createFormRow(formData, delay) {
    return (
      <FormRow
        delay={`${delay}ms`}
        createdat={formData.createdat}
        title={formData.title}
        active={formData.active}
        to={`/Applicants/form/${formData.id}`}/>
    );
  }

  render() {
    let Forms = this.state.forms.map((e) => {
      return this.createFormRow(e);
    })
    return (
      <div className='all-forms'>
        {Forms}
      </div>
    )
  }
}
