let browser = "brave"

switch (browser) {
  case "chrome":
    console.log(`>> Running chrome browser...`);
 //   break;
  case "firefox":
    console.log(`>> Running firefox browser...`);
    break;
  case "edge":
    console.log(`>> Running edge browser...`);
  default:
    console.log(`No valid browser: ${browser} is provided`);
}

// ctrl+k+f = formatter