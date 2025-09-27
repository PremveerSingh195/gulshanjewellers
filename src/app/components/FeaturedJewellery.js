// components/FeaturedJewellery.js
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FeaturedJewellery() {
  const [featuredItems, setFeaturedItems] = useState([]);

  // Sample featured jewelry data
  const sampleFeaturedItems = [
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "Rings",
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      category: "Earrings",
    },
    {
      id: 3,
      name: "Gold Tennis Bracelet",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "Bracelets",
    },
    {
      id: 4,
      name: "Emerald Necklace",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      category: "Necklaces",
    },
    {
      id: 5,
      name: "Silver Bangles Set",
      image:
        "data:image/jpeg;base64,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",
      category: "Bangles",
    },
    {
      id: 6,
      name: "Traditional Mangalsutra",
      image:
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop",
      category: "Mangalsutra",
    },
    {
      id: 7,
      name: "Rose Gold Chain",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      category: "Chains",
    },
    {
      id: 8,
      name: "Ruby Pendant",
      image:
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop",
      category: "Pendants",
    },
    {
      id: 9,
      name: "White Gold Hoops",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      category: "Earrings",
    },
    {
      id: 10,
      name: "Sapphire Ring",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "Rings",
    },
    {
      id: 11,
      name: "Designer Choker",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      category: "Necklaces",
    },
    {
      id: 12,
      name: "Platinum Band",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "Rings",
    },
  ];

  useEffect(() => {
    setFeaturedItems(sampleFeaturedItems);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked pieces that showcase the finest in craftsmanship and
            design
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%23f3f4f6'/%3E%3Ctext y='50%25' x='50%25' dy='0.35em' text-anchor='middle' fill='%236b7280' font-size='12'%3EJewelry%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-xs text-amber-600 font-medium">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
            <Link href="/all-jewellery">View All Collections</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
