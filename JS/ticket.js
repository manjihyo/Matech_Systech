function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
}

function readFormData(){
    var formData = {};
    formData["ticket_title"] = document.getElementById("ticket_title").value
    formData["ticket_body"] = document.getElementById("ticket_body").value
    return formData;


    
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow. insertCell(0);
    cell1.innerHTML = data.ticket_title;
    cell2 = newRow. insertCell(1);
    cell2.innerHTML = data.ticket_body;
    cell2 = newRow. insertCell(2);
    cell2.innerHTML = `<a>Review</a>
                      <a>Delete</a>`;
    
    
}

function onFormSubmit() {
    var formData = readFormData();
    if (validateForm(formData)) {
        insertNewRecord(formData);
        resetForm();
    }
}

function validateForm(data) {
    if (data.ticket_title === "" || data.ticket_body === "") {
        alert("All fields are required.");
        return false;
    }
    return true;
}

function resetForm() {
    document.getElementById("ticket_title").value = "";
    document.getElementById("ticket_body").value = "";
}


function onFormSubmit() {
    var formData = readFormData();
    if (validateForm(formData)) {
        saveToLocalStorage(formData);
        alert("Ticket submitted successfully!"); 
    }
}

function readFormData() {
    return {
        ticket_title: document.getElementById("ticket_title").value,
        ticket_body: document.getElementById("ticket_body").value,
    };
}

function validateForm(data) {
    if (data.ticket_title === "" || data.ticket_body === "") {
        alert("All fields are required.");
        return false;
    }
    return true;
}

function saveToLocalStorage(data) {
    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(data); 
    localStorage.setItem("tickets", JSON.stringify(tickets)); 
}

