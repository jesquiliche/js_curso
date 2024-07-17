import React, { useState } from 'react';
import './quiz.css';

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      question: '¿Cuál es el operador de asignación en JavaScript?',
      options: ['=', '==', '===', '!='],
      answer: '='
    },
    {
      question: '¿Cuál es el operador de igualdad estricta?',
      options: ['=', '==', '===', '!=='],
      answer: '==='
    },
    {
      question: '¿Cuál es el operador de desigualdad en JavaScript?',
      options: ['<>', '==', '!==', '!='],
      answer: '!='
    },
    {
      question: '¿Cuál es el operador de desigualdad estricta?',
      options: ['<>', '===', '!==', '!='],
      answer: '!=='
    },
    {
      question: '¿Cuál es el operador de adición?',
      options: ['-', '*', '/', '+'],
      answer: '+'
    },
    {
      question: '¿Cuál es el operador de sustracción?',
      options: ['-', '*', '/', '+'],
      answer: '-'
    },
    {
      question: '¿Cuál es el operador de multiplicación?',
      options: ['*', '+', '-', '/'],
      answer: '*'
    },
    {
      question: '¿Cuál es el operador de división?',
      options: ['/', '*', '+', '-'],
      answer: '/'
    },
    {
      question: '¿Cuál es el operador de módulo?',
      options: ['%', '*', '/', '+'],
      answer: '%'
    },
    {
      question: '¿Cuál es el operador de incremento en JavaScript?',
      options: ['+', '++', '--', '**'],
      answer: '++'
    },
    {
      question: '¿Cuál es el operador de decremento en JavaScript?',
      options: ['-', '+', '--', '++'],
      answer: '--'
    },
    {
      question: '¿Cuál es el operador de concatenación de cadenas?',
      options: ['+', '++', '&', '&&'],
      answer: '+'
    },
    {
      question: '¿Cuál es el operador de exponenciación?',
      options: ['**', '^', 'exp', '^^'],
      answer: '**'
    },
    {
      question: '¿Cuál es el operador lógico AND?',
      options: ['&&', '||', '&', '|'],
      answer: '&&'
    },
    {
      question: '¿Cuál es el operador lógico OR?',
      options: ['||', '|', '&&', 'or'],
      answer: '||'
    },
    {
      question: '¿Cuál es el operador lógico NOT?',
      options: ['!', '!!', '~', 'not'],
      answer: '!'
    },
    {
      question: '¿Cuál es el operador ternario en JavaScript?',
      options: ['?', ':', '?:', '??'],
      answer: '?:'
    },
    {
      question: '¿Qué operador se usa para verificar si una propiedad existe en un objeto?',
      options: ['exists', 'in', 'has', 'contain'],
      answer: 'in'
    },
    {
      question: '¿Qué operador se usa para comparar dos valores sin convertirlos a un tipo común?',
      options: ['=', '==', '===', '!=='],
      answer: '==='
    },
    {
      question: '¿Cuál es el operador de bit a bit AND?',
      options: ['&&', '&', '|', '||'],
      answer: '&'
    }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    let newScore = 0;
    questions.forEach((q, index) => {
      const selectedOption = event.target[`question-${index}`].value;
      if (selectedOption === q.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setAnswered(true);
  };

  return (
    <div>
      <h2>Cuestionario</h2>
      {!answered ? (
        <form onSubmit={handleSubmit}>
          {questions.map((q, index) => (
            <div key={index}>
              <h3><b>Pregunta {index+1}</b></h3>
              <h4>{q.question}</h4>
              {q.options.map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    id={`question-${index}-${option}`}
                    name={`question-${index}`}
                    value={option}
                    required
                  />
                  <label htmlFor={`question-${index}-${option}`}>{option}</label>
                </div>
              ))}
            </div>
          ))}
          <button type="submit" className='quiz-button'>Enviar</button>
        </form>
      ) : (
        <div>
          <p>Tu puntuación es: {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
