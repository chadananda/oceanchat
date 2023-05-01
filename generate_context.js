import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Generate context
function generateContext() {
  const contextFilePath = 'context.txt';

  // Get the current working directory (PWD)
  const pwd = process.cwd();

  // Generate the file tree using the `tree` command
  const fileTree = execSync(`tree "${pwd}" -I "node_modules|dist|build|context.txt|*.log"`).toString();

  // Write the context information to the file
  fs.writeFileSync(contextFilePath, "The following information is context information about this project for the purpose of informing AI about the project. It includes a file tree of the project, the contents of certain files, and a project description and status.\n\n");

  fs.appendFileSync(contextFilePath, `--- CURRENT WORKING DIRECTORY: ${pwd} ---\n\n`);
  fs.appendFileSync(contextFilePath, '--- FILE TREE ---\n');
  fs.appendFileSync(contextFilePath, fileTree);

  // Define the files to include the contents
  const files = [
    'svelte.config.js',
    'vite.config.js',
    'postcss.config.cjs',
    'package.json',
    'project_description.md',
    'project_status.md',
  ];

  for (const file of files) {
    fs.appendFileSync(contextFilePath, `\n\n--- ${file.toUpperCase()} ---\n`);
    fs.appendFileSync(contextFilePath, fs.readFileSync(path.join(pwd, file)));
  }
}

// Run the script to generate the context
generateContext();
