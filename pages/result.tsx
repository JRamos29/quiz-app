import styles from '../styles/Result.module.css';
import { useRouter } from 'next/router';

export default function result() {
  const router = useRouter();

  const totalQuestions = +router.query.totalQuestions;
  const totalRight = +router.query.totalRight;
  const percentage = Math.round((totalRight / totalQuestions) * 100);

  return (
    <div className={styles.result}>
      <h1>Final Score</h1>
      <div>{totalQuestions}</div>
      <div>{totalRight}</div>
      <div>{`${percentage}%`}</div>
    </div>
  );
}
