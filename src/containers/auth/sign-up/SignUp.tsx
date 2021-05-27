import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../common';
import { useRematchDispatch } from '../../../hooks/useRematchDispatch';
import TextInput from '../../../components/inputs/text-input/TextInput';
import { UserFactory } from '../../../modules/user/factories/UserFactory';
import UserFormValidator from '../../../modules/user/validators/UserFormValidator';
import { Dispatch, RootState } from '../../../store';
import { DatePicker } from '@material-ui/pickers';
import classes from './SignUp.module.css';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { ThemeProvider } from '@material-ui/core/styles';
import { materialTheme } from '../../../common/datepicker/datePickerTheme';
import { useSelector } from 'react-redux';

interface Props {}

const SignUp: React.FC<Props> = () => {
  const signUp = useRematchDispatch((dispatch: Dispatch) => dispatch.user.signUp);
  const error = useSelector((state: RootState) => state.user.error);

  let [user, setUser] = useState<User>(UserFactory.create());
  let [passwordConf, setPasswordConf] = useState('');
  let [submitted, setSubmitted] = useState(false);

  const SignUp = useCallback(() => {
    signUp(user);
  }, [signUp, user]);

  const handleChange = (fieldName: string, inputValue: string | MaterialUiPickersDate) => {
    let tempUser = { ...user };

    // @ts-ignore
    tempUser[fieldName] = inputValue;
    setUser(tempUser);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (UserFormValidator.validateUser(user, passwordConf)) {
      SignUp();
    }
  };

  return (
    <div className={classes.signUpWindow}>
      <h2 style={{ textAlign: 'center' }}>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.namesFields}>
          <div className={classes.firstname}>
            <TextInput
              error={submitted && user.firstname.length < 2}
              errorMessage="Prénom manquant"
              label="Prénom"
              onChange={(input) => handleChange('firstname', input)}
              type="text"
            />
          </div>
          <TextInput
            error={submitted && user.lastname.length < 2}
            errorMessage="Nom manquant"
            label="Nom"
            onChange={(input) => handleChange('lastname', input)}
            type="text"
          />
        </div>
        <ThemeProvider theme={materialTheme}>
          <DatePicker
            error={submitted && !UserFormValidator.validateBirthdate(user)}
            invalidDateMessage={null}
            fullWidth
            openTo="year"
            views={['year', 'month', 'date']}
            format="dd/MM/yyyy"
            margin="normal"
            label="Date de naissance"
            value={user.birthdate}
            onChange={(input: MaterialUiPickersDate) => handleChange('birthdate', input)}
          />
        </ThemeProvider>
        {submitted && !UserFormValidator.validateBirthdate(user) && (
          <p className={classes.unvalidDate}>Date non valide</p>
        )}
        <TextInput
          error={submitted && user.username.length < 3}
          errorMessage="Pseudo incorrect ou manquant (min 3 lettres.)"
          label="Pseudo"
          onChange={(input) => handleChange('username', input)}
          type="username"
        />
        <TextInput
          error={submitted && (user.email.length < 3 || !user.email.match(/^\S+@\S+\.\S+$/))}
          errorMessage="Email incorrect"
          label="Email"
          onChange={(input) => handleChange('email', input)}
          type="email"
        />
        <TextInput
          error={submitted && user.password.length < 6}
          errorMessage="Mot de passe incorrect ou manquant (min 6 lettres.)"
          label="Mot de passe"
          onChange={(input) => handleChange('password', input)}
          type="password"
        />
        <TextInput
          error={
            submitted && (passwordConf.length < 6 || !UserFormValidator.confirmPassword(user.password, passwordConf))
          }
          errorMessage="Confirmation incorrecte"
          label="Confirmation"
          onChange={setPasswordConf}
          type="password"
        />
        <p style={{ fontSize: '0.8rem' }}>
          En s'inscrivant vous accepter les{' '}
          <Link to="/conditions" target="_blank">
            conditions d'utilisation
          </Link>
        </p>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        <input type="submit" value="Connexion" className={classes.signUpButton} />
      </form>
    </div>
  );
};

export default SignUp;
