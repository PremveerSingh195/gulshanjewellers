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
        "https://images.unsplash.com/photo-1588444650700-6c7f0c89d36b?w=400&h=400&fit=crop",
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
