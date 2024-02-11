import { Modal } from "react-bootstrap";

const SearchModal = ({ show, handleClose }) => {
  return (
    <Modal
      className="modal fade search-modal"
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Body>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClose();
          }}
        >
          <div className="form_group">
            <input
              type="text"
              className="form_control"
              placeholder="Search here"
              name="search"
            />
            <label>
              <i className="fa fa-search" />
            </label>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
export default SearchModal;
