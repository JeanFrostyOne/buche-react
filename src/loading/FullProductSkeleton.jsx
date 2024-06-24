import { Skeleton } from "@mui/material";
import React from "react";

export default function FullProductSkeleton() {
  return (
    <div>
      <div>
        <div className="fp-body">
          <div className="fp-gallery">
            <Skeleton variant="rectangular" width={570} height={427} />
          </div>
          <div className="fp-info">
            <h3 className="fp-title">
              <Skeleton variant="text" sx={{ fontSize: "19px" }} />
            </h3>
            <p className="fp-text">
              <Skeleton variant="text" sx={{ fontSize: "16px" }} />
            </p>
            <div>
              <div className="fp-dropdown__top">
                <p className="fp-dropdown__text">
                  <Skeleton variant="text" sx={{ fontSize: "20px" }} />
                </p>
              </div>
              <div className="fp-dropdown__body"></div>
            </div>
            <div>
              <div className="fp-dropdown__top">
                <p className="fp-dropdown__text">
                  {" "}
                  <Skeleton variant="text" sx={{ fontSize: "20px" }} />
                </p>
              </div>
            </div>
            <Skeleton variant="rectangular" width={600} height={29} />
          </div>
        </div>
      </div>
    </div>
  );
}
