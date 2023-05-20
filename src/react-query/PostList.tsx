import axios from "axios";
import { useEffect, useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  // const [userId, setUserId] = useState<number>();
  // const { data: posts, error, isLoading } = usePosts(userId);
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select
        className="form-select mb-3"
        value={userId}
        onChange={(event) => setUserId(parseInt(event.target.value))}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Previous
      </button>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary"
      >
        Next
      </button>
    </>
  );
};

export default PostList;
