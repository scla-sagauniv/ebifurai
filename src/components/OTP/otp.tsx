export default function OTP() {
    return (
      <>
        <div className="flex flex-col justify-center items-center">
            <div className="mt-[160px] text-[70px]">ワンタイムパスワード</div>
            <div className="flex flex-col justify-evenly items-center border-[3px] border-black rounded-[50px] w-[700px] h-[200px] mt-[30px]">
                <input type="text" placeholder="OTPを入力" className="border-b-[3px] hover:border-none border-black w-[600px] h-[50px] text-[30px]" />
            </div>
            <div className="flex flex-row justify-between w-[800px] mt-[30px]">
              <a href="../" className="text-[30px] underline text-blue-600 hover:text-blue-400">←アカウント情報入力</a>
              <a href="../topPage" className="text-[30px] border rounded bg-gray-300 hover:bg-gray-200 border-black px-[20px] py-[2px]">submit</a>
            </div>
        </div>
      </>
    );
  }
