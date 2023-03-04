import React, { useState } from "react";
import { InputField } from "./../../components/input/index";
import Papa from "papaparse";
import { addStepData, updateStep } from "../../api/features/public";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Production = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { currentStep } = useSelector((state) => state.public);
  const [data, setData] = useState([]);
  const [isFileUp, setIsFileUp] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    dispatch(addStepData(data));
    dispatch(updateStep(currentStep + 1));
    setLoading(false);
  };
  function handleCSVFile(file) {
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        setData(results);
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
          <Link to={isFileUp ? "/table" : "/simulator"}>
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
