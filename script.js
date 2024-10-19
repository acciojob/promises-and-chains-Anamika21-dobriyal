//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    const nameInput = document.getElementById('name').value;
    const ageInput = parseInt(document.getElementById('age').value);

    if (!nameInput || !ageInput) {
        alert('Both fields are required.');
        return;
    }

    // Create the promise
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageInput >= 18) {
                resolve(`Welcome, ${nameInput}. You can vote.`);
            } else {
                reject(`Oh sorry ${nameInput}. You aren't old enough.`);
            }
        }, 4000);  // 4 seconds delay
    })
    .then((message) => {
        alert(message);
    })
    .catch((error) => {
        alert(error);
    });
});
