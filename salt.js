const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

function createSaltedHash(password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const saltedHashPassword = { password: `${ salt }:${ hashedPassword }`}

    console.log(saltedHashPassword);
    return saltedHashPassword;
}

function checkPassword(password, saltedHashPassword) {
    const [ salt, hashedPassword ] = saltedHashPassword.password.split(':');

    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(hashedPassword, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    return (match ? '✅ Passwords Match!' : '❌ Passwords Dont Match!');
}

let password = 'dhruv sujatha';
const saltedHashPassword = createSaltedHash(password);
let password2 = 'dhruv sujatha';
console.log(checkPassword(password2, saltedHashPassword));