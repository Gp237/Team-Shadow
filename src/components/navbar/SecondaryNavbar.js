import React from "react";
import { Link } from "react-router-dom";
import { arrow_left, import_icon } from "../../assets/icon";
import { ButtonEmpty, ButtonPrimary } from "../button";

const SecondaryNavbar = ({
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
  onClickPrimary
}) => {
  return (
    <div id="secondary_navbar">
      <h1>
        {title}
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

export default SecondaryNavbar;
