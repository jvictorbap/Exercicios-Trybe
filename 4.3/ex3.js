let n = 5;
let asterisco = "";
let blanks = "";

for (let i = 0; i < n; i += 1) {
    asterisco += '*';
    blanks = "";
    for (index = n; index > asterisco.length; index -= 1) {
        console.log(asterisco.length);
        blanks += "-";
      }
    console.log(blanks + asterisco);
}