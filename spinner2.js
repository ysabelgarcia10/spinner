let delay = 100; 
spinnerArr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]

for (let i = 0; i < spinnerArr.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinnerArr[i]);
  }, delay += 200)
};

setTimeout(() => {
  console.log("");
}, delay);