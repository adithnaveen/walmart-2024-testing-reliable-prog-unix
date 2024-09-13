function fnFirst() {
    console.log("hi you invoded fnFirst");

}


function fnSecond(myname) {
    console.log("Hello " + myname);
}

function fnThird() {
    myarr = ["hi", "hell", "how", "are", "you"];

    for (temp in myarr) {
        console.log(myarr[temp])
    }

}


function fnGetData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(data => console.log(data));
}
