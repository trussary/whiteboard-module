import "./FixedSideContainer.scss";

import React from "react";
import clsx from "clsx";

type FixedSideContainerProps = {
  children: React.ReactNode;
  // "bottom" is EasyTeach's addition (F-22, FR-22-30): lets the toolbar
  // shell flip to the bottom edge when the teacher's saved
  // `toolbarPosition` resolves there. See
  // `specs/003-board-shell-fork/contracts/toolbar-position-contract.md`.
  side: "top" | "left" | "right" | "bottom";
  className?: string;
};

export const FixedSideContainer = ({
  children,
  side,
  className,
}: FixedSideContainerProps) => (
  <div
    className={clsx(
      "FixedSideContainer",
      `FixedSideContainer_side_${side}`,
      className,
    )}
  >
    {children}
  </div>
);
