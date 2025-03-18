document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".signup-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from reloading the page

        // Retrieve input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const icId = document.getElementById("ic-id").value || "Not provided"; // Handle optional field

        // Create a message to display the data
        const outputMessage = `
            <h3>🎉 Thank You for Signing Up!</h3>
        `;

        // Display the message
        const container = document.createElement("div");
        container.classList.add("form-output");
        container.innerHTML = outputMessage;

        // Append the message to the container
        document.querySelector(".signup-container").appendChild(container);

        // Remove the message after 2 seconds
        setTimeout(function() {
            container.remove();
        }, 2000);
    });
});
