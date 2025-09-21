import BarGraphCard from "@/components/defaultPageComponents/BarGraphCard";
import DataCard from "@/components/defaultPageComponents/DataCard";
import RevenueByLocation from "@/components/defaultPageComponents/RevenueByLocation";
import RevenueChart from "@/components/defaultPageComponents/RevenueChart";
import TopSellingProducts from "@/components/defaultPageComponents/TopSellingProducts";
import TotalSales from "@/components/defaultPageComponents/TotalSales";
import React from "react";

export type CardDetails = {
  title: string;
  value: string;
  percentage: string;
  isDollar: boolean;
  isPercentValue: boolean;
  bgColor: string;
  href: string;
  className?: string;
};
const Default = () => {
  const dataCards: CardDetails[] = [
    {
      title: "Customers",
      value: "3781",
      percentage: "+11.01%",
      isDollar: false,
      isPercentValue: false,
      bgColor: "#E3F5FF",
      href: "/dashboard/default/customers",
      className: "dark:text-black",
    },
    {
      title: "Orders",
      value: "1219",
      percentage: "-0.03%",
      isDollar: false,
      isPercentValue: false,
      bgColor: "#C0CEDB20",
      href: "/dashboard/default/order-list",
    },
    {
      title: "Revenue",
      value: "695",
      percentage: "+15.03%",
      isDollar: true,
      isPercentValue: false,
      bgColor: "#C0CEDB20",
      href: "/dashboard/default/revenue",
    },
    {
      title: "Growth",
      value: "30.1",
      percentage: "+6.08%",
      isDollar: false,
      isPercentValue: true,
      bgColor: "#E5ECF6",
      href: "/dashboard/default/growth",
      className: "dark:text-black",
    },
  ];

  return (
    <div className="h-full w-full">
      <h1 className="font-semibold mb-4">eCommerce</h1>
      <div className="w-full">
        {/* First flex box */}
        <div className="flex">
          <div className="flex-1 grid grid-cols-2 space-x-6 space-y-6">
            {dataCards?.map((cardDetails, idx) => (
              <DataCard key={idx} cardDetails={cardDetails} idx={idx} />
            ))}
          </div>
          <div className="flex-1">
            <BarGraphCard />
          </div>
        </div>

        {/* Second flex box */}
        <div className="flex gap-4">
          <div className="flex-3">
            <RevenueChart />
          </div>
          <div className="flex-1">
            <RevenueByLocation />
          </div>
        </div>

        {/* Third flex box */}
        <div className="flex gap-4 mt-4">
          <div className="flex-3">
            <TopSellingProducts />
          </div>
          <div className="flex-1">
            <TotalSales />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
