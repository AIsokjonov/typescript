// function declaration
function printHello() {
  console.log('Function Declaration');
};
printHello();

const greet = function() {
  console.log('Function expression!');
};
greet();

// functions inside class
class myPrivateFunctions {
  constructor() {
    this.privateFunc();
  };

  // private function
  private privateFunc(): void {
    console.log("From the private function!");
  };

  // protected function
  private a1: number = 123;
  protected b2(): void {
    console.log(this.a1);
  };

  // public functions
  public publicFunc(): void {
    console.log("this is public function!");
  };
};

class classB extends myPrivateFunctions {
  private b1: number = 52;
  protected b3(): void {
    super.b2();
  };
};

const c = new myPrivateFunctions();
c.publicFunc();
const b1 = new classB();