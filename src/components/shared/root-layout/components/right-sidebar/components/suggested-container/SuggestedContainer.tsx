import React from "react";
import { SuggestedContainerProps } from "./SuggestedContainer.types";

function SuggestedContainer({suggestedTitle}:SuggestedContainerProps) {
  return (
    <div className="flex flex-1 flex-col justify-start">
      <h3 className="text-heading4-medium text-light-1">{suggestedTitle}</h3>
    </div>
  );
}

export default SuggestedContainer;
