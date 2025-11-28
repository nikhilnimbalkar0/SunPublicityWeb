import { useParams, Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import downtownBillboards from "../data/downtownBillboards";

export default function BillboardDetails() {
  const { id } = useParams();
  const item = downtownBillboards.find((b) => b.id === id);

  if (!item) {
    return (
      <>
        <Navbar />
        <main className="max-w-4xl mx-auto p-6 md:p-10">
          <p className="text-gray-600">Billboard not found.</p>
          <Link to="/downtown-billboard" className="text-blue-600 font-semibold">← Back to Downtown</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6 md:p-10">
        <Link to="/downtown-billboard" className="text-blue-600 font-semibold inline-block mb-4">← Back to Downtown</Link>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="aspect-video bg-gray-100">
            <img
              src={item.image}
              alt={item.location}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/1200x675?text=Billboard";
              }}
            />
          </div>
          <div className="p-6 space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold">{item.location}</h1>
            <p className="text-gray-700">{item.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
              <div>
                <div className="text-xs uppercase text-gray-500">Size</div>
                <div className="font-semibold">{item.size.replace("x","ft x ")}ft</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-500">Price</div>
                <div className="font-semibold">{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(item.price)} / month</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-500">Availability</div>
                <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${item.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {item.available ? "Available" : "Not Available"}
                </span>
              </div>
              {item.expiryDate && (
                <div>
                  <div className="text-xs uppercase text-gray-500">Expiry</div>
                  <div className="font-semibold">{new Date(item.expiryDate).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
