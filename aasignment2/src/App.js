import React, { Component } from 'react';
import FormBuilder from './form_builder';
import { Redirect } from 'react-router-dom';

import { Switch, withRouter, Route } from 'react-router-dom';
import ContactUs from './contact_us';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/form_builder" exact component={FormBuilder} />
        <Route path="/contact_us" component={ContactUs} />
        {/* <Route path="/" component={SignUpForm} />
        <Route path="/" component={SignUpFormNext} /> */}
        <Redirect to="/form_builder" />
      </Switch>
    );
    return <div className="App">{routes}</div>;
  }
}

export default withRouter(App);
