import Step1 from "./components/step1";
import Step2 from "./components/step2";
import Step3 from "./components/step3";

export default function Exam() {
    return (
      <>
        <div className="flex flex-row justify-evenly">
            <Step1 />
            <Step2 />
            <Step3 />
        </div>
            <div className="flex flex-row">
                <a href="../" className="fixed bottom-7 left-14 text-[30px] underline text-blue-600 hover:text-blue-400">←アカウント情報入力</a>
                <a href="./onetimePass2" className="fixed bottom-7 right-14 text-[30px] underline text-blue-600 hover:text-blue-400">つぎへ→</a>
            </div>
      </>
    );
  }
