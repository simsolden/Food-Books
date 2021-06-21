import React from 'react';
import classes from './Welcome.module.css';

interface Props {}

const Welcome: React.FC<Props> = () => {
  return (
    <div className={classes.container}>
      <div className={classes.welcomeWindow}>
        <h2>Bienvenue dans l'équipe Food Books, enfin presque...</h2>
        <p>
          Vous êtes presque à la fin de votre inscription, la dernière étape est maintenant de vérifier votre compte via
          l'email que nous avons envoyez à l'adresse email fournie. Si vous ne la voyez pas n'hésitez pas à consulter
          vos messages indésirables, sinon vous pouvez nous contacter à l'adresse{' '}
          <a href="mailto: info@foodboods.fr">info@foodboods.fr</a>. À bientôt !
        </p>
      </div>
    </div>
  );
};

export default Welcome;
