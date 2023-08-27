import { useState } from "react";
import postData from "@/util/postData";

export default function SignUp2() {
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
        <div className="flex flex-col justify-center items-center">
            <div className="mt-[70px] text-[70px]">アカウント作成</div>
            <div className="flex flex-col justify-evenly items-center border-[3px] border-black rounded-[50px] w-[700px] h-[400px] mt-[30px]">
                <div className="text-[25px]">
                    <p>
                        id :: <span>{idExists ? "already used" : "OK"}</span>
                    </p>
                    <input
                    type="text"
                    value={id}
                    placeholder="idを入力してください"
                    onChange={(event) => setId(event.target.value)}
                    className="border border-black w-[450px]"
                    />
                </div>
                <div className="text-[25px]">
                    <p>name</p>
                    <input
                    type="text"
                    value={name}
                    placeholder="usernameを入力してください"
                    onChange={(event) => setName(event.target.value)}
                    className="border border-black w-[450px]"
                    />
                </div>
                <div className="text-[25px]">
                    <p>password</p>
                    <input
                    type="text"
                    value={password}
                    placeholder="passwordを入力してください"
                    onChange={(event) => setPassword(event.target.value)}
                    className="border border-black w-[450px]"
                    />
                </div>
            </div>
            <button
                onClick={signUp}
                className="bg-gray-300 hover:bg-gray-200 ml-[530px] mt-[20px] text-[30px] px-[20px] py-[2px] rounded font-bold"
            >
                signUp
            </button>
            <a href="../" className="text-[30px] underline text-blue-600 hover:text-blue-400">すでにアカウントをお持ちの方</a>
        </div>
      </>
    );
  }
