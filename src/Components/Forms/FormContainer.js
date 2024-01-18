import React from "react";

export default function FormContainer({ children, onSubmit }) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        {children}
      </form>
    </div>
  );
}
