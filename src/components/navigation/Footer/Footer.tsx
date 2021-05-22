import React from 'react';
import { HashLink } from 'react-router-hash-link';
import classes from './Footer.module.css';

interface Props {}

const Footer: React.FC<Props> = (props) => {
  const year = new Date().toLocaleDateString(undefined, { year: 'numeric' });
  return (
    <div className={classes.footer}>
      <HashLink to="/conditions#conditions-utilisation">Conditions générales</HashLink>
      <HashLink to="/conditions#mentions-legales">Mentions légales</HashLink>
      <HashLink to="/conditions#copyright">© Copyright {year}</HashLink>
      <HashLink to="/conditions#donnees-personnelles">Données personnelles</HashLink>
    </div>
  );
};

export default Footer;
