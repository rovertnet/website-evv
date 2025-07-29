// components/home/EventsSection.jsx
import React from "react";

const events = [
  {
    title: "Séminaire de délivrance",
    date: "05 Août 2025",
    location: "Temple EVV Gombe",
    description: "Trois jours de puissance et restauration spirituelle.",
  },
  {
    title: "Journée des Jeunes",
    date: "18 Août 2025",
    location: "EVV Limete",
    description: "Louange, enseignement et communion fraternelle.",
  },
];

export default function EventsSection() {
  return (
    <section className="py-20 bg-white px-4 lg:px-32">
      <h2 className="text-3xl font-bold text-center mb-10">
        Prochains Événements
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event, idx) => (
          <div key={idx} className="border p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-1">
              {event.date} • {event.location}
            </p>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
