import { danger_icon } from "../../assets/icon";
import { InputField } from "../input";

export const PrimaryModal = ({ setOpenModal, onClick, title }) => {
  return (
    <div className="modal_window">
      <div className="modal_component">
        <div className="status_icon">
          <img src={danger_icon} alt="icon_status" />
        </div>
        <div className="modal__title">
          <h1>{title}</h1>
          <p>Are you sure want logout from your Account?</p>
        </div>
        <div className="modal__button">
          <InputField
            type="button"
            value="Cancel"
            style={{
              backgroundColor: "transparent",
              width: "147px",
              color: "#2B3651",
              borderColor: "#F5F5F7",
            }}
            onClick={() => setOpenModal(false)}
          />
          <InputField
            type="button"
            value="Logout"
            style={{ backgroundColor: "#2B3651", width: "147px" }}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};
export const ModalWithInput = ({
  setOpenModal,
  onClick,
  title,
  title_secondary,
  modalButtons,
  modalInput,
  second_button_value,
  duePaymentValue,
  setDuePaymentValue,
  loading,
  inputType,
}) => {
  return (
    <div className="modal_window">
      <div className="modal_component">
        <div className="modal__title">
          <h1>{title}</h1>
          <p style={{ textAlign: "center", width: "80%", lineHeight: "28px" }}>
            {title_secondary}
          </p>
        </div>
        {modalInput && (
          <InputField
            type={inputType}
            style={{
              backgroundColor: "transparent",
              width: "100%",
              cursor: "auto",
              color: "#2B3651",
              borderColor: "#F5F5F7",
              textAlign: "center",
            }}
            value={duePaymentValue}
            onChange={(e) => setDuePaymentValue(e.target.value)}
          />
        )}
        {modalButtons && (
          <div className="modal__button">
            <InputField
              type="button"
              value="Cancel"
              style={{
                backgroundColor: "transparent",
                width: "147px",
                color: "#2B3651",
                borderColor: "#F5F5F7",
              }}
              onClick={() => setOpenModal(false)}
            />
            <InputField
              type="button"
              value={second_button_value}
              style={{ backgroundColor: "#2B3651", width: "147px" }}
              onClick={onClick}
              loading={loading}
            />
          </div>
        )}
      </div>
    </div>
  );
};
