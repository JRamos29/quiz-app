import { useState, useEffect } from 'react';
import QuestionModel from '../model/question';
import Quiz from '../components/Quiz';
import { useRouter } from 'next/router';

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const router = useRouter();

  const [questionsIdsList, setQuestionsIdsList] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
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

  function nextQuestionId() {
    const nextIndex = questionsIdsList.indexOf(question.id) + 1;
    return questionsIdsList[nextIndex];
  }

  function goToNextStep() {
    const nextId = nextQuestionId();
    nextId ? goToNextQuestion(nextId) : finishQuiz();
  }

  function goToNextQuestion(nextId: number) {
    loadQuestions(nextId);
  }

  function finishQuiz() {
    router.push({
      pathname: '/result',
      query: {
        totalQuestions: questionsIdsList.length,
        totalRight: rightAnswersList,
      },
    });
  }

  return question ? (
    <Quiz
      question={question}
      isLastQuestion={nextQuestionId() === undefined}
      answeredQuestion={answeredQuestion}
      goToNextStep={goToNextStep}
    />
  ) : (
    false
  );
}
