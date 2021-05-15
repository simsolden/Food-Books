import { createStyles, makeStyles, TextField, Theme, withStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        width: '100%',
        marginRight: '1rem',
      },
    },
  })
);

export const CssTextField = withStyles({
  root: {
    '& .MuiFilledInput-input': {
      backgroundColor: 'white',
      borderRadius: '0.4rem 0.4rem 0.1rem 0.1rem',
    },
    '& label.Mui-focused': {
      color: '#c35d5d',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: '#c35d5d',
    },
  },
})(TextField);
