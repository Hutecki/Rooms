import React from "react";
import connectDB from "@/config/database";
import Room from "@/models/Room";
import ErrorPage from "@/components/ErrorPage"; // Import the ErrorPage component
import Legend from "@/components/Legend";

const RoomPage = async ({ params }) => {
  const { roomNumber } = params;

  // Define the list of stairs-only rooms
  const stairsRooms = [
    "145",
    "214",
    "215",
    "216",
    "217",
    "218",
    "219",
    "319",
    "320",
    "321",
    "322",
    "323",
    "324",
    "325",
    "326",
  ];

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

  // Check if the room number is in the stairs-only list
  const isStairsOnly = stairsRooms.includes(roomNumber.toString());

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Legend></Legend>
      <h1 className="text-4xl mb-2">Pokój {room.Pokoj}</h1>
      {room.Atrybuty === "" ? (
        ""
      ) : (
        <p className="text-2xl mb-2 text-center break-words">
          Atrybuty: {room.Atrybuty}
        </p>
      )}
      <p className="text-2xl mb-2 text-center break-words">
        Trasa: {room.Winda}
      </p>
      <p className="text-2xl mb-2">(Sektor): {room.Sektor}</p>
      {room.Pokoj === 400 ? (
        <p className="text-2xl mb-2">(Poziom): 4+5+6</p>
      ) : (
        <p className="text-2xl mb-2">(Poziom): {room.Poziom}</p>
      )}

      {isStairsOnly && (
        <p className="text-4xl mt-2 text-red-500 text-center break-words">
          Uwaga: Schody!
        </p>
      )}
    </div>
  );
};

export default RoomPage;
