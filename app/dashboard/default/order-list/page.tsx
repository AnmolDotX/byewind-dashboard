"use client";
import React, { useState, useMemo } from "react";
import {
  Plus,
  ArrowUpDown,
  Search,
  Calendar,
  ExternalLink,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PiFunnelSimpleBold } from "react-icons/pi";
import Image from "next/image";
import contactPerson1Img from "@/assets/ContactPerson1.svg";
import contactPerson2Img from "@/assets/ContactPerson2.svg";
import contactPerson3Img from "@/assets/ContactPerson3.svg";
import contactPerson4Img from "@/assets/ContactPerson4.svg";
import contactPerson5Img from "@/assets/ContactPerson5.svg";
import contactPerson6Img from "@/assets/ContactPerson6.svg";

interface Order {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  hasExternalLink?: boolean;
  date: string;
  status: {
    text: string;
    color: "purple" | "green" | "lightblue" | "yellow" | "gray";
  };
}

const dummyOrders: Order[] = [
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: contactPerson1Img,
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: { text: "In Progress", color: "purple" },
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: contactPerson2Img,
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: { text: "Complete", color: "green" },
  },
  {
    id: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: contactPerson3Img,
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: { text: "Pending", color: "lightblue" },
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: contactPerson4Img,
    },
    project: "Admin Dashboard",
    address: "Washburn Boton Rouge",
    date: "Yesterday",
    status: { text: "Approved", color: "yellow" },
  },
  {
    id: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: contactPerson5Img,
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    hasExternalLink: true,
    date: "Feb 2, 2023",
    status: { text: "Rejected", color: "gray" },
  },
  // Duplicate entries to match the table
  {
    id: "#CM9801",
    user: {
      name: "Natali Craig",
      avatar: contactPerson6Img,
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: { text: "In Progress", color: "purple" },
  },
  {
    id: "#CM9802",
    user: {
      name: "Kate Morrison",
      avatar: contactPerson1Img,
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: { text: "Complete", color: "green" },
  },
  {
    id: "#CM9803",
    user: {
      name: "Drew Cano",
      avatar: contactPerson2Img,
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: { text: "Pending", color: "lightblue" },
  },
  {
    id: "#CM9804",
    user: {
      name: "Orlando Diggs",
      avatar: contactPerson3Img,
    },
    project: "Admin Dashboard",
    address: "Washburn Boton Rouge",
    date: "Yesterday",
    status: { text: "Approved", color: "yellow" },
  },
  {
    id: "#CM9805",
    user: {
      name: "Andi Lane",
      avatar: contactPerson4Img,
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    hasExternalLink: true,
    date: "Feb 2, 2023",
    status: { text: "Rejected", color: "gray" },
  },
];

const OrderList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrders, setSelectedOrders] = useState<Set<string>>(
    new Set(["#CM9804"])
  );
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = useMemo(() => {
    if (!searchTerm) return dummyOrders;
    return dummyOrders.filter((order) =>
      order.user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const toggleOrderSelection = (orderId: string) => {
    const newSelected = new Set(selectedOrders);
    if (newSelected.has(orderId)) {
      newSelected.delete(orderId);
    } else {
      newSelected.add(orderId);
    }
    setSelectedOrders(newSelected);
  };

  const getStatusColor = (color: string) => {
    const colors = {
      purple: "bg-purple-500",
      green: "bg-green-500",
      lightblue: "bg-sky-400",
      yellow: "bg-yellow-400",
      gray: "bg-gray-400",
    };
    return colors[color as keyof typeof colors] || "bg-gray-400";
  };

  const getStatusTextColor = (color: string) => {
    const colors = {
      purple: "text-purple-700",
      green: "text-green-700",
      lightblue: "text-sky-600",
      yellow: "text-yellow-700",
      gray: "text-gray-600",
    };
    return colors[color as keyof typeof colors] || "text-gray-600";
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="px-6 py-6">
        <h1 className="font-semibold text-gray-900 mb-4">Order List</h1>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 bg-[#F7F9FB] py-1 px-2 rounded-lg">
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-200 cursor-pointer rounded-lg transition-colors">
              <Plus className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-200 cursor-pointer rounded-lg transition-colors">
              <PiFunnelSimpleBold className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-200 cursor-pointer rounded-lg transition-colors">
              <ArrowUpDown className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search user"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-1 bg-gray-50 border border-gray-200 rounded-md w-[160px] h-[28px]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className=" border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 w-4">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th className="text-left py-3 px-4 text-[12px] text-[#1C1C1C40]">
                  Order ID
                </th>
                <th className="text-left py-3 px-4 text-[12px] text-[#1C1C1C40]">
                  User
                </th>
                <th className="text-left py-3 px-4 text-[12px] text-[#1C1C1C40]">
                  Project
                </th>
                <th className="text-left py-3 px-4 text-[12px] text-[#1C1C1C40]">
                  Address
                </th>
                <th className="text-left py-3 px-4 text-[12px] text-[#1C1C1C40]">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-[12px] text-[#1C1C1C40]">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 w-4"></th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr
                  key={`${order.id}-${index}`}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <input
                      type="checkbox"
                      checked={selectedOrders.has(order.id)}
                      onChange={() => toggleOrderSelection(order.id)}
                      className="rounded border-gray-300 accent-black"
                    />
                  </td>
                  <td className="py-4 px-4 text-xs text-gray-900">
                    {order.id}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={order.user.avatar}
                        alt={order.user.name}
                        width={24}
                        height={24}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span className="text-xs text-nowrap text-gray-900">
                        {order.user.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs text-nowrap text-gray-900">
                    {order.project}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-nowrap text-gray-900">
                        {order.address}
                      </span>
                      {order.hasExternalLink && (
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-nowrap text-gray-900">
                        {order.date}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${getStatusColor(
                          order.status.color
                        )}`}
                      ></div>
                      <span
                        className={`text-xs text-nowrap ${getStatusTextColor(
                          order.status.color
                        )}`}
                      >
                        {order.status.text}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end space-x-1 mt-4">
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                currentPage === page
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
