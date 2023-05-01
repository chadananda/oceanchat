// generate_context.js

// dumps important information into a context.txt file for AIs to read in order to understand the project

const fs = require('fs');
const path = require('path');

// Function to recursively scan a directory for files matching a pattern
function scanDirectory(directory, pattern, fileList = []) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      scanDirectory(filePath, pattern, fileList);
    } else if (file.match(pattern)) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

// Generate context
function generateContext() {
  const contextFilePath = path.join(__dirname, 'context.txt');
  const fileTree = scanDirectory(__dirname, '*.config.js');

  fs.writeFileSync(contextFilePath, '--- FILE TREE ---\n');
  fs.appendFileSync(contextFilePath, fs.readFileSync(path.join(__dirname, 'tree.txt')));

  fs.appendFileSync(contextFilePath, '\n\n--- PACKAGE.JSON ---\n');
  fs.appendFileSync(contextFilePath, fs.readFileSync(path.join(__dirname, 'package.json')));

  fs.appendFileSync(contextFilePath, '\n\n--- PROJECT_DESCRIPTION.MD ---\n');
  fs.appendFileSync(contextFilePath, fs.readFileSync(path.join(__dirname, 'project_description.md')));

  fs.appendFileSync(contextFilePath, '\n\n--- PROJECT_STATUS.MD ---\n');
  fs.appendFileSync(contextFilePath, fs.readFileSync(path.join(__dirname, 'project_status.md')));

  for (const configFile of fileTree) {
    fs.appendFileSync(contextFilePath, `\n\n--- ${path.basename(configFile).toUpperCase()} ---\n`);
    fs.appendFileSync(contextFilePath, fs.readFileSync(configFile));
  }
}

// Run the script to generate the context
generateContext();
