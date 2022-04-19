import React from 'react';
import './css/Employment.css';

function Employment () { 
      return (
        <div className='employmentContainer'>
          <div className='employmenTitle'>
            Employment
          </div>

          <hr/>

          <div className='employmentInformation'>
            {/* Information for SideHustle  */}
            <div className='employmentLabel'>
              April 2022 - May 2022
            </div>
            <div className='employmentDetail'>
             <p className='intern'>Intern at SideHustle</p>
             <ul>
               <li>Interned as a React JS Developer.</li>
               <li>Worked on multiple React projects including a single page CV(curriculum vitae) application.</li>
               <li>Worked on multiple real life applications with fellow interns using React JS.</li>
               <li>Gained valuable soft skills e.g. Team work, communication and Leadership skills.</li>
             </ul>
            </div>

            {/* Information for ECX  */}
            <div className='employmentLabel'>
              March 2020 - April 2020
            </div>
            <div className='employmentDetail'>
             <p className='intern'>Intern at ECX 2.0</p>
             <ul>
               <li>Interned as a Web Developer at ECX(Engineering Career Expo) Unilag branch.</li>
               <li>Worked on multiple projects using HTML, CSS and Vanilla Javascript.</li>
               <li>Worked on multiple real life applications with fellow interns using HTML, CSS and Javascript.</li>
               <li>Gained valuable soft skills e.g. Team work, communication and Leadership skills.</li>
             </ul>
            </div>

            

          </div>
        </div>
      );
    };

export default Employment