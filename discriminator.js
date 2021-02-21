;
function returnContact(obj) {
    if (obj.type === 1 /* Email */) {
        return obj.email;
    }
    else if (obj.type === 0 /* Phone */) {
        return obj.phone;
    }
    else {
        return "Enter proper fields";
    }
}
;
console.log(returnContact({ type: 1 /* Email */, email: "abdurauf.isokjonov@gmail.com" }));
console.log(returnContact({ type: 0 /* Phone */, phone: 821053551997 }));
var foo = { kind: "A", type: "X", abc: "Hello, First!" };
if (foo.kind === 'A' && foo.type === 'X') {
    console.log(foo.abc);
}
;
function orderFunc(obj) {
    if (obj.state.kind === 'new') {
        console.log('Thank you for you purchase!\nYour order has successfully been placed!');
    }
    else if (obj.state.kind === 'paid') {
        console.log('Payment was successfully completed!');
    }
    else if (obj.state.kind === 'sent') {
        console.log('Your order on its way!');
    }
    else if (obj.state.kind === 'delivered') {
        console.log('Your order was delivered!');
    }
    else {
        console.log('Error!');
    }
}
;
var o1 = {
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
function reducer(prevState, action) {
    switch (prevState.type) {
        case 'loading':
            switch (action.type) {
                case 'dataFetchingSucceeded':
                    return { type: 'withData', data: action.data };
                case 'dataFetchingCancelled':
                    return { type: 'empty' };
                case 'dataFetchingFailed':
                    return { type: 'error', errorMessage: action.errorMessage };
                case 'dataRequested':
                    return prevState;
            }
            ;
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
}
;
function turnstileReducer(prevState, action) {
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
}
;
