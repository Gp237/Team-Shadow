import React, { Fragment } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import icon from "./../../assets/icon/index";

export const InputField = ({
  type,
  loading,
  value,
  style,
  onClick,
  onChange,
}) => {
  return (
    <Fragment>
      {loading ? (
        <div className="loader" style={style}>
          <ClipLoader color="#FFF" />
        </div>
      ) : (
        <input
          style={style}
          type={type}
          alt="input_field"
          value={value}
          className="input_submit_field"
          onClick={onClick}
          onChange={onChange}
        />
      )}
    </Fragment>
  );
};
export const InputWithLabelField = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  required,
  disabled,
}) => {
  return (
    <Fragment>
      <label>{label}</label>
      <input
        type={type}
        alt="input_field"
        className="input_field"
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        min="0"
      />
    </Fragment>
  );
};
export const TextAreaWithLabelField = ({
  label,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  rows,
}) => {
  return (
    <Fragment>
      <label>{label}</label>
      <textarea
        rows={rows}
        className="textarea_input"
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      ></textarea>
    </Fragment>
  );
};

export const CurrentPasswordWithLabelField = ({
  type,
  label,
  value,
  onChange,
  placeholder,
}) => {
  const [currentPasswordShow, setCurrentPasswordShow] = React.useState(false);

  //--------------------- SEE PASSWORD FEATURE ---------------------------//
  const seePassword = () => {
    let x = document.getElementById("current_password_field");
    if (x.type === "password") {
      x.type = "text";
      setCurrentPasswordShow(true);
    } else {
      x.type = "password";
      setCurrentPasswordShow(false);
    }
  };

  return (
    <Fragment>
      <label>{label}</label>
      <div className="line_password">
        <input
          type={type}
          alt="password_field"
          id="current_password_field"
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />
        {currentPasswordShow ? (
          <icon.AiOutlineEyeInvisible
            className="eye_icon"
            onClick={seePassword}
          />
        ) : (
          <icon.AiOutlineEye className="eye_icon" onClick={seePassword} />
        )}
      </div>
    </Fragment>
  );
};
export const PasswordWithLabelField = ({
  type,
  label,
  value,
  onChange,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  //--------------------- SEE PASSWORD FEATURE ---------------------------//
  const seePassword = () => {
    let x = document.getElementById("password_field");
    if (x.type === "password") {
      x.type = "text";
      setShowPassword(true);
    } else {
      x.type = "password";
      setShowPassword(false);
    }
  };

  return (
    <Fragment>
      <label>{label}</label>
      <div className="line_password">
        <input
          type={type}
          alt="password_field"
          id="password_field"
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />
        {showPassword ? (
          <icon.AiOutlineEyeInvisible
            className="eye_icon"
            onClick={seePassword}
          />
        ) : (
          <icon.AiOutlineEye className="eye_icon" onClick={seePassword} />
        )}
      </div>
    </Fragment>
  );
};
export const ConfirmPasswordWithLabelField = ({
  type,
  label,
  value,
  onChange,
  placeholder,
}) => {
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  //--------------------- SEE CONFIRM PASSWORD FEATURE ---------------------------//
  const seeConfirmPassword = () => {
    let x = document.getElementById("confirm_password_field");
    if (x.type === "password") {
      x.type = "text";
      setShowConfirmPassword(true);
    } else {
      x.type = "password";
      setShowConfirmPassword(false);
    }
  };

  return (
    <Fragment>
      <label>{label}</label>
      <div className="line_password">
        <input
          type={type}
          alt="password_field"
          id="confirm_password_field"
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />
        {showConfirmPassword ? (
          <icon.AiOutlineEyeInvisible
            className="eye_icon"
            onClick={seeConfirmPassword}
          />
        ) : (
          <icon.AiOutlineEye
            className="eye_icon"
            onClick={seeConfirmPassword}
          />
        )}
      </div>
    </Fragment>
  );
};
