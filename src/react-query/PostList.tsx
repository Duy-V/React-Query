import axios from "axios";
import { useEffect, useState } from "react";
import usePosts from "./hooks/usePosts";
import React from "react";

const PostList = () => {
  // const [userId, setUserId] = useState<number>();
  // const { data: posts, error, isLoading } = usePosts(userId);
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
        className="btn btn-primary"
      >
        {isFetchingNextPage ? "Loading" : "Load More"}
      </button>
    </>
  );
};

export default PostList;
