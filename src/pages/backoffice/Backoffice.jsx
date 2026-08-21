import { useLoaderData } from 'react-router-dom';
import { useCrud } from "../../hooks/useCrud";
import styles from './backoffice.module.css'
import BlogsSec from './components/BlogsSec';
import BlogForm from './forms/BlogForm';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import BlogEditForm from './forms/BlogEditForm';
import Modal from '../../components/modal/Modal';
import { useState } from 'react';

const Backoffice = () => {

    const [modal, setModal] = useState(null);

    const close = () => setModal(null);
    
    const blogs = useLoaderData();

    const { remove } = useCrud();

    const titles = {
      "blog-add": "Tilføj blogindlæg",
      "blog-edit": "Rediger blogindlæg",
      "confirm-delete": "Bekræft sletning",
    };
    
    return (
      <article className={styles.backoffice}>
        <h2 className="black">Blogs</h2>
        <BlogsSec
          blogs={blogs}
          onAdd={() => setModal({ type: "blog-add" })}
          onEdit={(blog) => setModal({ type: "blog-edit", item: blog })}
          onDelete={(blog) => {
            remove("blog", blog._id);
          }}
        ></BlogsSec>

        <Modal
          isOpen={!!modal}
          onClose={close}
          title={modal ? titles[modal.type] : ""}
        >
          {/* {modal?.type?.startsWith("confirm-") && (
            <ConfirmationForm
              message={modal.message}
              onConfirm={handleConfirmAction}
              onCancel={close}
            />
          )} */}

          {modal?.type === "blog-add" && (
            <BlogForm blogs={blogs} onClose={close} />
          )}
          {modal?.type === "blog-edit" && (
            <BlogEditForm blogs={blogs} blog={modal.item} onClose={close} />
          )}
        </Modal>

        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          theme="light"
        />
      </article>
    );
}

export default Backoffice;