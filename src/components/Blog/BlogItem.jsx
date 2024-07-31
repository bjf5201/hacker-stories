const BlogItem = ({ title, author, content, num_comments }) => {
  return (
    <li>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{content}</p>
        <p>{num_comments}</p>
    </li>
  );
}

export default BlogItem;