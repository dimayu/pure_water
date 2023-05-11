let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '16px',
    mobileFirst: false,
    container: {
        maxWidth: '1720px',
        fields: '100px'
    },
    breakPoints: {
        lm: {
            width: '1240px',
            fields: '50px'
        },
        md: {
            width: '940px',
            fields: '25px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xs: {
            width: '540px',
            fields: '10px'
        }
    }
};

smartgrid('./src/baseStyles', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
