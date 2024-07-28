import BlogItem from "./BlogItem";

const BlogList = (props) => {
  return (
    <ul>
        {props.data.map((item) => (
            <BlogItem key={item.objectID} item={item} />
        ))}
    </ul>
  )
}

export default BlogList;
