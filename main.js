function buttonclick(button) {
    // Toggle between "Thanks" and the original button text
    if (button.innerHTML === "Thanks") {
        button.innerHTML = button.getAttribute("data-original-text");
    } else {
        button.setAttribute("data-original-text", button.innerHTML); // Save the original text
        button.innerHTML = "Thanks";
    }
}
