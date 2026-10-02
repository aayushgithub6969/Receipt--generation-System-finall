const generateBtn = document.getElementById("generateBtn");

const commandInput = document.getElementById("command");

const output = document.getElementById("output");


generateBtn.addEventListener("click", function () {

    const command = commandInput.value.trim();


    // Check empty input

    if (command === "") {

        output.innerHTML = `
            <p style="color: red;">
                Please enter your purchase details.
            </p>
        `;

        return;
    }


    // Temporary response

    output.innerHTML = `
        <h3>Request Received</h3>

        <br>

        <p>
            <strong>Customer Request:</strong>
        </p>

        <p>
            ${command}
        </p>

        <br>

        <p style="color: #64748b;">
            AI receipt generation will be connected in Day 5.
        </p>
    `;

});