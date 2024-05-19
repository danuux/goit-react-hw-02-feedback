import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.head}>Statistics</h3>
        <ul className={styles.list}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li> Positive feedback: {positivePercentage}%</li>
        </ul>
      </div>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
