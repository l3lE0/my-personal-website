// Download resume button
const downloadButton = document.getElementById('download-resume');
downloadButton.addEventListener('click', () => {
    // Replace with the path to your resume PDF
    window.open('content/resume.pdf');
});

function openCategory(categoryName) {
    const contentElements = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contentElements.length; i++) {
        contentElements[i].style.display = "none";
    }
    document.getElementById(categoryName).style.display = "block";
}
