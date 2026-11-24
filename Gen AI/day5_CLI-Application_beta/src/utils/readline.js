import { stdin } from "process";
import rl from "readline/promises";

const readline = new rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default readline;
