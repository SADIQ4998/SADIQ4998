let countdown = (num, callback) => {
  if(num > 0) {
      console.log(num);
      setTimeout(() => {
          countdown(num - 1, callback);
      }, 1000);
  } else {
      callback();
  }
}

countdown(24, () => {
  console.log("happy new year 2024");
});
