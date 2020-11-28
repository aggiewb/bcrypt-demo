const bcrypt = require('bcrypt');
const saltRound = 10;

const password = 'password';
bcrypt.hash(password, saltRound, (error, hash) => {
    console.log(hash);
});