import { CardDetails } from "@/app/dashboard/default/page";
import Link from "next/link";
import React from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const DataCard = ({
  cardDetails,
  idx,
}: {
  cardDetails: CardDetails;
  idx: number;
}) => {
  return (
    <Link
      prefetch
      href={cardDetails.href}
      key={JSON.stringify(cardDetails) + idx}
      style={{
        backgroundColor: cardDetails.bgColor,
      }}
      className={`w-[202px] h-[112px] rounded-2xl hover:shadow-sm transition-all duration-300 ease-in-out cursor-pointer ${
        cardDetails?.className || ""
      }`}
    >
      <h6 className="font-semibold text-sm px-6 pt-6 pb-3">
        {cardDetails.title}
      </h6>
      <div className="flex items-center justify-between w-full px-6">
        <p className="font-semibold text-2xl">
          {cardDetails.isDollar && "$"}
          {cardDetails.value}
          {cardDetails?.isPercentValue && "%"}
        </p>
        <p className="text-xs font-medium flex items-center gap-2">
          <span>{cardDetails.percentage}</span>
          {cardDetails.percentage.includes("+") ? (
            <FaArrowTrendUp />
          ) : (
            <FaArrowTrendDown />
          )}
        </p>
      </div>
    </Link>
  );
};

export default DataCard;
