import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
          Your Gateway to Career Opportunities!
          Embark on your journey to a fulfilling career with our comprehensive job search platform. Discover a diverse range of job listings from leading companies across industries. Whether you're a recent graduate, seasoned professional, or seeking a career change, we're here to help you find the perfect match.
          Browse, filter, and apply to jobs effortlessly. Our user-friendly interface and advanced search tools streamline your job hunt, ensuring you never miss out on your dream job. Create a personalized profile to showcase your skills and experience, and let employers find you.
          Stay updated with the latest industry trends, career advice, and interview tips through our insightful blog posts and resources. Your success is our priority, and we're here to empower you every step of the way.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
