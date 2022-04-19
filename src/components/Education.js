import React from 'react';
import './css/Education.css';

function Education () { 
      return (
        <div className='educationContainer'>
          <div className='educationTitle'>
            Education
          </div>

          <hr/>

          <div className='educationInformation'>
            {/* Information for Crescent Schools  */}
            <div className='educationLabel'>
              September 2007 - July 2014
            </div>
            <div className='educationDetail'>
             <p className='study'>Schooled at Crescent Schools, 1004 Housing Estate.</p>
            </div>

            {/* Information for Multi-Treasure  */}
            <div className='educationLabel'>
              September 2014 - July 2019
            </div>
            <div className='educationDetail'>
             <p className='study'>Schooled at Multi-Treasure College, Ajah, Lagos.</p>
            </div>

            {/* Information for APTECH  */}
            <div className='educationLabel'>
              October 2019 - October 2020
            </div>
            <div className='educationDetail'>
             <p className='study'>Schooled at Aptech (Prime Innovation Institute), Sangotedo, Lagos.</p>
            </div>

             {/* Information for University of Lagos  */}
             <div className='educationLabel'>
              January 2021 - Present
            </div>
            <div className='educationDetail'>
             <p className='study'>Student at University of Lagos, Faculty of Engineering, Department of Mechanical Engineering.</p>
            </div>

          </div>
        </div>
      );
    };

export default Education