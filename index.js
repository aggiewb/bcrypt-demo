const bcrypt = require('bcrypt');
const saltRound = 10;

const password = 'password';
bcrypt.hash(password, saltRound, (error, hash) => {
    console.log(hash);
    bcrypt.compare(password, hash, (err, isMatch) => {
        console.log(isMatch, "is true");
    });

    bcrypt.compare('passworf', hash, (err, isMatch) => {
        console.log(isMatch, "is false");
    });
});

