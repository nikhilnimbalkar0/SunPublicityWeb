import { useParams, Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


const CATEGORY_MAP = {
  "downtown-billboard": "Downtown Billboard",
  "highway-display": "Highway Display",
  "shopping-mall-board": "Shopping Mall Board",
  "event-promotion": "Event Promotion",
  "city-center-led": "City Center LED",
  "corporate-ad-space": "Corporate Ad Space",
  "mall": "Shopping Mall Board",
  "event": "Event Promotion",
  "led": "City Center LED",
  "corporate": "Corporate Ad Space",
};

export default function AdItemDetails() {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const categoryName = CATEGORY_MAP[category] || "Category";

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "hoardings", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchItem();
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen pt-20">
          <div className="text-blue-600 font-semibold">Loading...</div>
        </div>
      </>
    );
  }

  if (!item) {
    return (
      <>
        <Navbar />
        <main className="max-w-4xl mx-auto p-6 md:p-10 pt-24">
          <p className="text-gray-600">Item not found.</p>
          <Link to={`/gallery/${category}`} className="text-blue-600 font-semibold">← Back to {categoryName}</Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6 md:p-10 pt-24">
        <Link to={`/gallery/${category}`} className="text-blue-600 font-semibold inline-block mb-4">← Back to {categoryName}</Link>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="aspect-video bg-gray-100 relative">
            <img
              src={item.imageUrl}
              alt={item.title || item.location}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/1200x675?text=Hoarding";
              }}
            />
            {!item.availability && (
              <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                Sold Out
              </div>
            )}
          </div>
          <div className="p-6 space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold">{item.title}</h1>
            <p className="text-gray-500">{item.location}</p>

            {item.description && (
              <p className="text-gray-700 mt-2">{item.description}</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4 border-t mt-4">
              <div>
                <div className="text-xs uppercase text-gray-500">Size</div>
                <div className="font-semibold">{String(item.size).replace("x", "ft x ")}ft</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-500">Price</div>
                <div className="font-semibold">{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(item.price)} / month</div>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-500">Availability</div>
                <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${item.availability ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {item.availability ? "Available" : "Not Available"}
                </span>
              </div>
              <div>
                <div className="text-xs uppercase text-gray-500">Views</div>
                <div className="font-semibold">{item.views || 0}</div>
              </div>
            </div>

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
