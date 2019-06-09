// from data.js
var tableData = data;
console.log(data.length);

//create variable to hold selected tag
var tbody = d3.select("tbody")

//loop through each object in the list
data.forEach(function(UFOsighting) {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
        //console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
      });
    });
   
   
    //select the submit button
   
     var submit=d3.select("#filter-btn");
     submit.on("click", function() {
         //prevent the page from refreshing
         d3.event.preventDefault();
        //select the input element and get raw HTML node
        var inputElement =d3.select("#datetime");
        //get value property of the input element
        var inputValue=inputElement.property("value");
        console.log(inputValue);
        //console.log(data);
       
        var filteredUFOData=data.filter(entry => entry.datetime === inputValue);
        //console.log(filteredUFOData);
   
        filteredUFOData.forEach(function(filteredtableentries){
           //console.log(UFOReport);
           row = tbody.append("tr");
           Object.entries(filteredtableentries).forEach(function([key, value]) {
               console.log(key, value);
               // Append a cell to the row for each value
               // in the weather report object
           cell = row.append("td");
           cell.text(value);
        })
        })
   
   
       
   
   
     })