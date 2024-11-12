document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { date: "2024-12-01", name: "High School Basketball Championship", time: "6:00 PM" },
        { date: "2024-12-15", name: "Winter Concert", time: "7:30 PM" },
        { date: "2025-01-10", name: "Trade Expo", time: "10:00 AM - 6:00 PM" },
        { date: "2025-03-22", name: "Spring Arts Festival", time: "11:00 AM - 8:00 PM" }
    ];

    const calendarGrid = document.getElementById("calendarGrid");
    const currentMonthLabel = document.getElementById("currentMonthLabel");
    let currentDate = new Date();

    function renderMiniCalendar(date) {
        calendarGrid.innerHTML = "";
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        currentMonthLabel.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

// Create empty cells for days before the start of the month
for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("calendar-day", "empty");
    calendarGrid.appendChild(emptyCell);
}

// Create cells for each day of the current month
for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.classList.add("calendar-day");
    cell.textContent = day;

    const event = events.find(e => e.date === `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
    if (event) {
        const eventLabel = document.createElement("span");
        eventLabel.classList.add("event-label");
        eventLabel.textContent = `${event.name} - ${event.time}`;
        cell.appendChild(eventLabel);
    }

    calendarGrid.appendChild(cell);
}
}



renderMiniCalendar(currentDate);
});





