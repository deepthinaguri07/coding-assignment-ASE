function submitForm() {
    const form = document.getElementById("surveyForm");

    if (form.checkValidity() && validateForm()) {
        displayPopup();
    } else {
        alert("Please fill in all the required fields.");
    }
}

function validateForm() {
    const emailInput = document.getElementById("email");
    const mobileInput = document.getElementById("mobile");

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const mobilePattern = /^\d{10}$/;

    if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!mobilePattern.test(mobileInput.value)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    return true;
}

function displayPopup() {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popupContent");
    const form = document.getElementById("surveyForm");

    const formData = new FormData(form);
    let content = "<h2>Form Submitted Successfully</h2><ul>";

    for (let pair of formData.entries()) {
        content += `<li><b>${pair[0]}:</b> ${pair[1]}</li>`;
    }

    content += "</ul>";
    popupContent.innerHTML = content;
    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style display = "none";
    document.getElementById("surveyForm").reset();
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}
