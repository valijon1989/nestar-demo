import { useState } from "react";

const Community = () => {
  console.log("Community Component Page Router");
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      {" "}
      COMMUNITY{" "}
      <button onClick={() => alert("Hello")} style={{ margin: "30px" }}>
        Pressme
      </button>{" "}
    </div>
  );
};

export default Community;
