// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package

// Your code here

const jwt = require('jsonwebtoken');

// Define variables - DO NOT MODIFY

let token;
let payload;

// 1. Sign (create) a JWT containing your email address
// DO NOT MODIFY! Re-assign the token variable below.

// Your code here

// token = jwt.sign(payload, secret, options);

token = jwt.sign(
    { email: "john.wick@gmail.com" },
    process.env.SECRET_KEY,
    { expiresIn: '7h' }
);

// See the JWT in the console - DO NOT MODIFY
console.log('JWT:', token);

// 2. Decode a JWT Payload

// DO NOT MODIFY! Re-assign the payload variable below.

// Your code here

payload = jwt.decode(token);

// See the decoded payload in the console - DO NOT MODIFY
console.log('Payload:', payload);

// 3. Verify a JWT

// DO NOT MODIFY! Re-assign the verifiedPayload variable below.

// Your code here

const verifiedPayload = jwt.verify(token, process.env.NOT_THE_TOKEN);

// See the verified payload in the console - DO NOT MODIFY
console.log('Verified Payload:', verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// Your code here

try {
    payload = jtw.verify(token, process.env.NOT_THE_TOKEN);
    console.log('Verified Payload:', payload)
} catch (err) {
    console.error(err)
}

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

// Your code here
setTimeout(() => {
    try {
        payload = jtw.verify(token, process.env.NOT_THE_TOKEN);
        console.log('Verified Payload:', payload)
    } catch (err) {
        console.error(err)
    }
}, 2000);
