import Modal from "react-modal";
import css from "./ImageModal.module.css";
//Встановлює елемент DOM, який є основним для застосунку (root). Це допомагає для доступності (accessibility), наприклад, для того, щоб приховати інший контент від екранних читачів, коли модалка відкрита.
Modal.setAppElement("#root");
export default function ImageModal({ onClose, image }) {
  //перетворює image в true або false, тобто Якщо image є (тобто передано об’єкт), буде true, модалка відкрита. Якщо image немає (null або undefined), буде false, модалка закрита
  const isOpen = Boolean(image);
  return (
    <Modal
      isOpen={isOpen}
      className={css.modal}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
    >
      {image && (
        <div className={css.cardmodal}>
          <img
            className={css.imgmodal}
            src={image.urls.regular}
            alt={image.description}
          />
          <div className={css.infomodal}>
            <div className={css.infolistmodal}>
              <span className={css.infoitemmodal}>Likes: </span>
              <span className={css.itemmodal}>{image.likes}</span>
            </div>
            <div className={css.infolistmodal}>
              <span className={css.infoitemmodal}>Location: </span>
              <span className={css.itemmodal}>
                {image.user.location || "Location unknown"}
              </span>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}