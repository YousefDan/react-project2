import { Fragment, useEffect, useState } from "react";
import Button from "../reuseable/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import http from "../../services/httpService";
import config from "../../config.json";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //get() => Get All Courses From API
    const getPosts = async () => {
      const { data } = await http.get(config.postsURL);
      setPosts(data);
    };
    getPosts();
  }, []);
  //post() => Create New Post
  const addPostHandler = async () => {
    const obj = {
      title: "New Post Added",
      body: "Test",
    };
    const { data: newPost } = await http.post(config.postsURL, obj);

    const allPosts = [newPost, ...posts];
    setPosts(allPosts);
  };
  //put() => Update A Post
  const updatePostHandler = async (post) => {
    post.title = "Updated";
    const { data: updatedPost } = await http.put(
      `${config.postsURL}/${post.id}`,
      post
    );
    const allPosts = [...posts];
    let index = allPosts.indexOf(post);
    allPosts[index] = { ...updatedPost };
    setPosts(allPosts);
  };
  //delete() => Delete A Post
  const deletePostHandler = async (post) => {
    const originalPosts = posts;

    const allPosts = posts.filter((p) => p !== post);
    setPosts(allPosts);
    try {
      await http.delete(`${config.postsURL}/${post.id}`, post);
    } catch (error) {
      setPosts(originalPosts);
    }
  };
  return (
    <Fragment>
      <ToastContainer />
      <Button onClick={addPostHandler} className="btn btn-primary my-2">
        Add Post
      </Button>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td> {post.title} </td>
              <td>
                <Button
                  onClick={() => updatePostHandler(post)}
                  className="btn btn-info btn-sm"
                >
                  Update Post
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => deletePostHandler(post)}
                  className="btn btn-danger btn-sm"
                >
                  Delete Post
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Posts;
