import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useCrud } from "../../../hooks/useCrud";
import styles from "./form.module.css";
import Button from "../../../components/button/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogForm = ({ onClose }) => {
  const { create } = useCrud();

  const schema = yup.object().shape({
    title: yup.string().required("Titel er påkrævet"),
    author: yup.string().required("Forfætter er påkrævet"),
    teaser: yup.string().required("Teaser er påkrævet"),
    content: yup.string().required("Content er påkrævet"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("teaser", data.author);
    formData.append("content", data.author);
    if (data.file && data.file[0]) {
      formData.append("file", data.file[0]);
    }

    try {
      await create("blog", formData);
      onClose();
    } catch (error) {
      console.error("Fejl ved oprettelse af blogindlæg:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label htmlFor="title">Titel</label>
        <input id="title" {...register("title")} />
        {errors.title && <span className="error">{errors.title.message}</span>}
      </div>

      <div>
        <label>Vælg billede</label>
        <input id="image" type="file" {...register("file")} />
      </div>
      
      <div>
        <label htmlFor="author">Forfætter</label>
        <input id="author" {...register("author")} />
        {errors.author && (
          <span className="error">{errors.author.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="teaser">Teaser</label>
        <input id="author" {...register("teaser")} />
        {errors.teaser && (
          <span className="error">{errors.teaser.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="content">Content</label>
        <input id="content" {...register("content")} />
        {errors.content && (
          <span className="error">{errors.content.message}</span>
        )}
      </div>

      <Button
        type="submit"
        variant="gray"
        buttonText={isSubmitting ? "Gemmer..." : "Tilføj blogindlæg"}
      />
    </form>
  );
};

export default BlogForm;
