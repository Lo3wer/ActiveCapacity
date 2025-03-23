"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import IssueForm from "@/components/IssueForm";
import SuccessMessage from "@/components/SuccessMessage";

const page = () => {
  const [hasSent, setHasSent] = useState(false);
  const success = () => {
    setHasSent(true);
    setTimeout(() => {
      setHasSent(false);
    }, 5000);
  };

  return (
    <div>
      <Header user={{ name: "Testing User" }} />
      <div className="flex flex-row mt-10 py-10 px-30 gap-10">
        <div className="flex-1 text-sm mt-10">
          <div className="font-bold text-lg">
            We're Sorry for the Inconvenience <br></br>
          </div>
          <br></br>
          We're sorry to hear that you've encountered an unexpected error. Our
          team is working hard to resolve the issue, and we apologize for any
          frustration this may have caused. <br></br>
          <br></br>
          To help us fix the problem as quickly as possible, please leave a
          detailed error report. This will assist our team in diagnosing and
          addressing the issue. Thank you for your patience and understanding.
        </div>
        <div className="flex-1">
          <div className="">
            <IssueForm showSuccess={success} />
          </div>
          <div className="flex justify-center items-center mt-10">
            {hasSent ? <SuccessMessage /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
