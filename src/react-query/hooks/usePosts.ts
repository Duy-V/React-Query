import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
interface PostQuery {
  page: number;
  pageSize: number;
}
// const usePosts = (userId: number | undefined) =>
const usePosts = (query: PostQuery) =>
  useQuery<Post[], Error>({
    // /users/1/posts
    // queryKey: userId ? ["users", userId, "post"] : ["post"],
    queryKey: ["post", query],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            // userId,
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
  });
export default usePosts;
