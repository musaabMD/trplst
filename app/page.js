import Link from "next/link";
import FeaturesPopup from "@/components/Features/features-popup";

export default function Page() {
  return (
    <>
 <main className="min-h-screen bg-gradient-to-br ">
      <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">T</span>
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Join Triplst Community 🌍
                </h2>
                <p className="text-xl text-gray-600">Connect with 50,000+ fellow travelers worldwide!</p>
              </div>
        {/* Your main content here */}
      </div>
      <FeaturesPopup />
    </main>
    </>
  );
}
