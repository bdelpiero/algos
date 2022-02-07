import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({
  input,
  output,
});

console.log("\n", "Type 'exit' to stop the program", "\n");

function areAllArgs(args: number[]) {
  return args.every(n => Number.isInteger(n));
}

export const promptRevursively = (
  fn: Function,
  propmptMsg: string = "Input: ",
  errorMsg: string = "Please enter a valid type"
) => {
  rl.question(`${propmptMsg}`, function (arg) {
    if (arg == "exit") return rl.close();
    const processedArgs = arg.split(" ").map(arg => +arg);

    if (areAllArgs(processedArgs)) {
      console.log(`Solution: ${fn(...processedArgs)}`);
    } else {
      console.log(`${errorMsg}`);
    }
    promptRevursively(fn, propmptMsg, errorMsg);
  });
};
