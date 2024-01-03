// Add this JavaScript to your HTML document, preferably just before the closing </body> tag.
document.addEventListener("DOMContentLoaded", function () {
    const schoolBtn = document.getElementById("schoolBtn");
    const diplomaBtn = document.getElementById("diplomaBtn");
    const degreeBtn = document.getElementById("degreeBtn");
    const pgDiplomaBtn = document.getElementById("pgDiplomaBtn");
    
    const schoolInfo = document.getElementById("schoolInfo");
    const diplomaInfo = document.getElementById("diplomaInfo");
    const degreeInfo = document.getElementById("degreeInfo");
    const pgDiplomaInfo = document.getElementById("pgDiplomaInfo");

    // Event listeners for button clicks
    schoolBtn.addEventListener("click", function () {
        const schoolName = "SCHOOL ST.COLUMBA GIRLS HIGH SCHOOL";
        const passingYear = "2016"; // Replace this with the actual passing year
        const schoolInfoWithPassingYear = `${schoolName} (Passing Year: ${passingYear})`;
        displayInfo(schoolInfoWithPassingYear, schoolInfo);
    });
    

    diplomaBtn.addEventListener("click", function () {
        const DIPLOMAName = "BABASAHEB GAWDE INSTITUTE OF TECHNOLOGY";
        const passingYear = "2019"; // Replace this with the actual passing year
        const diplomaInfoWithPassingYear = `${DIPLOMAName} (Passing Year: ${passingYear})`;
        displayInfo(diplomaInfoWithPassingYear, diplomaInfo);

    });

    degreeBtn.addEventListener("click", function () {
        const degreeName = "SHAH AND ANCHOR KUTCCHI ENGINEERING COLLEGE";
        const passingYear = "2022"; // Replace this with the actual passing year
        const schoolInfoWithPassingYear = `${degreeName} (Passing Year: ${passingYear})`;
        displayInfo(schoolInfoWithPassingYear, degreeInfo);
    });
    

    pgDiplomaBtn.addEventListener("click", function () {
        const pgName = "PG DIPLOMA IN ADVANCE COMPUTER SCIENCE CDAC";
        const passingYear = "2023"; // Replace this with the actual passing year
        const schoolInfoWithPassingYear = `${pgName} (Passing Year: ${passingYear})`;
        displayInfo(schoolInfoWithPassingYear, pgDiplomaInfo);
    });
    
    
    

    // Function to display information and hide others
    function displayInfo(infoText, infoContainer) {
        // Hide all info containers
        const allInfoContainers = document.querySelectorAll(".info");
        allInfoContainers.forEach(container => {
            container.style.display = "none";
        });

        // Set and display the selected info
        infoContainer.textContent = infoText;
        infoContainer.style.display = "block";
    }
});
