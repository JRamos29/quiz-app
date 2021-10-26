import Head from 'next/head';
import Image from 'next/image';
import Question from '../components/Question';
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question';
import styles from '../styles/Home.module.css';

export default function Home() {
  const testQuestion = new QuestionModel(1, 'How many?', [
    AnswerModel.setWrongAnswer('1'),
    AnswerModel.setWrongAnswer('2'),
    AnswerModel.setWrongAnswer('3'),
    AnswerModel.setRightAnswer('0'),
  ]);
  return <Question value={testQuestion} />;
}
