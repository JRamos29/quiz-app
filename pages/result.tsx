import styles from '../styles/Result.module.css';
import { useRouter } from 'next/router';
import Statistics from '../components/Statistics';
import Button from '../components/Button';

export default function Result() {
  const router = useRouter();

  const totalQuestions = +router.query.totalQuestions;
  const totalRight = +router.query.totalRight;
  const percentage = Math.round((totalRight / totalQuestions) * 100);

  return (
    <div className={styles.result}>
      <h1>Final Score</h1>
      <div style={{ display: 'flex' }}>
        <Statistics text="Questions" value={totalQuestions} />
        <Statistics text="Right Answers" value={totalRight} bgColor="#9cd2a4" />
        <Statistics
          text="Percentage"
          value={`${percentage}%`}
          bgColor="#de6a33"
        />
      </div>
      <Button href="/" text="Try Again" />
    </div>
  );
}
