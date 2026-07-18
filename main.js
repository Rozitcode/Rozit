// Save the reference to text-field into a variable.
const itemInput = document.getElementById('item-input');

// Save the reference to new-item button into a variable.
const addItemBtn = document.getElementById('add-item-btn');

// Save the reference to unordered or ordered list into a variable.
const dynamicList = document.getElementById('dynamic-list');

// Save the reference to paragraph for feedback
const errorFeedback = document.getElementById('error-feedback');

// Start function addItem.
function addItem() {

    // Check if user entered the value in input text-field.
    if (itemInput.value !== "") {

        // Create list-item and store output in a variable.
        const listItem = document.createElement('li');

        // Use textContent property on created list-item
        // and assign it with the value of the text written in the text-field
        listItem.textContent = itemInput.value;

        // Append list item to unordered list.
        dynamicList.appendChild(listItem);

        // Clear a feedback-message.
        errorFeedback.textContent = "";

        // Clear the text-field.
        itemInput.value = "";

        // Put the cursor back to text-field
        itemInput.focus();

    } // End if.
    else {
        // Otherwise: Print the message nothing entered in the paragraph "feedback"
        errorFeedback.textContent = "Nothing entered!";

        // Put the cursor back to text-field
        itemInput.focus();
    } // End otherwise.

} // End function addItem.

// Register your function addItem for click event on button.
addItemBtn.addEventListener('click', addItem);

// Allow pressing Enter inside the text-field to trigger the same action.
itemInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
