import React, { Component } from 'react';

import { Link, Switch, withRouter, Route } from 'react-router-dom';


// import ContactUs from './contact_us';

class FormBuilder extends Component {
  render() {
    let viewContent = null;
    viewContent = (
      <React.Fragment>
        <header>Easy Forms</header>
        <ol type="1">
          <li>
            <Link to="/contact_us">Contact Us</Link>
          </li>
          <li>Sign Up Form</li>
          <li>Sign Up Form 2</li>
        </ol>
      </React.Fragment>
    );

    return viewContent;
  }
}

export default withRouter(FormBuilder);
