import styles from './Cat.module.css';

interface ICatProps {
  emailLength: number;
  emailHasFocus: boolean;
  pwdLength: number;
  pwdHasFocus: boolean;
  // mousePos: IMousePosition | undefined;
}

function getIrisStyle(
  emailLength: number,
  emailHasFocus: boolean,
  pwdLength: number,
  pwdHasFocus: boolean
): React.CSSProperties | undefined {
  // we are moving the eye position dependending on emailLength or pwdLength, from 0 up to 39px
  if (emailHasFocus && emailLength > 0) {
    return {
      bottom: `0`,
      left: `${Math.min(emailLength, 39)}px`,
    };
  }

  if (pwdHasFocus && pwdLength > 0) {
    return {
      bottom: `0`,
      left: `${Math.min(pwdLength, 39)}px`,
    };
  }

  return;
}

export const Cat = ({
  emailLength,
  emailHasFocus,
  pwdLength,
  pwdHasFocus,
}: ICatProps) => {
  const irisStyle = getIrisStyle(
    emailLength,
    emailHasFocus,
    pwdLength,
    pwdHasFocus
  );
  const isTypingPwd = pwdHasFocus && pwdLength > 0;

  return (
    <div className={styles.cat}>
      <div className={styles.top}>
        <div className={styles.ear} />
        <div className={styles.ear} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.whiskers} />
        <div className={styles.face}>
          <div className={`${styles.eye} ${isTypingPwd ? styles.squint : ''}`}>
            <div style={irisStyle} />
          </div>
          <div className={`${styles.eye} ${isTypingPwd ? styles.squint : ''}`}>
            <div style={irisStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};
