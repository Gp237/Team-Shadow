import React from "react";
import { Link } from "react-router-dom";
import { arrow_left, import_icon } from "../../assets/icon";
import { ButtonEmpty, ButtonPrimary } from "../button";

const VendorProductionNavBar = ({
  title,
  primary,
  empty,
  primaryValue,
  linkEmptyButton,
  emptyValue,
  secondaryTitle,
  secondaryTitleValue,
  emptyIcon,
  primaryIcon,
  onClickPrimary,
  avatarHeader,
  avatar,
}) => {
  return (
    <div id="secondary_navbar">
      <h1 style={{ display: "flex", alignItems: "center" }}>
        {avatarHeader && (
          <div
            className="product__infos"
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <div className="img_box">
              <img
                src={avatar?.secure_url}
                alt="product_image"
                style={{ objectFit: "cover" }}
              />
            </div>
            <span
              style={{ color: "#141522", fontWeight: "600", fontSize: "32px" }}
            >
              {title}
            </span>
          </div>
        )}
        {secondaryTitle && (
          <span
            style={{
              color: "#9C9CA4",
              fontSize: "24px",
              marginLeft: "20px",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            {secondaryTitleValue}
          </span>
        )}
      </h1>
      <div className="options">
        {empty && (
          <Link to={linkEmptyButton}>
            <ButtonEmpty
              type="button"
              value={emptyValue}
              icon={emptyIcon}
              iconsrc={arrow_left}
            />
          </Link>
        )}
        {primary && (
          <ButtonPrimary
            onClickPrimary={onClickPrimary}
            type="button"
            icon={primaryIcon}
            value={primaryValue}
            iconsrc={import_icon}
          />
        )}
      </div>
    </div>
  );
};

export default VendorProductionNavBar;
