import React from "react";

interface Props {
  onFilter: (color: string) => void;
}

const Filter: React.FC<Props> = ({ onFilter }) => {
  return (
    <div className="filter">
      <label htmlFor="colorFilter">Color filter: </label>
      <select id="colorFilter" onChange={(e) => onFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Black">Black</option>
        <option value="Stone">Stone</option>
        <option value="Red">Red</option>
      </select>
    </div>
  );
};

export default Filter;
