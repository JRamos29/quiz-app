import styles from '../styles/Question.module.css';
import QuestionModel from '../model/question';
import Statement from './Statement';
import Answer from './Answer';
import Timer from './Timer';

const options = [
  { value: 'A', color: '#f2c866' },
  { value: 'B', color: '#f266ba' },
  { value: 'C', color: '#85d4f2' },
  { value: 'D', color: '#bce596' },
];

interface QuestionProps {
  value: QuestionModel;
  timeToAnswer?: number;
  onAnswer: (index: number) => void;
  onTimeout: () => void;
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  function renderAnswers() {
    return question.answers.map((answer, i) => {
      return (
        <Answer
          key={`${question.id}-${i}`}
          value={answer}
          index={i}
          option={options[i].value}
          optionBgColor={options[i].color}
          onAnswer={props.onAnswer}
        />
      );
    });
  }

  return (
    <div className={styles.question}>
      <Statement text={question.statement} />
      <Timer
        key={question.id}
        duration={props.timeToAnswer ?? 10}
        onTimeout={props.onTimeout}
      />
      {renderAnswers()}
    </div>
  );
}
