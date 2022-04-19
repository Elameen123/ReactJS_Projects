import React from 'react';
import './css/Header.css';

function Header () { 
      return (
        // CredentialsContainer 
        <div className='container'>

          {/* Full Name  */}
          <div className='name'>
            Mohammed Al-hameen Olarewaju
          </div>

          {/* Track  */}
          <div className='track'>
            Junior Frontend Developer with +3 Years Experience
          </div>

        </div>
      );
    };

export default Header