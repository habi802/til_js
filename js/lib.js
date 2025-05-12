/**
 * 숫자 더하기 기능
 * @param {number} - a
 * @param {number} - b
 * @return {number} - 덧셈 결과
 */
function add(a, b) {
  return a + b;
}

/**
 * 숫자 빼기 기능
 * @param {number} - a
 * @param {number} - b
 * @return {number} - 뺄셈 결과
 */
function minus(a, b) {
  return a - b;
}

/**
 * 숫자 곱하기 기능
 * @param {number} - a
 * @param {number} - b
 * @return {number} - 곱셈 결과
 */
function multi(a, b) {
  return a * b;
}

/**
 * 숫자 나누기 기능
 * @param {number} - a
 * @param {number} - b
 * @return {number} - 나눗셈 결과
 * ----- 호출 예 -----
 * ```javascript
 * let result = divide(5, 4);
 * ```
 */
function divide(a, b) {
  if (b === 0) {
    return alert("분모는 0이 아니어야 합니다.");
  }
  // 데이터 알아내고, 타입 비교하기
  if (typeof a !== "number") {
    return alert("분자는 숫자여야 합니다.");
  }
  return a / b;
}

/**
 * 계산기 기능
 * 계산기 기능은 +, -, *, / 기능이 있습니다.
 * @param {string} symbol +, -, *, / 기호 중 1개 입력
 * @param {number} a 숫자 입력
 * @param {number} b 숫자 입력
 * @returns {number} 결과는 숫자
 *
 * 사용 예)
 * ```javascript
 * const result = calcurator("+", 5, 4);
 * ```
 */
function calcurator(symbol, a, b) {
  if (typeof symbol !== "string") {
    return alert("기호를 입력하세요.");
  }
  let result = 0;

  switch (symbol) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = minus(a, b);
      break;
    case "*":
      result = multi(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
      result = 0;
      return alert("올바른 기호를 입력해 주세요.");
  }

  return result;
}

const resultAdd = add(5, 4);
const resultMinus = minus(5, 4);
const resultMulti = multi(5, 4);
const resultDivide = divide(5, 4);
