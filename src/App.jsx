import 'bootstrap/dist/css/bootstrap.min.css';
import { instructions } from './instructions';
import { useState } from 'react';
import parse from 'html-react-parser';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % instructions.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? instructions.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <h1 className="text-center mb-5">CLI Challange</h1>
      <div className="container d-flex flex-column align-items-center justify-content-center w-100">
        <div className="card text-center p-5">
          <div className="card-body">
            <h5 className="card-title mb-4 fs-3">
              CLI Challenge Step {currentIndex + 1}
            </h5>
            <p className="card-text fs-5">
              {parse(instructions[currentIndex].instructions)}
            </p>
            <div className="mt-4">
              <button className="btn btn-secondary me-2" onClick={handlePrev}>
                Previous
              </button>
              <button className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
