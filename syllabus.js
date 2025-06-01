function downloadSyllabus() {
    const subject = document.getElementById("subject").value;
    const errorMessage = document.getElementById("error-message");

    // Hide the error message by default
    errorMessage.style.display = "none";

    if (subject === "") {
        errorMessage.style.display = "block"; // Show error message if no subject is selected
        return;
    }

    // Map subjects to their syllabus files
    const syllabusFiles = {
        cc: "cognitive.pdf",
        html: "html.pdf",
        dav: "dav.pdf",
        network: "networknotes.pdf",
        ml:"ml.pdf"
    };

    const fileToDownload = syllabusFiles[subject];

    if (fileToDownload) {
        // Trigger download
        const a = document.createElement("a");
        a.href = fileToDownload;
        a.download = fileToDownload.split("/").pop(); // Extract the file name
        a.click();
    }
}

// Change background color based on time of day
function changeBackground() {
    const hour = new Date().getHours();
    const body = document.body;

    if (hour >= 6 && hour < 12) {
        body.style.backgroundColor = "#f1f8e9"; // Light Green for morning
    } else if (hour >= 12 && hour < 18) {
        body.style.backgroundColor = "#e1f5fe"; // Light Blue for afternoon
    } else {
        body.style.backgroundColor = "#fce4ec"; // Light Pink for evening
    }
}

window.onload = changeBackground;  // Run background change on page load
