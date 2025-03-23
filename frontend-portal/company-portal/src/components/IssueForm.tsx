"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const IssueForm = ({ showSuccess }: { showSuccess: () => void }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    showSuccess();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white max-w-sm mx-auto"
    >
      <div className="flex flex-col">
        <Label htmlFor="email" className="my-4">
          Complaint
        </Label>
        <Textarea
          id="message"
          className="min-h-60 min-w-100 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter the issue"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white"
        variant={"outline"}
      >
        Submit
      </Button>
    </form>
  );
};

export default IssueForm;
