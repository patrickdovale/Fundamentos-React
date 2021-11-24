import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar(props) {


    function snackbarClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        props.setSnackBarConfig({ snackbarOpen: false, snackbarMsg: props.snackBarConfig.snackbarMsg,severity: props.snackBarConfig.severity})
    };


    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={props.snackBarConfig.snackbarOpen}
            autoHideDuration={3000}
            onClose={snackbarClose}
            action={[
                <IconButton key='close'
                    arial-label="Close"
                    onClick={snackbarClose}>
                    X
                </IconButton>
            ]}
        >
            <Alert onClose={snackbarClose} severity={props.snackBarConfig.severity} sx={{ width: '100%' }}>
                {props.snackBarConfig.snackbarMsg}
            </Alert>
        </Snackbar>
    )
}
