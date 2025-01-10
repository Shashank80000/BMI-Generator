document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    let weight = parseFloat(document.querySelectorAll('input[type="text"]')[0].value);
    let height = parseFloat(document.querySelectorAll('input[type="text"]')[1].value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    let bmi = calculateBMI(weight, height);
    document.getElementById('result').textContent = "Your BMI is: " + bmi.toFixed(2);
});

function calculateBMI(weight, height) {
    height = height / 100; // Convert height from cm to meters
    return weight / (height * height);
}