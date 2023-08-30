import React from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { HiOutlineDuplicate } from "react-icons/hi";

import useCopyClipboard from "../../hooks/useCopyClipboard";

const CopyHelper = ({ className, toCopy, children }) => {
  const [isCopied, setCopied] = useCopyClipboard();

  return (
    <div className={className} onClick={() => setCopied(toCopy)}>
      {isCopied && (
        <div>
          {children}
          <AiOutlineCopy />
        </div>
      )}

      {!isCopied && (
        <div>
          {children}
          <HiOutlineDuplicate color="white" />
        </div>
      )}
    </div>
  );
};

export default CopyHelper;
