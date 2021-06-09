const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'))

app.listen(process.env.PORT || 5000, () => {
    console.log('Server on port 5000');

});