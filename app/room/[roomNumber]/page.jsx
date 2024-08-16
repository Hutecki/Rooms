import React from "react";
import connectDB from "@/config/database";
import Room from "@/models/Room";
import ErrorPage from "@/components/ErrorPage";
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
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <Legend />
      <h1 className="text-4xl md:text-5xl mb-6">Pokój {room.Pokoj}</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full max-w-md md:max-w-lg lg:max-w-xl">
        <tbody>
          {room.Atrybuty && (
            <tr className="border-t">
              <td className="p-2 md:p-4 border-r font-medium text-base md:text-lg">
                Atrybuty:
              </td>
              <td className="p-2 md:p-4 break-words text-base md:text-lg">
                {room.Atrybuty}
              </td>
            </tr>
          )}
          <tr className="border-t">
            <td className="p-2 md:p-4 border-r font-medium text-base md:text-lg">
              Trasa:
            </td>
            <td className="p-2 md:p-4 break-words text-base md:text-lg">
              {room.Winda}
            </td>
          </tr>
          <tr className="border-t">
            <td className="p-2 md:p-4 border-r font-medium text-base md:text-lg">
              Poziom:
            </td>
            <td className="p-2 md:p-4 text-base md:text-lg">
              {room.Pokoj === 400 ? "4+5+6" : room.Poziom}
            </td>
          </tr>
          <tr className="border-t">
            <td className="p-2 md:p-4 border-r font-medium text-base md:text-lg">
              Sektor:
            </td>
            <td className="p-2 md:p-4 text-base md:text-lg">{room.Sektor}</td>
          </tr>
        </tbody>
      </table>
      {isStairsOnly && (
        <p className="p-2 md:p-4 text-red-500 text-lg md:text-3xl">
          Uwaga: Schody!
        </p>
      )}
    </div>
  );
};

export default RoomPage;
