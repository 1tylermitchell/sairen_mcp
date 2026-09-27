#!/usr/bin/env node

const { spawn } = require('child_process');

const arg = process.argv[2];

if (arg === '--help' || arg === '-h' || arg === 'help') {
  console.log(`
Project Sairen MCP Remote Bridge (v1.6.0)
========================================
Usage:
  npx sairen-mcp [domain]

Available Domain Profiles (prevents LLM context bloat):
  global       https://sairen.omniapps.ca/sse (All 43 tools + progressive discovery)
  defi         https://sairen.omniapps.ca/sse/defi (DEX, Gas, Escrow, Bridge, Invoicing)
  security     https://sairen.omniapps.ca/sse/security (Firewall, Address Risk, Canary, Proofs)
  agentops     https://sairen.omniapps.ca/sse/agentops (Extract, Time, Patch, Sandboxing, DNS)
  resilience   https://sairen.omniapps.ca/sse/resilience (Idempotency, Throttle, DLQ, Circuit Breaker)

Environment Variables:
  SAIREN_SSE_URL   Override remote SSE endpoint directly
`);
  process.exit(0);
}

let targetPath = '/sse';
if (arg && !arg.startsWith('-')) {
  const cleanDomain = arg.toLowerCase().replace(/^\/+/, '');
  if (cleanDomain !== 'global') {
    targetPath = `/sse/${cleanDomain}`;
  }
}

const targetUrl = process.env.SAIREN_SSE_URL || `https://sairen.omniapps.ca${targetPath}`;

const child = spawn('npx', ['-y', 'mcp-remote', targetUrl], {
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

