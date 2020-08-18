import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="cart"
      speed={2}
      width={280}
      height={434}
      viewBox="0 0 280 434"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="135" cy="110" r="110" />
      <rect x="0" y="245" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="291" rx="10" ry="10" width="280" height="83" />
      <rect x="122" y="323" rx="0" ry="0" width="16" height="7" />
      <rect x="150" y="393" rx="19" ry="19" width="130" height="42" />
      <rect x="191" y="412" rx="0" ry="0" width="20" height="3" />
      <rect x="0" y="399" rx="6" ry="6" width="103" height="27" />
      <rect x="73" y="413" rx="0" ry="0" width="5" height="6" />
    </ContentLoader>
  );
}

export default LoadingBlock;
