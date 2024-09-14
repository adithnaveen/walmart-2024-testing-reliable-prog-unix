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
        const mateListDiv = document.getElementById('mydiv');

        // Iterate through each mate
        myMates.forEach(function (mate) {
            // Create a new div element
            const myDiv = document.createElement('div');
            myDiv.classList.add("mate-class");

            // Set the inner HTML of the div with the mate's name
            myDiv.innerHTML = `<strong>First Name:</strong> ${mate.firstName} <br> <strong>Last Name:</strong> ${mate.lastName}`;

            // Add some margin for spacing
            myDiv.style.marginBottom = '5px';

            // Append the new div to the main div
            mateListDiv.appendChild(myDiv);
        });
    }
}
