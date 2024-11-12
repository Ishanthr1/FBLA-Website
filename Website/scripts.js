document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("event-calendar");
    const events = [
        { date: "2024-12-01", name: "High School Basketball", description: "Watch our top local teams compete for the championship title!" },
        { date: "2024-12-15", name: "Winter Concert", description: "Enjoy an evening of music with performances from local bands and orchestras." },
        { date: "2025-01-10", name: "Trade Expo", description: "Explore the latest products and innovations from various industries." }
    ];

    events.forEach(event => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("event");

        const eventTitle = document.createElement("h3");
        eventTitle.textContent = `${event.date} - ${event.name}`;
        eventElement.appendChild(eventTitle);

        const eventDescription = document.createElement("p");
        eventDescription.textContent = event.description;
        eventElement.appendChild(eventDescription);

        calendar.appendChild(eventElement);
    });
});
