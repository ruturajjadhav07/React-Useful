import styles from './user.module.css'
import PropTypes from 'prop-types'
function userGreeting(props) {
  return props.isLoggedin ? (
    <h2 className={styles.welcome}>Welcome {props.username}</h2>
  ) : (
    <h1 className={styles.please}>please log in</h1>
  );
}

userGreeting.propTypes = {
    isLoggedin : PropTypes.bool,
    username : PropTypes.string
}

userGreeting.defaultProps = {
    isLoggedin : false,
    username : "Guest"
}
export default userGreeting;
