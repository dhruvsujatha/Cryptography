const { createHash } = require('crypto');

function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let password = '123456';
const hash1 = hash(password);
console.log(hash1);

password = '123456';
const hash2 = hash(password);
console.log(hash2 === hash1 ? '✅ Passwords Match!' : '❌ Passwords Dont Match!');