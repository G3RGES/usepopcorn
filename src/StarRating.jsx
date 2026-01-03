import React from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const starStyle = {
  //   fontSize: "24px",
  cursor: "pointer",
};

const textStyle = {
  lineHeight: "0",
  margin: "1",
};

const StarRating = ({ maxRating = 5 }) => {
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span style={starStyle} key={i} role="img" aria-label="star">
            ⭐
          </span>
        ))}
      </div>
      <p style={textStyle}>10</p>
    </div>
  );
};

export default StarRating;
