import React from "react";

const rooms = [
    { id: 1, location: "Kothrud", rent: 4500, amenities: ["WiFi", "Attached Bathroom"] },
    { id: 2, location: "Viman Nagar", rent: 5500, amenities: ["AC", "Shared Kitchen"] },
    { id: 3, location: "Hinjewadi", rent: 4000, amenities: ["WiFi", "Furnished"] },
];

export default function RoomList() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 py-6">
            {rooms.map((room) => (
                <div key={room.id} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-semibold">{room.location}</h2>
                    <p className="mt-2">Rent: ₹{room.rent}</p>
                    <ul className="mt-2">
                        {room.amenities.map((item, index) => (
                            <li key={index}>✅ {item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
