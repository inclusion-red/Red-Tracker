import React from 'react';
import PropTypes from 'prop-types';
import './ViewAllForms.css';
import { LinkRow } from '../reusable/Row';

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
      },
      {
        createdat: 'Sept 1, 2012',
        title: 'Some Form',
        active: false,
        id: 4
      },
      {
        createdat: 'Oct 1, 2012',
        title: 'Another Form',
        active: false,
        id: 5
      },
      {
        createdat: 'Nov 1, 2012',
        title: 'A third form',
        active: false,
        id: 6
      }],
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

  createFormRow(formData, delay) {
    return (
      <FormRow
        delay={`${delay}ms`}
        createdat={formData.createdat}
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
    return (
      <div className='all-forms'>
        {Forms}
      </div>
    )
  }
}
