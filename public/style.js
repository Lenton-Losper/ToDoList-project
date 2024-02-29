//i try my best to make use of comments to help you understand the code 


document.addEventListener('DOMContentLoaded', function() {
    const ul = document.getElementById('list-container'); // Select the <ul> element by its id
    const inputBox = document.getElementById('input-box'); // Select the input box

    function addTask() {
        const text = inputBox.value.trim(); // Get the value of the input box and trim any extra whitespace
        if (text !== '') { // Check if the input is not empty
            const li = document.createElement('li'); // Create a new <li> element
            li.textContent = text; // Set its text content to the value entered in the input box
            
            const deleteButton = document.createElement('button'); // Create delete button
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            li.appendChild(deleteButton); // Append delete button to the li
            
            ul.appendChild(li); // Append the new <li> to the <ul>
            inputBox.value = ''; // Clear the input box after adding the task
        }
    }

    const addButton = document.getElementById('add-button'); // Select the add button
    addButton.addEventListener('click', addTask); // Add event listener to call add function when button is clicked

    ul.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) { // Check if clicked element is a delete button
            const li = event.target.parentElement; // Get the parent <li> element
            ul.removeChild(li); // Remove the <li> from the <ul>
        }
    });
});
