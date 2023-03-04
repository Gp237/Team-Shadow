import React from "react";
import { Link } from "react-router-dom";
import { importIcon } from "../../assets/icon";
import { ButtonEmpty, ButtonPrimary, ButtonSecondary } from "../button";
import { CSVLink } from "react-csv";

const Navbar = ({
  title,
  secondary,
  primary,
  empty,
  exportcsv,
  csvData,
  csvHeaders,
  csvFileName,
  primaryValue,
  linkPrimaryButton,
  linkEmptyButton,
  secondaryValue,
  emptyValue,
}) => {
  return (
    <div id="navbar">
      <h1>{title}</h1>
      <div className="options">
        {secondary && (
          <ButtonSecondary
            type="button"
            value={secondaryValue}
            icon={true}
            iconsrc={importIcon}
          />
        )}
        {exportcsv && (
          <CSVLink
            data={csvData}
            headers={csvHeaders}
            filename={csvFileName}
            target="_blank"
          >
            <ButtonSecondary
              type="button"
              value={secondaryValue}
              icon={true}
              iconsrc={importIcon}
            />
          </CSVLink>
        )}
        {primary && (
          <Link to={linkPrimaryButton}>
            <ButtonPrimary
              type="button"
              value={primaryValue}
              iconsrc={importIcon}
            />
          </Link>
        )}
        {empty && (
          <Link to={linkEmptyButton}>
            <ButtonEmpty
              type="button"
              value={emptyValue}
              iconsrc={importIcon}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
