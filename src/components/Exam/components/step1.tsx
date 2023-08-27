import Image from "next/image";
import localImage from "./QRL.jpg";

export default function Step1() {
    return (
      <>
        <div className="flex flex-col items-center w-[300px] h-[700px] ">
            <div className="mt-[60px] text-[30px] font-bold">Step1</div>
            <Image src={localImage} alt="QRL" className="mt-[30px]"/>
            <div className="text-[25px] mt-[30px]">上記のQRコードをLINEで読み込み、ワンタイムパスワード送信用のアカウントを登録してください。</div>
        </div>
      </>
    );
  }
