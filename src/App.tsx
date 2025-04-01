import { useState } from 'react';
import './App.css';
import { Cat } from './Cat/Cat';

function App() {
  const [email, setEmail] = useState('');
  const [emailHasFocus, setEmailHasFocus] = useState(false);
  const [pwd, setPwd] = useState('');
  const [pwdHasFocus, setPwdHasFocus] = useState(false);

  return (
    <>
      <h1>Nice login form</h1>
      <div className="cat">
        <Cat
          // mousePos={mousePos}
          emailLength={email.length}
          pwdLength={pwd.length}
          emailHasFocus={emailHasFocus}
          pwdHasFocus={pwdHasFocus}
        />
      </div>
      <div className="formWrapper">
        <form>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            type="email"
            onFocus={() => setEmailHasFocus(true)}
            onBlur={() => setEmailHasFocus(false)}
          />
        </form>
        <form>
          <input
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            placeholder="Enter your password"
            type="password"
            onFocus={() => setPwdHasFocus(true)}
            onBlur={() => setPwdHasFocus(false)}
          />
        </form>
        <button>Log me in!</button>
      </div>
      <p className="about">
        This login screen is inspired by{' '}
        <a href="https://github.com/addyosmani/tunnel-bear-login">
          Tunnel Bear Login Animation by Addy Osmani
        </a>{' '}
        which is based in{' '}
        <a href="https://www.tunnelbear.com/account/login">
          the Tunnel Bear by Kadri Jibraan
        </a>
        .
      </p>
      <p className="about">
        The cat is also inspired by{' '}
        <a href="https://codingartistweb.com/2023/03/cat-css-art/">
          Cat CSS Art by Coding Artist
        </a>
        .
      </p>
      <p className="about">I know. A lot of inspiration here...</p>
    </>
  );
}

export default App;
