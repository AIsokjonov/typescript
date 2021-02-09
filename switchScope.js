function switchFunction(a) {
    switch (a) {
        case 1: {
            var var1 = "test";
            console.log(var1);
        }
        case 2: {
            var var2 = "test2";
            console.log(var2);
            break;
        }
        case 3: {
            var var3 = "test3";
            console.log(var3);
            break;
        }
        default: {
            console.log("default");
        }
    }
}
switchFunction(1);
