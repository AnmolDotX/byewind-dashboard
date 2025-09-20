import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gray-50 rounded-2xl p-4">
      <div className="text-center space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome 👋</h1>
        <p className="text-gray-600">
          Navigate to{" "}
          <span className="font-medium text-gray-800">default page</span> under
          the dashboard seciton in sidebar.
        </p>

        <Link
          href="/dashboard/default"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition-all duration-200"
        >
          Go to Default
        </Link>
      </div>
    </div>
  );
};

export default Home;
