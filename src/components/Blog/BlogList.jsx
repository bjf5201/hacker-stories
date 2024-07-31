import BlogItem from "./BlogItem";

const BlogList = ({ data }) => {
  return (
    <ul>
        {data.map(({objectID, ...item}) => (
            <BlogItem key={objectID} {...item} />
        ))}
    </ul>
  )
}

export default BlogList;
