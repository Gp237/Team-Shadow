import { Fragment } from "react";

export const Button = ({ type, value, onClick }) => {
  return (
    <Fragment>
      <button type={type} className="button" onClick={onClick}>
        {value}
      </button>
    </Fragment>
  );
};
//icon is a boolean , 
export const ButtonEmpty = ({ type, value, onClickEmpty,icon, iconsrc, style  }) => {
  return (
    <Fragment>
      <button type={type} className="button-empty" onClick={onClickEmpty} style={style}>
      {icon && <img src={iconsrc} alt="icon" />}
        {value}
      </button>
    </Fragment>
  );
};

export const ButtonPrimary = ({ type, value, onClickPrimary, icon, iconsrc }) => {
  return (
    <Fragment>
      <button type={type} className="button-primary" onClick={onClickPrimary}>
      {icon && <img src={iconsrc} alt="icon" />}
        {value}
      </button>
    </Fragment>
  );
};

//icon is a boolean , 
export const ButtonSecondary = ({ type, value, onClickSecondary, icon, iconsrc }) => {
  return (
    <Fragment>
      <button type={type} className="button-secondary" onClick={onClickSecondary}>
        {icon && <img src={iconsrc} alt="icon" />}
        {value}
      </button>
    </Fragment>
  );
};
