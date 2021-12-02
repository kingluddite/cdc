import React from 'react';

import profilePic from '../assets/images/profilepic.jpg';

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          Significant expertise, spanning more 15+ years, highly accomplished
          restaurant and hospitality practioner with extensive range of
          knowledge and hands on practicum of restaurant management, staff
          management, customer service , and front /back of the house
          supervision spanning more than 15 years. Business acumen also includes
          point of sales (POS) equipments, product marketing campaigns,
          inventory, budgeting and overall asset maintenance. Regarded as
          analytical, detailed oriented, and extremely proficient. Consistant
          display of competence, countenance and problem solving resulting in
          wins.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Candace D. Collins</span>
              <br />
              <span>
                <br /> Los Angeles, CA 90044 US
              </span>
              <br />
              <span>(323)816-6163</span>
              <br />
              <span>speak2cdc@yahoo.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
