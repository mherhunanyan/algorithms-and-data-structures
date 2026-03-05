const sumTwoNumbers2 = (num1, num2) => {
  const longNumLength = Math.max(num1.length, num2.length);
  const sum = [];
  let savedNum = 0;

  for (let i = 0; i < longNumLength; ++i) {
    let currSum =
      (+num1[num1.length - i - 1] || 0) + (+num2[num2.length - i - 1] || 0);

    if (savedNum) {
      currSum += savedNum;
      savedNum = 0;
    }

    if (currSum > 9) {
      sum.push(currSum - 10);
      savedNum = 1;
    } else {
      sum.push(currSum);
    }
  }

  if (savedNum) sum.push(savedNum);

  return sum.reverse().join("");
};
