import { createMuiTheme } from '@material-ui/core';

export const materialTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      textPrimary: {
        color: '#cb6b6b',
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#cb6b6b',
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: 'transparent',
        color: '#cb6b6b',
      },
    },
    MuiPickersDay: {
      day: {
        color: '#cb6b6b',
      },
      daySelected: {
        backgroundColor: '#cb6b6b',
        '&:hover': {
          backgroundColor: '#a33535',
        },
      },
      dayDisabled: {
        color: '#cb6b6b',
      },
      current: {
        color: '#cb6b6b',
      },
    },
    MuiPickersYear: {
      root: {
        '&:focus': {
          color: '#cb6b6b',
        },
      },
      year: {
        color: '#cb6b6b',
      },
      yearSelected: {
        backgroundColor: 'white',
        color: '#cb6b6b',
        '&:focus': {
          color: '#cb6b6b',
        },
      },
      yearDisabled: {
        color: '#cb6b6b',
      },
      current: {
        color: '#cb6b6b',
      },
    },
    MuiPickersMonth: {
      root: {
        '&:focus': {
          color: '#cb6b6b',
        },
      },
      month: {
        color: '#cb6b6b',
      },
      monthSelected: {
        backgroundColor: 'white',
        color: '#cb6b6b',
        '&:focus': {
          color: '#cb6b6b',
        },
      },
      monthDisabled: {
        color: '#cb6b6b',
      },
      current: {
        color: '#cb6b6b',
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: '#cb6b6b',
      },
    },
  },
});
