import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStep } from "../../api/features/public";

export const PrimaryStep = ({stepHeaders, canClickForward, title}) => {
  const { currentStep } = useSelector((state) => state.public);
  const dispatch = useDispatch();

  return (
    <div className="step_box">
      <h2>{title}</h2>
      <ul>
        {stepHeaders.map((el) => (
          <Fragment key={el.step}>
            <li
              className={
                currentStep === el.step || currentStep > el.step
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() => {(canClickForward || currentStep > el.step) && dispatch(updateStep(el.step))}}
            >
              <div className="step_number">{el.step + 1}</div>
              <span className="step_description">{el.title}</span>
            </li>
            <div className="divider"></div>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
export const UpdatePrimaryStep = ({stepHeaders, canClickForward, title}) => {
  const { currentStep } = useSelector((state) => state.public);
  const dispatch = useDispatch();

  return (
    <div className="step_box">
      <h2>{title}</h2>
      <ul>
        {stepHeaders.map((el) => (
          <Fragment key={el.step}>
            <li
              className={
                currentStep === el.step
                  ? "nav-item active"
                  : "nav-item"
              }
              onClick={() => {(canClickForward) && dispatch(updateStep(el.step))}}
            >
              <div className="step_number">{el.step + 1}</div>
              <span className="step_description">{el.title}</span>
            </li>
            <div className="divider"></div>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};
