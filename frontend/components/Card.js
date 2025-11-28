export default function Card() {
  return (
    <div className="bg-white shadow-md py-4 px-6 rounded-md">
      <h2 className="text-2xl font-bold mb-2">Wedding Details</h2>
      <p className="text-lg mb-4">Date: <span className="font-bold">June 12, 2024</span></p>
      <p className="text-lg mb-4">Time: <span className="font-bold">2:00 PM</span></p>
      <p className="text-lg mb-4">Location: <span className="font-bold">New York City</span></p>
    </div>
  );
}