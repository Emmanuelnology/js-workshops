let total = 0;
let success = 0;
let suiteName="";
let showPasses=false;

interface Test {
  name: string,
  compare: any,
  to: any
}

export function setSuiteName(name:string) {
  suiteName=name;
}

export function assertEqual(test:Test){  
  if(JSON.stringify(test.compare) === JSON.stringify(test.to)){
    success++;
    if(showPasses) log("/: " + test.name,'green');  
  }
  else {
    log("X: " + test.name + "\n" + JSON.stringify(test.compare) + " !== " + JSON.stringify(test.to), 'red');
  }
  total++;
}
  
export function getSummary() {
    console.log("\nRan " + success + "/" + total + " tests successfully");
  }
  
  function log( message: string, color: "reset" | "red" | "green" | "black" | "yellow" | "blue" | "cyan" | "magenta" | "white") {
    let colors = {
      reset: '\x1b[0m',
      black: "\x1b[30m",
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      magenta: "\x1b[35m",
      cyan: "\x1b[36m",
      white: "\x1b[37m"
    };
    console.log(colors[color] + suiteName + ": " + message + colors.reset)
  }