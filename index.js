import "dotenv/config";

const cowsay = await import('cowsay');


console.log(cowsay.say({
    text : `My name is ${process.env.NAME}, I am at ${process.env.CAMPUS}`,
    // text: "toto",
    e : "oO",
    T : "U "
}));