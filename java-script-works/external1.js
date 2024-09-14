// this is single line comment 
/* multi line 
comment */


function fnDataType() {
    let myStr = "Hello";
    let myInt = 123;
    let myBoolean = true;


    if (typeof (myStr) === 'string') {
        console.log("myStr Datatype is String");
    }

    console.log(myInt + 1);
    console.log(myInt + myBoolean);

    console.log(myStr + myBoolean);

    console.log(10 * "123");
    console.log("123" * 10);

    console.log(10 / "3a");

    if (10 / "3a" == NaN) {
        console.log("True for NaN");
    } else {
        console.log("False for NaN");
    }
    // second version 

    if (isNaN(10 / "3a")) {
        console.log("True for NaN");
    } else {
        console.log("False for NaN");
    }


}

fnDataType();