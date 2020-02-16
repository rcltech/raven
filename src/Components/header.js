import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const headerStyles = makeStyles({
    root: {
        fontSize: '350%',
        background: '#142850',
        width: "100%",
        backgroundSize: 'cover',
        fontFamily: "'Merienda One', cursive",
        padding: '10px',
        color: 'white',
        width: '100vw', /* Magic here */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const header = () => {
    const classes = headerStyles();
    return <div className={classes.root}>Raven</div> 
}

export default header;

