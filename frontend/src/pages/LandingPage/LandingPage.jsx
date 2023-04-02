import React, { useRef } from 'react';
import './LandingPage.scss';
import {CoverRecipe} from '../CoverRecipe/CoverRecipe';
import CoverPage from '../CoverPage/CoverPage';

const LandingPage = () => {
  
  const coverRecipeRef = useRef(null);

  return (
    <div className="Landing">
      <CoverPage coverRecipeRef={coverRecipeRef} />
      <div ref={coverRecipeRef}>
        <CoverRecipe />
      </div>
    </div>
  );
}

  
export default LandingPage;