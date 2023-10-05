const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Create a Logs directory, if it does not exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Change to new Logs directory
process.chdir(logsDir);

// Create 10 log files and write some text into the file
for (let i = 0; i <= 9; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This log is ${i}`);
  console.log(fileName);
}
