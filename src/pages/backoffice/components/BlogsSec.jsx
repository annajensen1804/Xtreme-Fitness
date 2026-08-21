import Button from "../../../components/button/Button";

const BlogsSec = ({ blogs, onDelete, onAdd, onEdit }) => {
    return (
      <section className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Author</th>
              <th>Teaser</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((blog) => (
              <tr key={blog._id}>
                <td>{blog.title}</td>
                <td>
                  <img src={blog.image} alt={blog.title} />
                </td>
                <td>{blog.author}</td>
                <td>{blog.teaser}</td>
                <td>{blog.content}</td>

                <td>
                  <Button
                    buttonText="Rediger"
                    variant="gray"
                    onClick={() => onEdit(blog)}
                  />
                  <Button
                    buttonText="Slet"
                    variant="red"
                    onClick={() => onDelete(blog)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button buttonText="Tilføj blogindlæg" variant="big" onClick={onAdd} />
      </section>
    );
}

export default BlogsSec;