import React from "react";

type HeaderProps = {
  favIconUrl?: string;
  title?: string;
  url?: string;
};

const OriginHeader: React.FC<HeaderProps> = ({ favIconUrl, title, url }) => {
  // Fallback to hardcoded path if not provided

  const faviconSrc = favIconUrl || `${url}/favicon.ico`;

  return (
    <div className="flex flex-col items-center justify-center space-y-2 pt-8 pb-4">
      <img
        src={"https://jup.ag/favicon.ico"}
        alt="FavIcon"
        className="w-20 h-20 bg-gray-800 rounded-full p-2" // Added bg-gray-800 for dark background, rounded-full for circular shape, and p-2 for padding
      />

      {/* Title */}
      <span className="font-semibold">{title}</span>

      {/* URL as subtext */}
      <span className="text-sm text-center text-gray-500">{url}</span>
    </div>
  );
};

export default OriginHeader;
