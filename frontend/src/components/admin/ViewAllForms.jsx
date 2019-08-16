import React from 'react';
import PropTypes from 'prop-types';
import './ViewAllForms.css';
import Row from '../reusable/Row';

function FormRow({ createdat, title, active }) {
  return (
    <Row>
      <div className='date'>
        { createdat }
      </div>
      <div className='row-title'>
        { title }
      </div>
      <div className={`status ${active}`}>
        { active ? 'Is Live' : 'Not Live' }
      </div>
    </Row>
  )
}

FormRow.propTypes = {
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
        active: false
      },
      {
        createdat: 'Oct 1, 2012',
        title: 'Another Form',
        active: false
      },
      {
        createdat: 'Nov 1, 2012',
        title: 'A third form',
        active: false
      }]
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

  createFormRow(formData) {
    return (
      <FormRow
        createdat={formData.createdat}
        title={formData.title}
        active={formData.active}/>
    )
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
