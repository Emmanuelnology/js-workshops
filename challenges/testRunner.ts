interface AssertTrueTest {
  name: string,
  compare: any,
  to: any
}

interface AssertRegexTest {
  name: string,
  string: any,
  regex: RegExp
}

export class Suite {
  private total=0;
  private success = 0;
  public showPasses = true;
  public groupName;
  constructor(public name){}

  assertEqual(test:AssertTrueTest){  
    if(JSON.stringify(test.compare) === JSON.stringify(test.to)){
      this.success++;
      if(this.showPasses) colorLog(this.groupName + ": / " + test.name,'green');  
    }
    else {
      colorLog(this.groupName + ": X " + test.name + "\n" + JSON.stringify(test.compare) + " !== " + JSON.stringify(test.to), 'red');
    }
    this.total++;
  }

  assertRegex(test:AssertRegexTest){  
    if(test.regex.test(test.string)){
      this.success++;
      if(this.showPasses) colorLog(this.groupName + ": / " + test.name,'green');  
    }
    else {
      colorLog(this.groupName + ": X " + test.name + "\n" + test.string + " !== " + test.regex.toString(), 'red');
    }
    this.total++;
  }

  getSummary() {
    console.log("\nRan " + this.success + "/" + this.total + " tests successfully");
  }

} 
  
  function colorLog( message: string, color: "reset" | "red" | "green" | "black" | "yellow" | "blue" | "cyan" | "magenta" | "white") {
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
    console.log(colors[color] + message + colors.reset)
  }