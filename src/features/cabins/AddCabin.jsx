import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
      {/* <Button onClick={() => setIsOpen((s) => !s)}>Create New Cabin</Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpen(false)} />
        </Modal>
      )} */}
    </div>
  );
}

export default AddCabin;
