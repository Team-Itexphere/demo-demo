import {ALERT_TYPES} from '../../../shared/enums/alertType.enum';
import {FEEDBACK_LOGIN} from './feedback.const';

/**
 * * sign in validation
 * @param email
 * @param password
 */
export const signInValidation = (email: string, password: string, ref: any) => {
  //const { ref } = useAlert();
  if (!email && !password) {
    ref.current.alertWithType(
      ALERT_TYPES.ERROR,
      FEEDBACK_LOGIN.emptyEmailPassword.header,
      FEEDBACK_LOGIN.emptyEmailPassword.body,
    );
  } else if (!isValidEmail(email)) {
    ref.current.alertWithType(
      ALERT_TYPES.ERROR,
      FEEDBACK_LOGIN.invalidEmailAddress.header,
      FEEDBACK_LOGIN.invalidEmailAddress.body,
    );
  } else if (!email) {
    ref.current.alertWithType(
      ALERT_TYPES.ERROR,
      FEEDBACK_LOGIN.emptyEmail.header,
      FEEDBACK_LOGIN.emptyEmail.body,
    );
  } else if (!password) {
    ref.current.alertWithType(
      ALERT_TYPES.ERROR,
      FEEDBACK_LOGIN.emptyPassword.header,
      FEEDBACK_LOGIN.emptyPassword.body,
    );
  }
  return email && password && isValidEmail(email);
};

function isValidEmail(email = '') {
  if (email && email !== '') {
    const regex = /^\w+([\]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }
  return false;
}
