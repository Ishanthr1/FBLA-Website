/**
 * Function to dynamically populate a sidebar with section details.
 * Each section is assigned a tier, price, and a dropdown for row selection.
 */
function populateSidebar() {
    // Get the container element where the sections will be appended
    const sectionsList = document.getElementById('sectionsList'); // Ensure the container ID matches your HTML

    // Loop through sections 1 to 30
    for (let i = 1; i <= 30; i++) {
        // Determine the tier based on the section number
        const tier = i <= 12 ? 1 : i <= 22 ? 2 : 3;
        const price = tier === 1 ? 150 : tier === 2 ? 100 : 75; // You can add logic to change prices easily here

        // Assign price based on the tier
        const price = tier === 1 ? 150 : tier === 2 ? 100 : 75;

        // Create a container div for the section information
        const sectionInfo = document.createElement('div');
        sectionInfo.classList.add('section-info'); // Add a class for styling

        // Populate the inner HTML with section header, price, and a row dropdown
        sectionInfo.innerHTML = `
            <div class="section-header" data-section="${i}">
                Section ${i} (Tier ${tier}) <!-- Display section number and tier -->
            </div>
            <div class="section-content">
                <p><strong>Price:</strong> $${price}</p> <!-- Display the price -->
                <div class="row-selector">
                    <label for="row-select-${i}">Choose Row:</label>
                    <select id="row-select-${i}">
                        <!-- Generate dropdown options for rows 1 through 7 -->
                        ${Array.from({ length: 7 }, (_, index) => `<option value="${index + 1}">Row ${index + 1}</option>`).join('')}
                    </select>
                </div>
            </div>
        `;

        // Append the section info to the parent container
        sectionsList.appendChild(sectionInfo);
    }
}
