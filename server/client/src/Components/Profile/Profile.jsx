import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [post, setPost] = useState([]);
  const fetchmypost = async () => {
    try {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        const posts = await axios.get("/mypost", {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": JSON.parse(localStorage.getItem("loggedUser"))
              .accessToken,
          },
        });
        console.log(posts.data.posts);

        console.log(typeof posts.data.posts);
        setPost(posts.data.posts);
        console.log(post);
      }
    } catch (err) {
      //comment  before deploying
      console.log(err);
      // Toast(err.response.data.error, 2);
      // Toast(err.response.data.message, 2);
    }
  };

  useEffect(() => {
    fetchmypost();
  }, []);
  return (
    <div className="mx-10 h-screen">
      <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-xl p-6 flex flex-wrap content-around my-9 border-b-4">
        <div>
          <img
            className="rounded-full h-48 w-48"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="profile"
          ></img>
        </div>
        <div className="mx-8">
          <h1>Ram</h1>

          <div className="flex flex-row py-3">
            <h6 className="px-2">0 Post</h6>
            <h6 className="px-2">0 followers</h6>
            <h6 className="px-2">0 following</h6>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-green-400 to-blue-500 justify-center rounded-xl p-6 flex flex-wrap content-around my-9 border-b-4">
        <h1 className="font-bold text-2xl py-2 ">My Posts</h1>
        <div className="flex justify-center item-center">
          <div className="grid grid-cols-3 gap-4 px-12 h-4/5 w-4/5">
            {post.map((pics) => {
              return (
                <img
                  key={pics._id}
                  className=" border-4 border-gray-900 h-full w-full"
                  src={pics.photo}
                  alt="profile"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;