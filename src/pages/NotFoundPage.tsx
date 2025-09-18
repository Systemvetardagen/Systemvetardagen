import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundPage: React.FC = () => {
  return (
    <div className="grow flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Sidan kunde inte hittas
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto">
            Vi kan tyvärr inte hitta sidan du letar efter. Den kanske har
            flyttats eller finns inte längre.
          </p>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Tillbaka till startsidan
          </Link>
          <Button
            onClick={() => window.history.back()}
            variant={"plain"}
            size={"lg"}
          >
            Gå tillbaka
          </Button>
          {/* <button
            onClick={() => window.history.back()}
            className="inline-block bg-transparent border-2 border-black hover:bg-white hover:text-gray-900 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Gå tillbaka
          </button> */}
        </div>

        <div className="mt-12 text-sm text-gray-400">
          <p>Om du tror att detta är ett fel, vänligen kontakta oss.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
