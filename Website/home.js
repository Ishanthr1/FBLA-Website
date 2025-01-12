// Waits for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Selects the HTML element where the events will be displayed
    const calendar = document.getElementById("event-calendar");

    // Array of event objects, each containing a date, name, and description of the event
    const events = [
        {
            date: "2024-12-01",
            name: "High School Basketball",
            description: "Watch our top local teams compete for the championship title!"
        },
        {
            date: "2024-12-15",
            name: "Winter Concert",
            description: "Enjoy an evening of music with performances from local bands and orchestras."
        },
        {
            date: "2025-01-10",
            name: "Trade Expo",
            description: "Explore the latest products and innovations from various industries."
        }
    ];

    // Loops through each event in the `events` array
    events.forEach(event => {
        // Creates a container for the individual event
        const eventElement = document.createElement("div");
        eventElement.classList.add("event"); // Adds the "event" class for styling

        // Creates and populates an element for the event title (date and name)
        const eventTitle = document.createElement("h3");
        eventTitle.textContent = `${event.date} - ${event.name}`;
        eventElement.appendChild(eventTitle); // Appends the title to the event container

        // Creates and populates an element for the event description
        const eventDescription = document.createElement("p");
        eventDescription.textContent = event.description;
        eventElement.appendChild(eventDescription); // Appends the description to the event container

        // Adds the complete event element to the calendar container in the DOM
        calendar.appendChild(eventElement);
    });
});
