import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './test.css';
import Footer from './footer';
import Header from './header';

const Quiz = () => {
  // Quiz questions and answers
  const questions = [
    {
        question: '1. What does a red traffic light indicate?',
        options: ['Stop', 'Go', ' Proceed with caution', 'Speed up'],
        correctAnswer: 'Stop'
      },
      {
        question: '2. What should you do if you approach an intersection with a flashing yellow signal?',
        options: [' Stop and proceed when safe', 'Speed up to clear the intersection quickly', 'Slow down and proceed with caution', ' Ignore the signal and proceed as usual'],
        correctAnswer: 'Slow down and proceed with caution'
      },
      {
          question: '3. What does a yield sign mean?',
          options: ['Stop and yield to oncoming traffic', 'Merge with traffic without stopping', ' Slow down and prepare to stop if necessary', 'Proceed without stopping'],
          correctAnswer: 'Slow down and prepare to stop if necessary'
        },
      {
          question: '4. When driving on a multilane road, which lane is typically used for passing slower vehicles?',
          options: ['Left lane', 'Right lane', 'Middle lane', 'Any lane'],
          correctAnswer: 'Left lane'
        },
        {
          question: '5. What does a solid yellow line on the road indicate?',
          options: ['No passing allowed', 'Passing allowed if safe', 'Passing allowed only on the right', 'Passing allowed only on the left'],
          correctAnswer: 'No passing allowed'
        },
        {
          question: '6. What should you do if you encounter black ice on the road?',
          options: ['Accelerate to get through it quickly', 'Brake hard to stop your vehicle', 'Steer gently and avoid sudden movements', 'Drive faster to maintain control'],
          correctAnswer: 'Steer gently and avoid sudden movements'
        },
        {
          question: '7. When is it legal to use a cell phone while driving?',
          options: ['Only in emergencies', 'When stopped at a red light', 'When using a hands-free device', 'At any time'],
          correctAnswer: 'When using a hands-free device'
        },
        {
          question: '8. What is the purpose of an anti-lock braking system (ABS)?',
          options: ['To lock the brakes in case of emergency', ' To prevent skidding and maintain steering control during hard braking', 'To reduce fuel consumption', 'To increase the braking distance'],
          correctAnswer: 'To prevent skidding and maintain steering control during hard braking'
        },
        {
          question: '9. How much space should you maintain between your vehicle and the vehicle in front of you?',
          options: ['1 second', '2 seconds', '3 seconds', '4 seconds'],
          correctAnswer: '3 seconds'
        },
        {
          question: '10. What should you do if you miss your exit on the highway?',
          options: ['Stop and back up to the exit', 'Make a U-turn and go back', 'Continue to the next exit and find an alternate route', 'Drive in reverse on the shoulder until you reach the exit'],
          correctAnswer: 'Continue to the next exit and find an alternate route'
        },
        {
          question: '11. What should you do if you encounter a school bus with its red lights flashing and stop arm extended?',
          options: ['Stop and wait until the lights stop flashing and the stop arm is retracted', 'Slow down and proceed with caution', 'Honk your horn to alert the bus driver', 'Pass the bus quickly to avoid delays'],
          correctAnswer: 'Stop and wait until the lights stop flashing and the stop arm is retracted'
        },
        {
          question: '12. What does a white rectangular sign with black lettering indicate?',
          options: ['Regulatory information', 'Warning of potential hazards', 'Directional information', ' Information about nearby attractions'],
          correctAnswer: 'Regulatory information'
        },
        {
          question: '13. What is the purpose of a roundabout?',
          options: ['To speed up traffic flow', 'To slow down traffic flow', 'To regulate traffic at intersections', 'To provide a place for pedestrians to cross'],
          correctAnswer: 'To regulate traffic at intersections'
        },
        {
          question: '14. What should you do if your vehicle starts to hydroplane on wet roads?',
          options: ['Brake hard to stop the vehicle', 'Accelerate to regain control', 'Steer in the direction you want to go', 'Close your eyes and brace for impact'],
          correctAnswer: 'Steer in the direction you want to go'
        },
        {
          question: '15. When should you use your headlights?',
          options: [' Only at night', 'Only in foggy conditions', 'At all times when driving', 'Only when approaching other vehicles'],
          correctAnswer: 'At all times when driving'
        },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [result, setResult] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption('');
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      if (score > 8) {
        setResult('pass');
      } else {
        setResult('failed');
      }
    }
  };

  return (
    <div id="body">
    <Header></Header>
    <main>
    <section class="content">    
      </section>
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section" ><center>
          <h1><p>You scored {score} out of {questions.length}</p></h1><br /><br /><br />
          <h2><b><p>{result === 'pass' ? 'Congratulations! You passed!' : 'Sorry, you failed.'}</p></b></h2></center>
        </div>
      ) : (
        <>
          <div className="question-section">
          <center><h1><b><div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div></b></h1></center><br /><br />
            <h3><div className="question-text">{questions[currentQuestion].question}</div></h3>
          </div>
          <div className="button-container">
            {questions[currentQuestion].options.map((option, index) => (
              <div><button className='quizbutton' key={index} onClick={() => handleOptionSelect(option)}>{option}</button></div>
            ))}
          </div><br />
          {selectedOption && (
            <button className="next-question" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
        </>
      )}
      
    </div>
    </main>
    <footer>
       <Footer></Footer>
    </footer>

    </div>
  );
};

export default Quiz;
