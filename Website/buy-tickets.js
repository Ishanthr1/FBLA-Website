function populateSidebar() {
    for (let i = 1; i <= 30; i++) {
        const tier = i <= 12 ? 1 : i <= 22 ? 2 : 3;
        const price = tier === 1 ? 150 : tier === 2 ? 100 : 75; // You can add logic to change prices easily here

        const sectionInfo = document.createElement('div');
        sectionInfo.classList.add('section-info');

        sectionInfo.innerHTML = `
            <div class="section-header" data-section="${i}">
                Section ${i} (Tier ${tier})
            </div>
            <div class="section-content">
                <p><strong>Price:</strong> $${price}</p>
                <div class="row-selector">
                    <label for="row-select-${i}">Choose Row:</label>
                    <select id="row-select-${i}">
                        ${Array.from({ length: 7 }, (_, index) => `<option value="${index + 1}">Row ${index + 1}</option>`).join('')}
                    </select>
                </div>
            </div>
        `;

sectionsList.appendChild(sectionInfo);
}
}

