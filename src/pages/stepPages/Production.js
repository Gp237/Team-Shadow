import React, { useState } from "react";
import { InputField } from "./../../components/input/index";
import Papa from "papaparse";
import { addStepData } from "../../api/features/public";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Production = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isFileUp, setIsFileUp] = useState(false);

  const handleSubmit = () => {
    if (isFileUp) {
      setLoading(true);
      dispatch(addStepData(data));
      setLoading(false);
    }
  };
  function handleCSVFile(file) {
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        setData(results.data);
        setIsFileUp(true);
      },
    });
  }

  return (
    <div className="add_page">
      <div className="add_page_head">
        <form className="form" autoComplete="off">
          <input
            type="file"
            onChange={(e) => handleCSVFile(e.target.files[0])}
          />
          <Link to={isFileUp ? "/table" : "/upload"}>
            <InputField
              loading={loading}
              type="button"
              onClick={handleSubmit}
              value="Continue"
              style={{ backgroundColor: "#2B3651", width: "150px" }}
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Production;
