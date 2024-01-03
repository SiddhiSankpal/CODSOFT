
// Add this JavaScript to your HTML document, preferably just before the closing </body> tag.
document.addEventListener("DOMContentLoaded", function () {
    const FPGABtn = document.getElementById("FPGABtn");
    const TOUCHLESSBtn = document.getElementById("TOUCHLESSBtn");
    const FLEETBtn = document.getElementById("FLEETBtn");

    const FPGAInfo = document.getElementById("FPGAInfo");
    const TOUCHLESSInfo = document.getElementById("TOUCHLESSInfo"); // Remove the extra space at the end
    const FLEETInfo = document.getElementById("FLEETInfo");

    // Event listeners for button clicks
    FPGABtn.addEventListener("click", function () {
        displayInfo("The FPGA-based Braille keyboard is a specialized input device designed for blind individuals to facilitate text input. It utilizes Field-Programmable Gate Array (FPGA) technology to process and interpret the user's Braille input in real-time.", FPGAInfo);
    });

    TOUCHLESSBtn.addEventListener("click", function () {
        displayInfo("Touchless waste segregation from open spaces refers to the process of separating different types of waste without the need for physical contact or manual handling. This approach aims to improve hygiene, efficiency, and safety in waste management practices.", TOUCHLESSInfo);
    });

    FLEETBtn.addEventListener("click", function () {
        displayInfo("This is a web-based system developed using Spring 6, Maven 3, Spring Boot 3, REST API, MySQL 8, JPA, JUnit 4, JWT, MicroService, Docker, Web API Core, SQL Server, Entity Core, React Js for Rent-a-Car Service Company to manage different aspects of renting a car like selection of pick-up and drop-off points and desired dates.", FLEETInfo);
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
