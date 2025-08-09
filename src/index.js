/*
 * This is the main entry point for the program. It will parse the input for you.
 * You don't need to change this.
 */
function main() {
  const input = process.argv.slice(2);
  if (input.length === 0) {
    throw new Error("no command line arguments passed");
  }
  var output = handle(input[0]);
  console.log(output);
}

/*
 * Use this method to write your solution.
 * Make sure to print out the solution.
 */
function handle(input) {
  const [first, second] = input.split(" ");

  //TODO: implement the logic to handle each input and return the final output at the end of the function.
  console.log("First string:", first);
  console.log("Second string:", second);

  return first;
}

main();
