import React from 'react';
import './LandingPage.scss';
import CoverRecipe from '../CoverRecipe/CoverRecipe';
import CoverPage from '../CoverPage/CoverPage';

class LandingPage extends React.Component {
    render() {
      return (
        <div className="Landing">
            <CoverPage />
            <CoverRecipe />
        </div>
      );
    }
  }
  
  export default LandingPage;