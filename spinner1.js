let delay = 0; 

setTimeout(() => {
  process.stdout.write('\r|   ');
}, delay += 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, delay += 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, delay += 200);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, delay += 200);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, delay += 200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, delay += 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, delay += 200);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, delay += 200);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, delay += 200);

setTimeout(() => {
  console.log("");
}, delay += 200);
