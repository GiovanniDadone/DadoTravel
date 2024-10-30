
const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 mt-20">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-center mb-8">
        Welcome to our travel site! We are passionate about exploring the world and helping you discover your next adventure.
        Our mission is to provide you with the best travel experiences, tips, and resources to make your journey unforgettable.
      </p>
      <h2 className="text-2xl font-semibold text-center mb-4">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Team Member 1 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="../images/team1.jpg"
            alt="Team Member 1"
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-bold mt-4">John Doe</h3>
          <p className="text-gray-700">Lead Explorer</p>
          <p className="mt-2 text-gray-600">
            John has traveled to over 50 countries and has a passion for discovering hidden gems. He enjoys sharing his travel tips and experiences with others.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="../images/team2.jpg"
            alt="Team Member 2"
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-bold mt-4">Jane Smith</h3>
          <p className="text-gray-700">Travel Planner</p>
          <p className="mt-2 text-gray-600">
            With a knack for planning unforgettable itineraries, Jane ensures every trip is a memorable adventure. Her favorite destination is always the next one!
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="../images/team3.jpg"
            alt="Team Member 3"
            className="w-full h-32 object-cover rounded-t-lg"
          />
          <h3 className="text-xl font-bold mt-4">Michael Brown</h3>
          <p className="text-gray-700">Cultural Ambassador</p>
          <p className="mt-2 text-gray-600">
            Michael is passionate about immersing himself in different cultures. He shares insights about local traditions, cuisines, and experiences from around the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
