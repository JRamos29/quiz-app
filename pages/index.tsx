import { useState } from 'react';
import Question from '../components/Question';
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question';

const mockQuestion = new QuestionModel(1, 'How many?', [
  AnswerModel.setWrongAnswer('1'),
  AnswerModel.setWrongAnswer('2'),
  AnswerModel.setWrongAnswer('3'),
  AnswerModel.setRightAnswer('0'),
]);

export default function Home() {
  const [question, setQuestion] = useState(mockQuestion);

  function onAnswer(index: number) {
    console.log(index);
    setQuestion(question.answerWith(index));
  }

  function onTimeout() {
    if (question.notAnswered) {
      setQuestion(question.answerWith(-1));
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Question
        value={question}
        timeToAnswer={5}
        onAnswer={onAnswer}
        onTimeout={onTimeout}
      />
    </div>
  );
}
