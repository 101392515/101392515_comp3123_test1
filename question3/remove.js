const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

// Remove all files from the Logs directory, if exists
if (fs.existsSync(logsDir)) {
  const files = fs.readdirSync(logsDir);
  
  files.forEach(file => {
    fs.unlinkSync(path.join(logsDir, file));
    console.log(`delete files...${file}`);
  });

  // Remove the Logs directory
  fs.rmdirSync(logsDir);
}
