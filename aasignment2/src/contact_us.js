import React from 'react';
import FormLayout from './FormLayout';
import Box from './Box';
import './index.css';

const ContactUs = () => (
  <React.Fragment>
    <header className="header"> Contact Us Form</header>
    <div className="wrapper">
      <div className="secondDiv">
        <label>Button</label>
        <Box name="button" control={<button className="heightWidth" />} />
        <label>textarea</label>

        <Box
          name="textarea"
          control={
            <textarea className="heightWidth" name="Textarea" disabled />
          }
        />
        <label>Email</label>
        <Box
          name="email"
          control={
            <input className="heightWidth" type="email" name="email" disabled />
          }
        />
        <label>password</label>
        <Box
          name="password"
          control={
            <input
              className="heightWidth"
              type="password"
              name="password"
              disabled
            />
          }
        />
        <label>General Info</label>
        <Box
          name="General Info"
          control={<input className="heightWidth" type="label" disabled />}
        />
      </div>

      <div className="firstDiv">
        <FormLayout />
        <div className="saveButton">
          <button className="buttonproperty" name="Save">
            Save
          </button>
          <button className="buttonproperty" name="Preview">
            Preview
          </button>
        </div>
      </div>
    </div>
  </React.Fragment>
);
export default ContactUs;
