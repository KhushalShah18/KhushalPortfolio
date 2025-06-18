#!/usr/bin/env node

// Simple script to start Vite dev server for static portfolio
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Start Vite dev server
const vite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  cwd: path.join(__dirname, 'client'),
  stdio: 'inherit'
});

vite.on('close', (code) => {
  console.log(`Vite dev server exited with code ${code}`);
  process.exit(code);
});

vite.on('error', (err) => {
  console.error('Failed to start Vite dev server:', err);
  process.exit(1);
});