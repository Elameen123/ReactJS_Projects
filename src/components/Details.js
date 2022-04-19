import React from 'react';
import './css/personalDetails.css';

function Details() { 
      return (
        <div className='detailContainer'>
          <div className='title'>
            Personal details
          </div>

          <hr/>

          <div className='information'>
            {/* Information for Email  */}
            <div className='label'>
              Email address
            </div>
            <div className='detail'>
              lanre.mohammed23@gmail.com
            </div>

              {/* Information for Phone Number  */}
              <div className='label'>
              Phone Number
            </div>
            <div className='detail'>
              +234 706 948 4903
            </div>

              {/* Information for Address  */}
              <div className='label'>
              Address
            </div>
            <div className='detail'>
              Professor Saburi Biobaku Hall, Akoka-Yaba, Lagos.
            </div>

              {/* Information for LinkedIn  */}
              <div className='label'>
              LinkedIn
            </div>
            <div className='detail'>
              https://linkedin.com/in/al-hameen-mohammed-291565234
            </div>

          </div>
        </div>
      );
    };

export default Details