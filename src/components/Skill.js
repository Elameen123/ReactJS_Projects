import React from 'react';
import './css/personalDetails.css';

function Skill () { 
      return (
        <div className='detailContainer'>
          <div className='title'>
            Skill Set
          </div>

          <hr/>

          <div className='information'>

            {/* Heading  */}
            <div className='skillLabel'>
              SKILL
            </div>
            <div className='skillDetail'>
              LEVEL
            </div>

            {/* Information for HTML  */}
            <div className='label'>
              HTML
            </div>
            <div className='detail'>
              Intermediate
            </div>

            {/* Information for CSS  */}
              <div className='label'>
              CSS 3
            </div>
            <div className='detail'>
              Intermediate
            </div>

            {/* Information for Vanilla Javascript  */}
              <div className='label'>
              Vanilla Javascript
            </div>
            <div className='detail'>
              Intermediate
            </div>

            {/* Information for Bootstrap  */}
              <div className='label'>
                Bootstrap 4
            </div>
            <div className='detail'>
              Intermediate
            </div>

            {/* Information for React JS */}
            <div className='label'>
              React JS
            </div>
            <div className='detail'>
              Beginner
            </div>

          </div>
        </div>
      );
    };

export default Skill