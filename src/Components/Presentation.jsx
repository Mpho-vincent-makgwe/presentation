import React,{ useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Introduction from '../pages/Introduction';
import UnderstandingReact from '../pages/Understanding React.js';
import TheRoleOfRouting from '../pages/The Role of Routing';
import KeyRoutingConcepts from '../pages/Key Routing Concepts';
import { Switch } from 'react-router-dom/cjs/react-router-dom';

const Presentation = () => {
  const slides = [
    { title: 'Introduction', component: <Introduction/> },
    { title: 'Understanding React.js', component:<UnderstandingReact/> },
    { title: 'The Role of Routing', component:<TheRoleOfRouting/> },
    { title: 'Key Routing Concepts', component:<KeyRoutingConcepts/> },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="presentation">
      <div className="slide-container">
        <>
          
          {slides.map((slide, index) => (
            <Switch key={index}>
            <div key={slide.title}>
              <><Route
              key={index}
              path={`/presentation/${slide.title.replace(' ', '')}`}

              element={<SlideComponentLoader component={slide.component} />}
            >
<React.Suspense fallback={<div><h4>loading...</h4></div>}>{currentSlide == index && (
  <SlideComponentLoader/>
)}
</React.Suspense>
              
            </Route>
          </>
          </div>
          </Switch>
          ))}
          
          <div className="controls">
        {slides.map((slide, index) => (
           <Link
           key={index}
           to={`/presentation/${slide.title.replace(' ', '')}`}
           onClick={() => goToSlide(index)}>
           {slide.title}
         </Link>
        ))}
      </div>
          
        </>
      </div>
    </div>
  );
  
};

const SlideComponentLoader = ({ component: Component }) => {
  return <Component/>;
};

export default Presentation;
