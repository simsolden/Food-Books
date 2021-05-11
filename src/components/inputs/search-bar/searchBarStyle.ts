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
    '& label.Mui-focused': {
      color: '#c35d5d',
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: '#c35d5d',
    },
  },
})(TextField);
