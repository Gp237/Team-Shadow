import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PrimaryStep } from "../components/step";
import { Production, Table } from "./stepPages";

const stepHeaders = [
  {
    step: 0,
    title: "Upload file",
  },
  {
    step: 1,
    title: "Grossite",
  },
  {
    step: 2,
    title: "Commercant",
  },
  {
    step: 3,
    title: "Consommateur",
  },
];
const Simulator = () => {
  const { currentStep } = useSelector((state) => state.public);
  const [pageSelected, setPageSelected] = useState(<Production />);

  useEffect(() => {
    switch (currentStep) {
      case 1:
        return setPageSelected(<Production />);
      case 2:
        return setPageSelected(<Table />);

      default:
        setPageSelected(<Production />);
    }
  }, [currentStep]);
  return (
    <div id="simulator">
      <div className="pages">
        {/* <PrimaryStep
          stepHeaders={stepHeaders}
          canClickForward={false}
          // title={"Follow these steps to make a simulation"}
        /> */}
        {pageSelected}
      </div>
    </div>
  );
};

export default Simulator;
