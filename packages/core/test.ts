export function test() {
  console.log("test");
}

interface ITestClass {
  dev: string;
  hello(): void;
}

export class TestClass implements ITestClass {
  #hello: string = "hello";
  public dev: string = "dev";

  hello(): void {
    console.log(this.#hello);
  }
}
