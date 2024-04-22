import React from 'react';
import { MDBFooter, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import '../styles/footer.css'; // Import your CSS file

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='footer-container'>
        <section className='social-icons'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/people/Center-for-Sustainable-Communities-Atlanta/100064695248624/' role='button'>
            <img src={facebook} alt="Facebook" />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/cscatl' role='button'>
            <img src={twitter} alt="Twitter" />
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
