#!/usr/bin/env node

const exec = require("child_process").execSync;
const branchName = exec("git rev-parse --abbrev-ref HEAD").toString().trim();

if (!branchName.startsWith("features/")) {
  console.error(
    `Error: Branch name must start with "features/". Current branch name: ${branchName}`
  );
  process.exit(1);
}
