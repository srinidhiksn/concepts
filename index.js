const buffer = Buffer.from("SrinidhiS");

// Binary representation
const binaryString = buffer.toString('binary');
console.log("Binary:", binaryString);

// ASCII representation
const asciiString = buffer.toString('ascii');
console.log("ASCII:", asciiString);

// Hexadecimal representation
const hexString = buffer.toString('hex');
console.log("Hexadecimal:", hexString);
