document.addEventListener("DOMContentLoaded", () => {
    const plantName = document.getElementById("plantName");
    const nameInput = document.getElementById("nameInput");
    const editPen = document.getElementById("editPen");

    editPen.addEventListener("click", () => {
        // Switch to input mode
        nameInput.classList.remove("hidden");
        plantName.classList.add("hidden");

        // Set input field value to current name and focus
        nameInput.value = plantName.textContent.trim();
        nameInput.focus();
    });

    nameInput.addEventListener("blur", () => {
        // Save and switch back to display mode
        if (nameInput.value.trim() !== "") {
            plantName.textContent = nameInput.value.trim();
        }
        nameInput.classList.add("hidden");
        plantName.classList.remove("hidden");
    });

    nameInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            nameInput.blur(); // Save and exit editing on Enter key
        }
    });
});