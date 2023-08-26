import Image from "next/image";
import localImage from "./security.jpg";

export default function Step3() {
    return (
      <>
        <div className="flex flex-col items-center w-[300px] h-[700px]">
            <div className="mt-[100px] text-[30px] font-bold">Step3</div>
            <Image src={localImage} alt="QRL" width={230} height={230} className="mt-[30px]"/>
            <div className="text-[25px] mt-[18px]">ワンタイムパスワードが送られてくるので、次の画面で入力してください。</div>
        </div>
      </>
    );
  }
