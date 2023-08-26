export default function Login() {
    return (
      <>
        <div className="flex flex-col justify-center items-center">
            <div className="mt-[60px] text-[70px]">ログイン</div>
            <div className="flex flex-col justify-evenly items-center border-[3px] border-black rounded-[50px] w-[700px] h-[400px] mt-[30px]">
                <input type="text" placeholder="useridを入力" className="border-b-[3px] hover:border-none border-black w-[600px] h-[50px] text-[30px]" />
                <input type="text" placeholder="passwordを入力" className="border-b-[3px] hover:border-none border-black w-[600px] h-[50px] text-[30px]" />
            </div>
            <a href="/onetimePass" className="mt-[30px] text-[30px] border rounded bg-gray-300 hover:bg-gray-200 border-black px-[20px] py-[2px] ml-[530px]">submit</a>
            <a href="/signUp" className="mt-[10px] text-[30px] underline text-blue-600 hover:text-blue-400">アカウント作成</a>
        </div>
      </>
    );
  }
  