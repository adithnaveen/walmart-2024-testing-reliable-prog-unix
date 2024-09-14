// to show working of div with id 

function fnFetchedValue() {

    let myMates = [
        { firstName: "Atul", lastName: "Kumar" },
        { firstName: "Diwya", lastName: "Sinha" },
        { firstName: "Lingraj", lastName: "Sembelle" },
        { firstName: "Rakesh", lastName: "Kumar" },
        { firstName: "Sudharsan", lastName: "TCM" },
    ];

    console.log(myMates);

    if (myMates.length === 0) {
        document.getElementById("mydiv").innerHTML = "No Records"
    } else {
        document.getElementById("mydiv").innerHTML = myMates[0].firstName + " | " + myMates[0].lastName;
    }
}
