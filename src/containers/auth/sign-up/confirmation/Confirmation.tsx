import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRematchDispatch } from '../../../../hooks/useRematchDispatch';
import { Dispatch } from '../../../../store';
import classes from '../welcome/Welcome.module.css';

interface Props {}

const Confirmation: React.FC<Props> = (props) => {
  const verifyEmail = useRematchDispatch((dispatch: Dispatch) => dispatch.user.verifyEmail);
  const token = useLocation().pathname.split('/')[2];
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    verify();
  });

  const verify = useCallback(async () => {
    setVerified(await verifyEmail(token));
  }, [verifyEmail, token]);

  return (
    <div className={classes.container}>
      <div className={classes.welcomeWindow}>
        {verified ? (
          'Compte vérifié avec succès, vous pouvez désormais vous connecter via la page connexion'
        ) : (
          <p>
            Une erreur est survenue lors de la vérification de votre compte. Vérifiez que le lien est correct, si le
            problème persiste, contactez nous à l'adresse <a href="mailto:<info@foodbooks.fr>">info@foodbooks.fr</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
