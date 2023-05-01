import fs from 'fs';
import path from 'path';

// Function to recursively scan a directory for files matching a pattern
function scanDirectory(directory, pattern, fileList = []) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      scanDirectory(filePath, pattern, fileList);
    } else if (pattern.test(file)) {
      fileList.push(filePath);
    }
  }

  return fileList;
}

// Generate context
function generateContext() {
  const scriptUrl = new URL(import.meta.url);
  const projectDir = path.dirname(scriptUrl.pathname);
  const contextFilePath = path.join(projectDir, 'context.txt');
  const fileTree = scanDirectory(projectDir, /\.config\.js$/, []);

  fs.writeFileSync(contextFilePath, '--- FILE TREE ---\n');
  fs.appendFileSync(contextFilePath, fs.readFileSync(path.join(projectDir, 'tree.txt')));

  fs.appendFileSync(contextFilePath, '\n\n--- PACKAGE.JSON ---\n');
  fs.appendFileSync(contextFilePath, fs.readFileSync(path.join(projectDir, 'package.json')));

  fs.appendFileSync(contextFilePath, '\n\n--- PROJECT_DESCRIPTION.MD ---\n');
  fs.appendFileSync(contextFilePath, fs.readFileSync(path.join(projectDir, 'project_description.md')));

  fs.appendFileSync(contextFilePath, '\n\n--- PROJECT_STATUS.MD ---\n');
  fs.appendFileSync(contextFilePath, fs.readFileSync(path.join(projectDir, 'project_status.md')));

  for (const configFile of fileTree) {
    fs.appendFileSync(contextFilePath, `\n\n--- ${path.basename(configFile).toUpperCase()} ---\n`);
    fs.appendFileSync(contextFilePath, fs.readFileSync(configFile));
  }
}

// Run the script to generate the context
generateContext();
