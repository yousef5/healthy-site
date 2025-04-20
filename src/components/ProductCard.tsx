import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface ProductCardProps {
  productName: string;
  imageSrc: string;
  altText: string;
  ownerName?: string;
  ownerImage?: string;
  username?: string;
  lastSoldPrice?: string;
  currency?: string;
  isDarkMode?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  url?: string;
}

export const ProductCard = ({
  productName,
  imageSrc,
  altText,
  ownerName,
  ownerImage,
  username,
  lastSoldPrice,
  currency = "ETH",
  isDarkMode = false,
  imageWidth = 400, // Default extra large size
  imageHeight = 400, // Default extra large size
  url,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Theme-aware classes
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const cardBorder = isDarkMode ? "border-gray-700" : "border-gray-100";
  const imageBg = isDarkMode
    ? "bg-gradient-to-b from-gray-800 to-gray-900"
    : "bg-gradient-to-b from-white to-gray-50";
  const headingText = isDarkMode ? "text-gray-100" : "text-gray-800";
  const captionText = isDarkMode ? "text-gray-400" : "text-gray-500";
  const usernameText = isDarkMode ? "text-green-400" : "text-green-500";
  const ownerText = isDarkMode ? "text-gray-300" : "text-gray-600";
  const priceText = isDarkMode ? "text-gray-100" : "text-gray-800";
  const shadowClass = isDarkMode
    ? isHovered
      ? "shadow-lg shadow-indigo-500/20"
      : "shadow-md shadow-indigo-500/10"
    : isHovered
    ? "shadow-lg"
    : "shadow-md";

  // Fixed card width - card itself stays the same size
  const cardWidth = 320;

  const cardContent = (
    <div
      className={`${cardBg} rounded-xl ${shadowClass} overflow-visible flex flex-col border ${cardBorder} transition-all duration-300 relative cursor-pointer`}
      style={{ width: `${cardWidth}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main image area with shadow effect - with overflow visible */}
      <div
        className={`${imageBg} flex justify-center items-center relative overflow-visible`}
        style={{ height: "320px" }}
      >
        {/* Image container that can extend beyond card boundaries */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${
            isHovered ? "scale-105" : ""
          }`}
          style={{
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
          }}
        >
          <Image
            src={imageSrc}
            alt={altText}
            fill
            style={{ objectFit: "contain" }}
            priority
            sizes="(max-width: 768px) 100vw, 500px"
            className={`transition-all duration-300 ${
              isHovered
                ? isDarkMode
                  ? "drop-shadow-[0_15px_30px_rgba(99,102,241,0.5)]"
                  : "drop-shadow-2xl"
                : isDarkMode
                ? "drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]"
                : "drop-shadow-xl"
            }`}
          />
        </div>

        {/* Background gradient that stays within card boundaries */}
        <div className="absolute inset-0 z-0"></div>
      </div>

      {/* Content area */}
      <div
        className={`p-4 border-t ${cardBorder} relative z-20 bg-opacity-90 ${cardBg}`}
      >
        {/* Creator info */}
        {username && (
          <div className="flex items-center mb-3">
            {ownerImage && (
              <div className="relative w-8 h-8 mr-2">
                <Image
                  src={ownerImage}
                  alt={`${ownerName || "Owner"}'s profile`}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            )}
            <div>
              <span className={`text-sm ${ownerText}`}>
                {ownerName || "Anonymous"}
              </span>
              <p className={`text-xs ${usernameText}`}>{username}</p>
            </div>
          </div>
        )}

        {/* Item name */}
        <h3 className={`text-xl font-semibold ${headingText} mb-3`}>
          {productName}
        </h3>

        {/* Price info */}
        <div
          className={`border-t ${cardBorder} pt-3 flex justify-between items-center`}
        >
          <div>
            <span className={`text-xs ${captionText}`}>Last Sold for</span>
            <p className={`text-lg font-medium ${priceText}`}>
              {lastSoldPrice || "0.00"} {currency}
            </p>
          </div>

          {ownerName && (
            <div className="text-right">
              <span className={`text-xs ${captionText}`}>Owned By</span>
              <div className="flex items-center justify-end mt-1">
                {ownerImage && (
                  <div className="relative w-6 h-6 mr-1">
                    <Image
                      src={ownerImage}
                      alt={`${ownerName}'s profile`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <span className={`text-sm ${ownerText}`}>{ownerName}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // If URL is provided, wrap the card in a Link
  if (url) {
    return <Link href={url}>{cardContent}</Link>;
  }

  // Otherwise, return just the card
  return cardContent;
};
