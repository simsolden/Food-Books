import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRematchDispatch } from '../../../hooks/useRematchDispatch';
import TextInput from '../../../components/inputs/text-input/TextInput';
import UserFormValidator from '../../../modules/user/validators/UserFormValidator';
import { Dispatch, RootState } from '../../../store';
import classes from './Login.module.css';

interface Props {}

const Login: React.FC<Props> = (props) => {
  const { authenticate } = useRematchDispatch((dispatch: Dispatch) => ({
    authenticate: dispatch.user.authenticate,
  }));

  const error = useSelector((state: RootState) => state.user.error);

  let [credentials, setCredentials] = useState({ email: '', password: '' });
  let [submitted, setSubmitted] = useState(false);

  const login = useCallback(() => {
    authenticate(credentials);
  }, [authenticate, credentials]);

  const handleChange = (fieldName: string, inputValue: string) => {
    let tempCredentials = { ...credentials };
    // @ts-ignore
    tempCredentials[fieldName] = inputValue;
    setCredentials(tempCredentials);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (UserFormValidator.validateCredentials(credentials)) {
      login();
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.loginWindow}>
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <TextInput
            error={submitted && (credentials.email.length < 3 || !credentials.email.match(/^\S+@\S+\.\S+$/))}
            errorMessage="Email incorrect"
            label="Email"
            onChange={(input) => handleChange('email', input)}
            type="email"
          />
          <TextInput
            error={submitted && credentials.password.length < 6}
            errorMessage="Mot de passe incorrect"
            label="Mot de passe"
            onChange={(input) => handleChange('password', input)}
            type="password"
          />
          {error && <p style={{ color: 'red', marginBottom: '-1rem' }}>{error}</p>}
          <input type="submit" value="Connexion" className={classes.loginButton} />
        </form>
        <p>
          Pas encore inscrit ? <Link to="/">Créer un compte</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
