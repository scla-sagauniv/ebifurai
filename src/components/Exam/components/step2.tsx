import Image from "next/image";
import localImage from "./smaho.png";

export default function Step2() {
    return (
      <>
        <div className="flex flex-col items-center w-[300px] h-[700px]">
            <div className="mt-[60px] text-[30px] font-bold">Step2</div>
            <Image src={localImage} alt="QRL" width={300} height={200} className="mt-[30px]"/>
            <div className="text-[25px] mt-[24px]">登録したLINEアカウントに"登録"と送信してください。</div>
        </div>
      </>
    );
  }
