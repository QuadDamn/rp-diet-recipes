import React, {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const CustomSnackbar = ({message, severity, isOpen}) => {
    const classes = useStyles();

    const [snackbarSettings, setSnackbarSettings] = useState({
        open: isOpen,
        vertical: 'top',
        horizontal: 'center',
    });

    const {vertical, horizontal} = snackbarSettings;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarSettings({
            ...snackbarSettings,
            open: false
        });
    };

    return (
        <div className={classes.root}>
            <Snackbar
                open={snackbarSettings.open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{vertical, horizontal}}
            >
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default CustomSnackbar;
