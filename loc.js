const fs = require('fs');
const path = require('path');

const getAllFiles = function(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

const countLines = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent.split('\n').length;
};

const files = getAllFiles('./src');
let totalLines = 0;

files.forEach((file) => {
  if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css')) {
    const lines = countLines(file);
    totalLines += lines;
    console.log(`${file}: ${lines} lines`);
  }
});

console.log(`\nTotal lines of code: ${totalLines}`);
