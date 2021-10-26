import { useState, useEffect } from 'react';
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question';
import Quiz from '../components/Quiz';

const mockQuestion = new QuestionModel(1, 'How many?', [
  AnswerModel.setWrongAnswer('1'),
  AnswerModel.setWrongAnswer('2'),
  AnswerModel.setWrongAnswer('3'),
  AnswerModel.setRightAnswer('0'),
]);

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const [questionsIdsList, setQuestionsIdsList] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>(mockQuestion);
  const [rightAnswersList, setRightAnswersList] = useState<number>(0);

  async function loadIdsFromQuestions() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const questionsIdsList = await resp.json();
    setQuestionsIdsList(questionsIdsList);
  }

  async function loadQuestions(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.parseObjectToModel(json);
    setQuestion(newQuestion);
  }

  useEffect(() => {
    loadIdsFromQuestions();
  }, []);

  useEffect(() => {
    questionsIdsList.length > 0 && loadQuestions(questionsIdsList[0]);
  }, [questionsIdsList]);

  function answeredQuestion(question: QuestionModel) {
    setQuestion(question);
    const gotRightAnswer = question.gotRightAnswer;
    setRightAnswersList(rightAnswersList + (gotRightAnswer ? 1 : 0));
  }

  function goToNextStep() {}

  return (
    <Quiz
      question={question}
      isLastQuestion={false}
      answeredQuestion={answeredQuestion}
      goToNextStep={goToNextStep}
    />
  );
}
