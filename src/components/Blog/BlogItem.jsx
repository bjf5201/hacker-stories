const BlogItem = (props) => {
  return (
    <li>
        <h2>{props.item.title}</h2>
        <p>{props.item.author}</p>
        <p>{props.item.content}</p>
        <p>{props.item.num_comments}</p>
    </li>
  );
}

export default BlogItem;