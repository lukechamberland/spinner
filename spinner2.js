const result = "|/-\\|/-\\|";

let i = 0;

const newTimeout = () => setTimeout(() => {
  process.stdout.write(`\r${result[i++]}    `);
  if (i < result.length) newTimeout();
  if (i === result.length) process.stdout.write('\n');
}, 200);

newTimeout();