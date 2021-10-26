import AnswerModel from '../model/answer';
import styles from '../styles/Answer.module.css';

interface AnswerProps {
  value: AnswerModel;
  index: number;
  option: string;
  optionBgColor: string;
  onAnswer: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;

  return (
    <div className={styles.answer} onClick={() => props.onAnswer(props.index)}>
      <div className={styles.answerContent}>
        <div className={styles.front}>
          <div
            className={styles.option}
            style={{ backgroundColor: props.optionBgColor }}>
            {props.option}
          </div>
          <div className={styles.value}>{answer.value}</div>
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  );
}
