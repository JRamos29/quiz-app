import styles from '../styles/Quiz.module.css';

import QuestionModel from '../model/question';
import Question from './Question';
import Button from './Button';

interface QuizProps {
  question: QuestionModel;
  isLastQuestion: boolean;
  answeredQuestion: (question: QuestionModel) => void;
  goToNextStep: () => void;
}

export default function Quiz(props: QuizProps) {
  function onAnswer(index: number) {
    if (props.question.notAnswered) {
      props.answeredQuestion(props.question.answerWith(index));
    }
  }

  return (
    <div className={styles.quiz}>
      {props.question ? (
        <Question
          value={props.question}
          timeToAnswer={7}
          onAnswer={onAnswer}
          onTimeout={props.goToNextStep}
        />
      ) : (
        false
      )}

      <Button
        onClick={props.goToNextStep}
        text={props.isLastQuestion ? 'Finish Quiz' : 'Next Question'}
      />
    </div>
  );
}
