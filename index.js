#!/usr/bin/env node

const { spawn } = require('child_process');

const targetUrl = process.env.SAIREN_SSE_URL || 'https://sairen.omniapps.ca/sse';

const child = spawn('npx', ['-y', 'mcp-remote', targetUrl], {
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
