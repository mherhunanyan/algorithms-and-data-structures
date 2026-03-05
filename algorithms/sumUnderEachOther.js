const sumTwoNumbers = (num1, num2) => {
  const longNumLength = Math.max(num1.length, num2.length);

  let long;
  let short;

  if (num1.length > num2.length) {
    long = num1.split("");
    short = num2.split("");
  } else {
    long = num2.split("");
    short = num1.split("");
  }

  let keepNumber = false;
  let sum = "";

  for (let i = 0; i < longNumLength; ++i) {
    const hasBottomNum = i < short.length;

    let currSum = hasBottomNum
      ? Number(long[long.length - 1 - i]) + Number(short[short.length - 1 - i])
      : Number(long[long.length - 1 - i]);

    if (keepNumber) {
      currSum += 1;
      keepNumber = false;
    }

    if (currSum < 10) {
      sum = String(currSum) + sum;
    } else {
      sum = String(currSum - 10) + sum;
      keepNumber = true;
    }
  }

  if (keepNumber) return "1" + sum;

  return sum;
};
