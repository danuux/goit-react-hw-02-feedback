import styles from './Notification.module.css';
import PropTypes from 'prop-types';

function CustomNotification({ message }) {
  return <p className={styles.notificationText}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CustomNotification;
