import { useState } from 'react';
import Button from '../components/Button';
import Question from '../components/Question';
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question';
import Quiz from '../components/Quiz';

const mockQuestion = new QuestionModel(1, 'How many?', [
  AnswerModel.setWrongAnswer('1'),
  AnswerModel.setWrongAnswer('2'),
  AnswerModel.setWrongAnswer('3'),
  AnswerModel.setRightAnswer('0'),
]);

export default function Home() {
  const [question, setQuestion] = useState(mockQuestion);

  function answeredQuestion(question: QuestionModel) {}

  function goToNextStep() {}

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Quiz
        question={question}
        isLastQuestion={false}
        answeredQuestion={answeredQuestion}
        goToNextStep={goToNextStep}
      />
    </div>
  );
}
