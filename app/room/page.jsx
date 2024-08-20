import HomeRoom from "@/components/HomeRoom";
import connectDB from "@/config/database";
import Room from "@/models/Room";

const RoomPage = async () => {
  await connectDB();

  // Fetch rooms and sort by Pokoj (ascending order)
  const rooms = await Room.find({}).sort({ Pokoj: 1 }).lean();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mt-20 ">
      <h1 className="text-4xl mb-10">Pokoje</h1>
      <div className="w-full max-w-6xl mx-auto">
        {rooms.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 text-center">
            {rooms.map((room) => (
              <HomeRoom key={room._id} room={room} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomPage;
