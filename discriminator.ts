const enum ContactType { Phone, Email };
type Contact =
  | { type: ContactType.Email, email: string }
  | { type: ContactType.Phone, phone: number };

function returnContact(obj: Contact): string | number {
  if(obj.type === ContactType.Email) {
    return obj.email;
  } else if(obj.type === ContactType.Phone) {
    return obj.phone;
  } else {
    return "Enter proper fields";
  }
};

console.log(returnContact({ type: ContactType.Email, email: "abdurauf.isokjonov@gmail.com" }));
console.log(returnContact({ type: ContactType.Phone, phone: 821053551997 }));

// multiple discriminating properties
type Foo =
  | { kind: "A", type: "X", abc: string }
  | { kind: "A", type: "Y", xyz: string }
  | { kind: "B", type: "X", rty: string };

let foo: Foo = { kind: "A", type: "X", abc: "Hello, First!" };

if (foo.kind === 'A' && foo.type === 'X') {
  console.log(foo.abc);
};

// discriminated unions
type Tree =
  | { type: 'empty' }
  | { type: 'leaf', value: number }
  | { type: 'node', left: Tree, right: Tree };


// challenge
type Customer = {
  name: string;
  contactInfo: ContactInfo;
};

type ContactInfo = 
  | { kind: 'emailOnly'; email: string }
  | { kind: 'postalOnly'; address: string }
  | { kind: 'emailAndPost'; email: string; address: string };

type PaidOrderData = { paymentDate: Date; amount: number };
type SentOrderData = { sendingDate: Date };
type DeliveredOrderData = { deliveryDate: Date };

type OrderState =
  | { kind: 'new' }
  | { kind: 'paid'; paidData: PaidOrderData }
  | { kind: 'sent'; paidData: PaidOrderData; sentData: SentOrderData }
  | {
      kind: 'delivered';
      data: PaidOrderData;
      sentData: SentOrderData;
      deliveredData: DeliveredOrderData;
    };

type Order = {
  customer: Customer;
  state: OrderState;
  productName: string;
  price: number;
  quantity: number;
};

function orderFunc(obj: Order): void {
  if(obj.state.kind === 'new') {
    console.log('Thank you for you purchase!\nYour order has successfully been placed!');
  } else if(obj.state.kind === 'paid') {
    console.log('Payment was successfully completed!');
  } else if(obj.state.kind === 'sent') {
    console.log('Your order on its way!');
  } else if(obj.state.kind === 'delivered') {
    console.log('Your order was delivered!');
  } else {
    console.log('Error!');
  }
};

let o1: Order = { 
  customer: { 
    name: "James",
    contactInfo: {
      kind: 'emailOnly',
      email: 'abdurauf.isokjonov@gmail.com'
    }
  },
  state: {
    kind: 'paid',
    paidData: {
      paymentDate: new Date,
      amount: 224
    }
  },
  productName: 'Apple M1 Macbook pro 2021',
  price: 2499,
  quantity: 1
};

orderFunc(o1);

// "state machines" - data fetching from backend
type State =
  | { type: 'empty' }
  | { type: 'loading' }
  | { type: 'withData', data: string[] }
  | { type: 'error', errorMessage: string };

type Action =
  | { type: 'dataRequested' }
  | { type: 'dataFetchingSucceeded', data: string[] }
  | { type: 'dataFetchingFailed', errorMessage: string }
  | { type: 'dataFetchingCancelled' };

function reducer(prevState: State, action: Action): State {
  switch(prevState.type) {
    case 'loading':
      switch (action.type) {
        case 'dataFetchingSucceeded':
          return { type: 'withData', data: action.data };
        case 'dataFetchingCancelled':
          return { type: 'empty' }
        case 'dataFetchingFailed':
          return { type: 'error', errorMessage: action.errorMessage };
        case 'dataRequested':
          return prevState;
      };
    case 'empty':
    case 'error':
    case 'withData':
      switch (action.type) {
        case 'dataRequested':
          return { type: 'loading' };
        case 'dataFetchingCancelled':
        case 'dataFetchingFailed':
        case 'dataFetchingSucceeded':
      }
  }
};

// implement "turnstile" state machine
type turnstileState =
  | { type: 'empty' }
  | { type: 'loading' }
  | { type: 'dataPartiallyLoaded', data: string[] }
  | { type: 'withData', data: string[] }
  | { type: 'error', errorMessage: string };

type turnstileAction =
  | { type: 'dataRequested' }
  | { type: 'dataFetchingInProgress', data: string[] }
  | { type: 'dataFetchingSucceeded', data: string[] }
  | { type: 'dataFetchingFailed', errorMessage: string }
  | { type: 'dataFetchingCancelled' };

function turnstileReducer(prevState: turnstileState, action: turnstileAction): turnstileState {
  switch (prevState.type) {
    case 'dataPartiallyLoaded':
    case 'loading':
      switch (action.type) {
        case 'dataFetchingInProgress':
          return { type: 'dataPartiallyLoaded', data: action.data };
        case 'dataFetchingSucceeded':
          return { type: 'withData', data: action.data };
        case 'dataFetchingCancelled':
          return { type: 'empty' };
        case 'dataFetchingFailed':
          return { type: 'error', errorMessage: action.errorMessage };
        case 'dataRequested':
          return prevState;
      }
    case 'empty':
    case 'error':
    case 'withData':
      switch (action.type) {
        case 'dataRequested':
          return { type: 'loading' };
        case 'dataFetchingCancelled':
        case 'dataFetchingFailed':
        case 'dataFetchingSucceeded':
        case 'dataFetchingInProgress':
          return prevState;
      }
  }
};