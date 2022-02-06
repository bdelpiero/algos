import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({
  input,
  output,
});

console.log("\n", "Type 'exit' to stop the program", "\n");

export const promptRevursively = (
  fn: Function,
  propmptMsg: string = "Input: ",
  errorMsg: string = "Please enter a valid type"
) => {
  rl.question(`${propmptMsg}`, function (arg) {
    if (arg == "exit") return rl.close();

    const n = +arg;

    if (Number.isInteger(n)) console.log(`Solution: ${fn(n)}`);
    else console.log(`${errorMsg}`);
    promptRevursively(fn, propmptMsg, errorMsg);
  });
};
