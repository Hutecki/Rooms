import React from "react";
import connectDB from "@/config/database";
import Room from "@/models/Room";
import ErrorPage from "@/components/ErrorPage"; // Import the ErrorPage component

const RoomPage = async ({ params }) => {
  const { roomNumber } = params;

  // Validate the room number first
  if (isNaN(roomNumber)) {
    return (
      <ErrorPage
        title="Pokój nie istnieje"
        message="Pamiętaj o tym, że pokój musi się składać z cyfr"
        linkText="Powrót"
        linkHref="/"
      />
    );
  }

  await connectDB();

  // Query the database only if roomNumber is valid
  const room = await Room.findOne({ Pokoj: roomNumber }).lean();

  if (!room) {
    return (
      <ErrorPage
        title="Pokój nie istnieje"
        message="Nie znaleziono pokoju o podanym numerze."
        linkText="Powrót"
        linkHref="/"
      />
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl mb-2">Pokój {room.Pokoj}</h1>
      <p className="text-2xl mb-2">Sektor: {room.Sektor}</p>
      <p className="text-2xl mb-2">Trasa: {room.Winda}</p>
      {room.Atrybuty === "" ? (
        ""
      ) : (
        <p className="text-2xl mb-2 text-center break-words">
          Atrybuty: {room.Atrybuty}
        </p>
      )}

      {/* Add more room details as needed */}
    </div>
  );
};

export default RoomPage;
