const birthdayInput = document.querySelector("#birthday");
const luckyNumInput = document.querySelector("#lucky-num");
const checkBtn = document.querySelector(".btn");
const textAreaInput = document.querySelector("#output");

const calculateLuck = () => {
  let dob = birthdayInput.value;
  let luckyNum = luckyNumInput.value;

  const total = calculateSum(dob);

  const result = total % luckyNum;

  if (result === 0) {
    textAreaInput.innerHTML = "You are lucky";
  } else {
    textAreaInput.innerHTML = "You are not lucky";
  }
};

const calculateSum = (dob) => {
  let sum = 0;
  dob = dob.replaceAll("-", "");
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }

  return sum;
};


checkBtn.addEventListener("click", calculateLuck);