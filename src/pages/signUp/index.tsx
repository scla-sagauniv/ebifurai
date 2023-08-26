import { useState } from "react";
import postData from "@/util/postData";

export default function SignUp() {
  const [id, setId] = useState("");
  const [idExists, setIdExists] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    const body = {
      id: id,
      name: name,
      password: password,
    };
    const { data } = await postData("/singUp", body);
    console.log(data);
  };

  return (
    <>
      <div>
        <p>
          id :: <span>{idExists ? "already used" : "OK"}</span>
        </p>
        <input
          type="text"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <p>name</p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <p>password</p>
        <input
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <p></p>
      <button
        style={{ backgroundColor: "blue", marginRight: "10px" }}
        onClick={signUp}
      >
        signUp
      </button>
    </>
  );
}
