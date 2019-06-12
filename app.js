// from data.js
var tableData = data;

// Select the table body
var tbody = d3.select("tbody");

// Check to see if Data is showing up and linked properly
console.log(tableData);

// Looping through the data and appending it to website
data.forEach((ufoSighting) => {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Selecting the filter button
var filterBtn = d3.select("#filter-btn");

// Creating a function for filter button to filter desired date
filterBtn.on("click", function() {
    
    // Clearing the data in the table so it only shows the desired filter data
    
    document.getElementById("clear-data").innerHTML = "";

    // Preventing the page from refreshing
    d3.event.preventDefault();

    // Selecting the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Getting the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufoDate => ufoDate.datetime === inputValue);

    console.log(filteredData);

    // Creating a loop so filtered date shows
    filteredData.forEach((date) => {
        var row = tbody.append("tr");
        Object.entries(date).forEach(([key, value]) => {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});