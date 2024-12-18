function showMessage(message: string): void {
  console.log(message);
}

showMessage("hello");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

calc(5, 10);

function customError() {
  throw new Error("Error");
}

customError();
