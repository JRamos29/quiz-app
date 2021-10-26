import styles from '../styles/Question.module.css';
import QuestionModel from '../model/question';
import Statement from './Statement';
import Answer from './Answer';

interface QuestionProps {
  value: QuestionModel;
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  function renderAnswers() {
    return question.answers.map((answer, i) => {
      return (
        <Answer value={answer} index={i} option="A" optionColor="#f2c866" />
      );
    });
  }

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      {renderAnswers()}
    </div>
  );
}
