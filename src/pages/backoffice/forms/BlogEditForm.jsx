import { useCrud } from "../../../hooks/useCrud";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/button/Button";
import styles from "./form.module.css";
import { useState } from "react";


const BlogEditForm = ({ blog, onClose }) => {
  const { update } = useCrud();

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
    } = useForm({
      resolver: yupResolver(schema),
    });

  const onSubmit = async (data) => {

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("author", data.author);
      formData.append("teaser", data.teaser);
      if (data.image && data.image[0]) {
        formData.append("file", data.file[0]);
      }
  
      try {
        await update("blog", formData);
        /* setShowConfirm(false); */
        onClose();
      } catch {
        // Fejl vises allerede som toast fra useCrud.
      }
    };

    /* // Viser bekræftelse-modal
      if (showConfirm) {
        return (
          <ConfirmationForm
            message={`Vil du gemme ændringerne for "${pendingData?.name}"?`}
            onConfirm={handleActualSubmit}
            onCancel={() => {
              setShowConfirm(false);
              setPendingData(null); 
            }}
          />
        );
      }
 */
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label htmlFor="title">Titel:</label>
        <input id="title" type="text" {...register("title")} />
        {errors.title && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="image">Skift billede (valgfrit):</label>
        <input id="image" type="file" {...register("image")} />
      </div>

      <div>
        <label htmlFor="author">Forfætter:</label>
        <input id="author" type="text" {...register("author")} />
        {errors.position && (
          <span className={styles.error}>{errors.author.message}</span>
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
        buttonText={isSubmitting ? "Gemmer..." : "Opdater blogindlæg"}
      />
    </form>
  );
};

export default BlogEditForm;
