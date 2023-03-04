import danger from "../../assets/icon/danger_icon.png";
export const PrimaryModal = ({
  setOpenModal,
  onCancel,
  onClick,
  title,
  img,
  status,
  deleteModal,
  countItems,
}) => {
  return (
    <div className="modal_window">
      <div className="modal_component">
        {!deleteModal ? (
          <>
            <div className="status_icon"></div>
            <div className="modal__title">
              <h1>{title}</h1>
              <p>{status}</p>
            </div>
            <div className="modal__button">
              <input
                type={"button"}
                alt="input_field"
                style={{ backgroundColor: "#2B3651", width: "147px" }}
                className="input_submit_field"
                value="Got it"
                onClick={() => {
                  onClick();
                  setOpenModal(false);
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="status_icon">
              <img src={danger} alt="icon_status" />
            </div>
            <div className="modal__title">
              <h1>{`Deleted ${countItems} Items`}</h1>
              <p>{status}</p>
            </div>
            <div className="modal__button">
              <input
                type={"button"}
                alt="input_field"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#141522",
                  width: "147px",
                }}
                className="input_submit_field"
                value="Cancel"
                onClick={() => {
                  onCancel();
                  setOpenModal(false);
                }}
              />
              <input
                type={"button"}
                alt="input_field"
                style={{ backgroundColor: "#2B3651", width: "147px" }}
                className="input_submit_field"
                value="Got it"
                onClick={() => {
                  onClick();
                  setOpenModal(false);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
