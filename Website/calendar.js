/**
 * Main script to render a mini-calendar with events displayed on relevant dates.
 * The script runs when the DOM is fully loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
    // Array of event objects with date, name, and time properties
    const events = [
            { date: "2025-3-15", name: "Rock Fest 2025", time: "6:00 PM - 11:00 PM" },
            { date: "2025-3-28", name: "Huskies vs Spartans", time: "7:30 PM - 10:00 PM" },
            { date: "2025-4-01", name: "High School Basketball Championship", time: "6:00 PM" },
            { date: "2025-4-15", name: "Spring Concert", time: "7:30 PM" },
            { date: "2025-05-10", name: "Trade Expo", time: "10:00 AM - 6:00 PM" },
            { date: "2025-06-05", name: "Comedy Night Extravaganza", time: "8:00 PM" }
    ];

    // Elements for displaying the calendar grid and the current month label
    const calendarGrid = document.getElementById("calendarGrid");
    const currentMonthLabel = document.getElementById("currentMonthLabel");

    // Variable to track the current date
    let currentDate = new Date();

    /**
     * Renders the mini-calendar for a given date.
     * Displays events on their respective dates.
     *
     * @param {Date} date - The base date for rendering the calendar.
     */
    function renderMiniCalendar(date) {
        // Clear the calendar grid to prepare for rendering
        calendarGrid.innerHTML = "";

        // Extract year and month from the given date
        const year = date.getFullYear();
        const month = date.getMonth();

        // Get the day of the week for the first day of the month (0-6, Sunday-Saturday)
        const firstDay = new Date(year, month, 1).getDay();

        // Get the total number of days in the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Update the current month label (e.g., "December 2024")
        currentMonthLabel.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        // Create empty cells for the days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            emptyCell.classList.add("calendar-day", "empty"); // Add a class for styling empty cells
            calendarGrid.appendChild(emptyCell);
        }

        // Create cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement("div");
            cell.classList.add("calendar-day"); // Add a class for styling day cells
            cell.textContent = day; // Set the day number as the cell content

            // Check if there's an event on this date
            const event = events.find(e => e.date === `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
            if (event) {
                // Create a label to display the event name and time
                const eventLabel = document.createElement("span");
                eventLabel.classList.add("event-label"); // Add a class for styling event labels
                eventLabel.textContent = `${event.name} - ${event.time}`; // Set event details
                cell.appendChild(eventLabel); // Add the label to the cell
            }

            // Append the day cell to the calendar grid
            calendarGrid.appendChild(cell);
        }
    }

    // Initial rendering of the calendar with the current date
    renderMiniCalendar(currentDate);
});
