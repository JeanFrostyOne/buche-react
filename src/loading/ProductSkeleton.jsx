import { Skeleton } from "@mui/material";
import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="product">
      <div className="product-wrapper">
        <Skeleton variant="rounded" width={200} height={150} />

        <div className="product-cart">
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M6.863 8.5a.75.75 0 01-.75-.75V5.512c-.265.009-.49.024-.687.05-.437.057-.63.156-.758.278-.13.122-.24.308-.324.74-.087.454-.125 1.064-.18 1.976l-.426 7.12c-.03.518-.048.83-.03 1.054a.723.723 0 00.034.19v.001l.002.001.01.005c.024.01.075.027.177.04.223.031.535.033 1.055.033h5.68c.04.047.084.094.129.139l1.366 1.361H4.94c-.458 0-.876 0-1.213-.046-.37-.051-.763-.171-1.076-.504-.314-.333-.41-.732-.439-1.104-.026-.34-.001-.757.026-1.214l.003-.046.426-7.12.003-.05c.05-.848.093-1.557.201-2.12.115-.594.32-1.125.768-1.548.448-.422.992-.595 1.592-.674.283-.037.601-.055.955-.065a3.751 3.751 0 017.354 0c.354.01.672.028.955.065.6.08 1.144.252 1.592.674.448.423.653.954.768 1.549.108.562.15 1.271.2 2.12l.004.05.156 2.612-1.418 1.413-.236-3.936c-.054-.912-.092-1.522-.18-1.976-.083-.432-.193-.618-.323-.74s-.321-.221-.758-.278a7.165 7.165 0 00-.687-.05V7.75a.75.75 0 01-1.5 0V5.5h-4.5v2.25a.75.75 0 01-.75.75zm7.314 8.5h.563c.52 0 .832-.002 1.055-.032a.724.724 0 00.176-.04l.01-.006h.002l.001-.002a.727.727 0 00.034-.19c.017-.224 0-.536-.03-1.055l-.032-.518 1.419-1.413.105 1.765-2.318 2.311a.591.591 0 01-.85 0l-.135-.82zM9.863 2.5c.98 0 1.813.626 2.122 1.5H7.74a2.251 2.251 0 012.122-1.5z"
            ></path>
            <path
              clip-rule="evenodd"
              d="M19.836 12.227a.74.74 0 01-.043.978l-4.631 4.615a.591.591 0 01-.85 0l-2.105-2.098a.74.74 0 01-.043-.978.593.593 0 01.892-.046l1.68 1.674 4.208-4.192a.593.593 0 01.892.047z"
            ></path>
          </svg>
        </div>
        <div className="product-tags">
          <Skeleton variant="rectangular" width={80} height={18} />
          <Skeleton variant="rectangular" width={80} height={18} />
        </div>
      </div>
      <div className="product-info__container">
        <h3 className="product-header">
          <Skeleton variant="text" sx={{ fontSize: "19px", width: "200px" }} />
        </h3>
        <div className="product-info">
          <p className="product-price">
            <Skeleton variant="text" sx={{ fontSize: "13px", width: "40px" }} />
          </p>
          <p className="product-weight">
            <Skeleton variant="text" sx={{ fontSize: "11px", width: "30px" }} />
          </p>
        </div>
      </div>
    </div>
  );
}
