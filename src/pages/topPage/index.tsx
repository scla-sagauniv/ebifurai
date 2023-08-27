import Top from "@/components/Top/top";
import Hamburger from "@/components/Hamburger/hamburger";

export default function TopPage() {
    return (
      <>
        <Hamburger />
        <Top />
        <div className="text-center text-[43px] mt-[40px]">上位3名</div>
        <div className="flex justify-center">
          <table className="table-auto border mt-[30px]">
            <thead>
              <tr className="border">
                <th className="border border-black px-20 py-2">rank</th>
                <th className="border border-black px-20 py-2">id</th>
                <th className="border border-black px-20 py-2">username</th>
                <th className="border border-black px-20 py-2">score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-20 py-2">1位</td>
                <td className="border border-black px-20 py-2">yamada56</td>
                <td className="border border-black px-20 py-2">山田</td>
                <td className="border border-black px-20 py-2">3.6</td>
              </tr>
              <tr className="">
                <td className="border border-black px-20 py-2">2位</td>
                <td className="border border-black px-20 py-2">nankai</td>
                <td className="border border-black px-20 py-2">Adam</td>
                <td className="border border-black px-20 py-2">112</td>
              </tr>
              <tr>
                <td className="border border-black px-20 py-2">3位</td>
                <td className="border border-black px-20 py-2">Intro to JavaScript</td>
                <td className="border border-black px-20 py-2">Chris</td>
                <td className="border border-black px-20 py-2">1,280</td>
              </tr>
            </tbody>
          </table>
          </div>
      </>
    );
  }
