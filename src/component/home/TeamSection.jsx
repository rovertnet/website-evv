// components/home/TeamSection.jsx
import React from "react";

const team = [
  {
    name: "Pasteur Jean Mavungu",
    role: "Pasteur Principal",
    photo: "https://source.unsplash.com/200x200/?pastor,man",
    bio: "Responsable spirituel de l’église EVV depuis plus de 10 ans.",
  },
  {
    name: "Pasteure Clarisse Mbala",
    role: "Pasteure associée",
    photo: "https://source.unsplash.com/200x200/?woman,preacher",
    bio: "Engagée dans l’accompagnement des femmes et des jeunes.",
  },
  {
    name: "Évangéliste Daniel Nkosi",
    role: "Évangéliste",
    photo: "https://source.unsplash.com/200x200/?evangelist,man",
    bio: "Responsable de l’évangélisation et des missions extérieures.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-100 px-6 lg:px-32">
      <h2 className="text-3xl font-bold text-center mb-12">
        Notre Équipe Pastorale
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-orange-500"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-orange-500 font-medium mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
