import React from "react";

interface Props {
  total: number;
}

const Total: React.FC<Props> = ({ total }) => {
  return (
    <div className="total">
      <h2>Total: £{total.toFixed(2)}</h2>
    </div>
  );
};

export default Total;
