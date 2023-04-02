import React, { useRef } from 'react';
import './LandingPage.scss';
import {CoverRecipe} from '../CoverRecipe/CoverRecipe';
import CoverPage from '../CoverPage/CoverPage';

const LandingPage = () => {
  
  const coverRecipeRef = useRef(null);

  return (
    <div className="Landing">
      <div className="CoverPage-Container">
        <CoverPage coverRecipeRef={coverRecipeRef} />
      </div>
      <div ref={coverRecipeRef} className='CoverRecipe-Container'>
        <CoverRecipe />
      </div>
    </div>
  );
}

  
export default LandingPage;