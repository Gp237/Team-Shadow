import React, { useState } from "react";
import {
  InputField,
  InputWithLabelField,
} from "./../../components/input/index";
import Papa from "papaparse";

const Production = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  function handleCSVFile(file) {
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        console.log(results);
      },
    });
  }

  return (
    <div className="add_page">
      <div className="add_page_head">
        <h3>Basic info</h3>
        <form className="form" autoComplete="off">
          <input
            type="file"
            onChange={(e) => handleCSVFile(e.target.files[0])}
          />
          <div className="line">
            <InputWithLabelField
              type="text"
              required={true}
              label="Full Name"
            />
          </div>
          <div className="line">
            <InputWithLabelField
              type="text"
              required={true}
              label="User Name"
            />
          </div>
          <InputField
            loading={loading}
            type="button"
            onClick={handleSubmit}
            value="Continue"
            style={{ backgroundColor: "#2B3651", width: "150px" }}
          />
        </form>
      </div>
    </div>
  );
};

export default Production;
