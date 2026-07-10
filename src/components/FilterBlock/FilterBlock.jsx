import React from "react";
import "./FilterBlock.scss";
import { allProducts } from "/src/data/productsData";
const FilterBlock = ({ onChangeFilters, selectedFilters }) => {
  const handleArrayFilterChange = (key, value) => {
    const currentList = selectedFilters[key];
    const newList = currentList.includes(value)
      ? currentList.filter((item) => item !== value) // Remove if already present
      : [...currentList, value]; // Add if missing

    onChangeFilters({ [key]: newList });
  };
  // Helper function for simple strings (type or style)
  const handleStringFilterChange = (key, value) => {
    onChangeFilters({
      [key]: selectedFilters[key] === value ? "" : value, // Toggle selection off if clicked again
    });
  };
  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value, 10);
    const nextMin = type === "minPrice" ? value : selectedFilters.minPrice;
    const nextMax = type === "maxPrice" ? value : selectedFilters.maxPrice;
    if (nextMax - nextMin >= 100) {
      onChangeFilters({ [type]: value });
    }
  };

  const onClickClose = (e) => {
    e.target.classList.toggle("closed");
    e.target.parentElement.children[1].classList.toggle("closed");
  };
  const onFilterClickClose = () => {
    document.querySelector(".filter__container").classList.toggle("closed");
    document
      .querySelectorAll(".filter__grid")
      .forEach((el) => el.classList.toggle("closed"));
  };
  const filterCategories = ["t-shirts", "shorts", "shirts", "hoodie", "jeans"];
  /*const filterColors = [
    "#00c12b", // Green
    "#f50606", // Red
    "#f5dd06", // Yellow
    "#f57906", // orange
    "#06caf5", // Light Blue/Cyan
    "#063af5", // Dark Blue
    "#7d06f5", // Purple
    "#f506a4", // Pink/Magenta
    "#ffffff",  // White
    "#000000"  // Black
  ];*/
  const allColorsHex = [
    ...new Set(
      allProducts.flatMap((product) => product.colors.map((c) => c.color)),
    ),
  ];

  const filterSizes = [
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "3x-large",
    "4x-large",
  ];
  const filterStyles = ["casual", "formal", "party", "gym"];

  const formatSizeLabel = (size) => {
    return size
      .split("-")
      .map((part) =>
        /^\d*x+$/i.test(part)
          ? part.toUpperCase()
          : part.charAt(0).toUpperCase() + part.slice(1),
      )
      .join("-");
  };
  return (
    <aside className="filter">
      <header className="filter__header">
        <h2 className="filter__heading">Filters</h2>
        <button className="filter__toggle" onClick={onFilterClickClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.125 11.625V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V11.625C10.875 11.3266 10.9935 11.0405 11.2045 10.8295C11.4155 10.6185 11.7016 10.5 12 10.5C12.2984 10.5 12.5845 10.6185 12.7955 10.8295C13.0065 11.0405 13.125 11.3266 13.125 11.625ZM18.75 18C18.4516 18 18.1655 18.1185 17.9545 18.3295C17.7435 18.5405 17.625 18.8266 17.625 19.125V20.25C17.625 20.5484 17.7435 20.8345 17.9545 21.0455C18.1655 21.2565 18.4516 21.375 18.75 21.375C19.0484 21.375 19.3345 21.2565 19.5455 21.0455C19.7565 20.8345 19.875 20.5484 19.875 20.25V19.125C19.875 18.8266 19.7565 18.5405 19.5455 18.3295C19.3345 18.1185 19.0484 18 18.75 18ZM21 14.25H19.875V3.75C19.875 3.45163 19.7565 3.16548 19.5455 2.9545C19.3345 2.74353 19.0484 2.625 18.75 2.625C18.4516 2.625 18.1655 2.74353 17.9545 2.9545C17.7435 3.16548 17.625 3.45163 17.625 3.75V14.25H16.5C16.2016 14.25 15.9155 14.3685 15.7045 14.5795C15.4935 14.7905 15.375 15.0766 15.375 15.375C15.375 15.6734 15.4935 15.9595 15.7045 16.1705C15.9155 16.3815 16.2016 16.5 16.5 16.5H21C21.2984 16.5 21.5845 16.3815 21.7955 16.1705C22.0065 15.9595 22.125 15.6734 22.125 15.375C22.125 15.0766 22.0065 14.7905 21.7955 14.5795C21.5845 14.3685 21.2984 14.25 21 14.25ZM5.25 15C4.95163 15 4.66548 15.1185 4.4545 15.3295C4.24353 15.5405 4.125 15.8266 4.125 16.125V20.25C4.125 20.5484 4.24353 20.8345 4.4545 21.0455C4.66548 21.2565 4.95163 21.375 5.25 21.375C5.54837 21.375 5.83452 21.2565 6.0455 21.0455C6.25647 20.8345 6.375 20.5484 6.375 20.25V16.125C6.375 15.8266 6.25647 15.5405 6.0455 15.3295C5.83452 15.1185 5.54837 15 5.25 15ZM7.5 11.25H6.375V3.75C6.375 3.45163 6.25647 3.16548 6.0455 2.9545C5.83452 2.74353 5.54837 2.625 5.25 2.625C4.95163 2.625 4.66548 2.74353 4.4545 2.9545C4.24353 3.16548 4.125 3.45163 4.125 3.75V11.25H3C2.70163 11.25 2.41548 11.3685 2.2045 11.5795C1.99353 11.7905 1.875 12.0766 1.875 12.375C1.875 12.6734 1.99353 12.9595 2.2045 13.1705C2.41548 13.3815 2.70163 13.5 3 13.5H7.5C7.79837 13.5 8.08452 13.3815 8.2955 13.1705C8.50647 12.9595 8.625 12.6734 8.625 12.375C8.625 12.0766 8.50647 11.7905 8.2955 11.5795C8.08452 11.3685 7.79837 11.25 7.5 11.25ZM14.25 6.75H13.125V3.75C13.125 3.45163 13.0065 3.16548 12.7955 2.9545C12.5845 2.74353 12.2984 2.625 12 2.625C11.7016 2.625 11.4155 2.74353 11.2045 2.9545C10.9935 3.16548 10.875 3.45163 10.875 3.75V6.75H9.75C9.45163 6.75 9.16548 6.86853 8.9545 7.0795C8.74353 7.29048 8.625 7.57663 8.625 7.875C8.625 8.17337 8.74353 8.45952 8.9545 8.6705C9.16548 8.88147 9.45163 9 9.75 9H14.25C14.5484 9 14.8345 8.88147 15.0455 8.6705C15.2565 8.45952 15.375 8.17337 15.375 7.875C15.375 7.57663 15.2565 7.29048 15.0455 7.0795C14.8345 6.86853 14.5484 6.75 14.25 6.75Z"
              fill="black"
              fill-opacity="0.4"
            />
          </svg>
        </button>
      </header>
      <div className="filter__container">
        <div className="filter__section">
          <div className="filter__grid filter__grid-categories">
            {filterCategories.map((category, index) => (
              <button
                key={category}
                style={{ "--i": index }}
                className={selectedFilters.type === category ? "active" : ""}
                onClick={() => handleStringFilterChange("type", category)}
              >
                {category}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.53073 2.46937L11.5307 7.46937C11.6007 7.53905 11.6561 7.62184 11.694 7.71301C11.7318 7.80417 11.7513 7.90191 11.7513 8.00062C11.7513 8.09933 11.7318 8.19707 11.694 8.28824C11.6561 8.3794 11.6007 8.46219 11.5307 8.53187L6.53073 13.5319C6.38984 13.6728 6.19874 13.7519 5.99948 13.7519C5.80023 13.7519 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0006C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8L5.46761 3.53062C5.32671 3.38973 5.24756 3.19863 5.24756 2.99937C5.24756 2.80011 5.32671 2.60902 5.46761 2.46812C5.60851 2.32723 5.7996 2.24807 5.99886 2.24807C6.19812 2.24807 6.38921 2.32723 6.53011 2.46812L6.53073 2.46937Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "100%",
            height: "0",
          }}
        ></div>

        <div className="filter__section">
          <button className="filter__title" onClick={(e) => onClickClose(e)}>
            Price
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.4694 9.46939L7.4694 4.46939C7.53908 4.39947 7.62188 4.34399 7.71304 4.30614C7.8042 4.26828 7.90194 4.2488 8.00065 4.2488C8.09936 4.2488 8.1971 4.26828 8.28827 4.30614C8.37943 4.34399 8.46223 4.39947 8.5319 4.46939L13.5319 9.46939C13.6728 9.61028 13.752 9.80138 13.752 10.0006C13.752 10.1999 13.6728 10.391 13.5319 10.5319C13.391 10.6728 13.1999 10.7519 13.0007 10.7519C12.8014 10.7519 12.6103 10.6728 12.4694 10.5319L8.00003 6.06251L3.53065 10.5325C3.38976 10.6734 3.19866 10.7526 2.9994 10.7526C2.80015 10.7526 2.60905 10.6734 2.46815 10.5325C2.32726 10.3916 2.2481 10.2005 2.2481 10.0013C2.2481 9.80201 2.32726 9.61091 2.46815 9.47001L2.4694 9.46939Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="filter__grid filter__grid-price">
            <div className="filter__price-track">
              <div
                className="filter__price-fill"
                style={{
                  left: `${(selectedFilters.minPrice / 500) * 100}%`,
                  right: `${100 - (selectedFilters.maxPrice / 500) * 100}%`,
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="400"
                value={selectedFilters.minPrice}
                onChange={(e) => handlePriceChange(e, "minPrice")}
                className="filter__price-thumb filter__price-thumb--left"
              />
              <input
                type="range"
                min="100"
                max="500"
                value={selectedFilters.maxPrice}
                onChange={(e) => handlePriceChange(e, "maxPrice")}
                className="filter__price-thumb filter__price-thumb--right"
              />
            </div>

            <div className="filter__price-labels">
              <span
                style={{ left: `${(selectedFilters.minPrice / 500) * 100}%` }}
              >
                ${selectedFilters.minPrice}
              </span>
              <span
                style={{ left: `${(selectedFilters.maxPrice / 500) * 100}%` }}
              >
                ${selectedFilters.maxPrice}
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "100%",
            height: "0",
          }}
        ></div>

        <div className="filter__section">
          <button className="filter__title" onClick={(e) => onClickClose(e)}>
            Colors
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.4694 9.46939L7.4694 4.46939C7.53908 4.39947 7.62188 4.34399 7.71304 4.30614C7.8042 4.26828 7.90194 4.2488 8.00065 4.2488C8.09936 4.2488 8.1971 4.26828 8.28827 4.30614C8.37943 4.34399 8.46223 4.39947 8.5319 4.46939L13.5319 9.46939C13.6728 9.61028 13.752 9.80138 13.752 10.0006C13.752 10.1999 13.6728 10.391 13.5319 10.5319C13.391 10.6728 13.1999 10.7519 13.0007 10.7519C12.8014 10.7519 12.6103 10.6728 12.4694 10.5319L8.00003 6.06251L3.53065 10.5325C3.38976 10.6734 3.19866 10.7526 2.9994 10.7526C2.80015 10.7526 2.60905 10.6734 2.46815 10.5325C2.32726 10.3916 2.2481 10.2005 2.2481 10.0013C2.2481 9.80201 2.32726 9.61091 2.46815 9.47001L2.4694 9.46939Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="filter__grid filter__grid-colors">
            {allColorsHex.map((color, index) => (
              <button
                key={color}
                style={{ backgroundColor: color, "--i": index }}
                className={
                  selectedFilters.colors.includes(color) ? "active" : ""
                }
                onClick={() => handleArrayFilterChange("colors", color)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5306 5.03063L6.5306 13.0306C6.46092 13.1005 6.37813 13.156 6.28696 13.1939C6.1958 13.2317 6.09806 13.2512 5.99935 13.2512C5.90064 13.2512 5.8029 13.2317 5.71173 13.1939C5.62057 13.156 5.53778 13.1005 5.4681 13.0306L1.9681 9.53063C1.89833 9.46087 1.84299 9.37804 1.80524 9.28689C1.76748 9.19574 1.74805 9.09804 1.74805 8.99938C1.74805 8.90072 1.76748 8.80302 1.80524 8.71187C1.84299 8.62072 1.89833 8.53789 1.9681 8.46813C2.03786 8.39837 2.12069 8.34302 2.21184 8.30527C2.30299 8.26751 2.40069 8.24808 2.49935 8.24808C2.59801 8.24808 2.69571 8.26751 2.78686 8.30527C2.87801 8.34302 2.96083 8.39837 3.0306 8.46813L5.99997 11.4375L13.4693 3.96938C13.6102 3.82848 13.8013 3.74933 14.0006 3.74933C14.1999 3.74933 14.391 3.82848 14.5318 3.96938C14.6727 4.11028 14.7519 4.30137 14.7519 4.50063C14.7519 4.69989 14.6727 4.89098 14.5318 5.03188L14.5306 5.03063Z"
                    fill="white"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "100%",
            height: "0",
          }}
        ></div>

        <div className="filter__section">
          <button className="filter__title" onClick={(e) => onClickClose(e)}>
            Size
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.4694 9.46939L7.4694 4.46939C7.53908 4.39947 7.62188 4.34399 7.71304 4.30614C7.8042 4.26828 7.90194 4.2488 8.00065 4.2488C8.09936 4.2488 8.1971 4.26828 8.28827 4.30614C8.37943 4.34399 8.46223 4.39947 8.5319 4.46939L13.5319 9.46939C13.6728 9.61028 13.752 9.80138 13.752 10.0006C13.752 10.1999 13.6728 10.391 13.5319 10.5319C13.391 10.6728 13.1999 10.7519 13.0007 10.7519C12.8014 10.7519 12.6103 10.6728 12.4694 10.5319L8.00003 6.06251L3.53065 10.5325C3.38976 10.6734 3.19866 10.7526 2.9994 10.7526C2.80015 10.7526 2.60905 10.6734 2.46815 10.5325C2.32726 10.3916 2.2481 10.2005 2.2481 10.0013C2.2481 9.80201 2.32726 9.61091 2.46815 9.47001L2.4694 9.46939Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="filter__grid filter__grid-sizes">
            {filterSizes.map((size, index) => (
              <button
                key={size}
                style={{ "--i": index }}
                className={selectedFilters.sizes.includes(size) ? "active" : ""}
                onClick={() => handleArrayFilterChange("sizes", size)}
              >
                {formatSizeLabel(size)}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "100%",
            height: "0",
          }}
        ></div>

        <div className="filter__section">
          <button className="filter__title" onClick={(e) => onClickClose(e)}>
            Styles
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.4694 9.46939L7.4694 4.46939C7.53908 4.39947 7.62188 4.34399 7.71304 4.30614C7.8042 4.26828 7.90194 4.2488 8.00065 4.2488C8.09936 4.2488 8.1971 4.26828 8.28827 4.30614C8.37943 4.34399 8.46223 4.39947 8.5319 4.46939L13.5319 9.46939C13.6728 9.61028 13.752 9.80138 13.752 10.0006C13.752 10.1999 13.6728 10.391 13.5319 10.5319C13.391 10.6728 13.1999 10.7519 13.0007 10.7519C12.8014 10.7519 12.6103 10.6728 12.4694 10.5319L8.00003 6.06251L3.53065 10.5325C3.38976 10.6734 3.19866 10.7526 2.9994 10.7526C2.80015 10.7526 2.60905 10.6734 2.46815 10.5325C2.32726 10.3916 2.2481 10.2005 2.2481 10.0013C2.2481 9.80201 2.32726 9.61091 2.46815 9.47001L2.4694 9.46939Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="filter__grid filter__grid-styles">
            {filterStyles.map((style, index) => (
              <button
                key={style}
                style={{ "--i": index }}
                className={selectedFilters.style === style ? "active" : ""}
                onClick={() => handleStringFilterChange("style", style)}
              >
                {style}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.53073 2.46937L11.5307 7.46937C11.6007 7.53905 11.6561 7.62184 11.694 7.71301C11.7318 7.80417 11.7513 7.90191 11.7513 8.00062C11.7513 8.09933 11.7318 8.19707 11.694 8.28824C11.6561 8.3794 11.6007 8.46219 11.5307 8.53187L6.53073 13.5319C6.38984 13.6728 6.19874 13.7519 5.99948 13.7519C5.80023 13.7519 5.60913 13.6728 5.46823 13.5319C5.32734 13.391 5.24818 13.1999 5.24818 13.0006C5.24818 12.8014 5.32734 12.6103 5.46823 12.4694L9.93761 8L5.46761 3.53062C5.32671 3.38973 5.24756 3.19863 5.24756 2.99937C5.24756 2.80011 5.32671 2.60902 5.46761 2.46812C5.60851 2.32723 5.7996 2.24807 5.99886 2.24807C6.19812 2.24807 6.38921 2.32723 6.53011 2.46812L6.53073 2.46937Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterBlock;
