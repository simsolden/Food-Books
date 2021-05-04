import { createStyles, makeStyles, TextField, Theme, withStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        width: '52vw',
        marginLeft: '1rem',
      },
    },
  })
);

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#c35d5d',
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: '#c35d5d',
    // },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: '#c35d5d',
    },
    // '& .MuiOutlinedInput-root': {
    //   '&.Mui-focused fieldset': {
    //     borderColor: '#c35d5d',
    //   },
    //   '&:hover fieldset': {
    //     borderColor: '#c35d5d',
    //   },
    // },
  },
})(TextField);