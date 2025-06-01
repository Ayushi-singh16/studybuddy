function addReminder() {
  const input = document.getElementById("reminderInput");  // Access the input field
  const reminderText = input.value.trim();  // Get the trimmed value of the input

  if (reminderText !== "") {  // Check if the input is not empty
    const li = document.createElement("li");  // Create a new <li> element
    li.textContent = reminderText;  // Set the content of the <li> to the input text

    const reminderList = document.getElementById("reminderList");  // Access the <ul> element
    reminderList.appendChild(li);  // Append the new <li> to the <ul> list

    input.value = "";  // Clear the input field after adding the reminder
  } else {
    alert("Please enter a valid reminder.");  // Alert if the input is empty
  }
}
function saveUserTimetable() {
  const inputs = document.querySelectorAll("#userTimetable input");
  let savedData = [];

  inputs.forEach(input => {
    savedData.push(input.value.trim() || "-");  // Use "-" if empty
  });

  const savedLine = savedData.join(" | ");  // Join all values into one line
  document.getElementById("savedLine").textContent = "Your Timetable: " + savedLine;
  document.getElementById("message").textContent = "✅ Go ahead with your timetable!";
}
