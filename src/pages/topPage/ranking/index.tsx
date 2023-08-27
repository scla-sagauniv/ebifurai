import Hamburger from "@/components/Hamburger/hamburger";

export default function Ranking() {
    return (
      <>
        <Hamburger />
        <div className="text-center text-[73px]">ランキング</div>
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
              <tr>
                <td className="border border-black px-20 py-2">4位</td>
                <td className="border border-black px-20 py-2">Intro to JavaScript</td>
                <td className="border border-black px-20 py-2">Chris</td>
                <td className="border border-black px-20 py-2">1,280</td>
              </tr>
              <tr>
                <td className="border border-black px-20 py-2">5位</td>
                <td className="border border-black px-20 py-2">Intro to JavaScript</td>
                <td className="border border-black px-20 py-2">Chris</td>
                <td className="border border-black px-20 py-2">1,280</td>
              </tr>
              <tr>
                <td className="border border-black px-20 py-2">6位</td>
                <td className="border border-black px-20 py-2">Intro to JavaScript</td>
                <td className="border border-black px-20 py-2">Chris</td>
                <td className="border border-black px-20 py-2">1,280</td>
              </tr>
              <tr>
                <td className="border border-black px-20 py-2">7位</td>
                <td className="border border-black px-20 py-2">Intro to JavaScript</td>
                <td className="border border-black px-20 py-2">Chris</td>
                <td className="border border-black px-20 py-2">1,280</td>
              </tr>
              <tr>
                <td className="border border-black px-20 py-2">8位</td>
                <td className="border border-black px-20 py-2">Intro to JavaScript</td>
                <td className="border border-black px-20 py-2">Chris</td>
                <td className="border border-black px-20 py-2">1,280</td>
              </tr>
              <tr>
                <td className="border border-black px-20 py-2">9位</td>
                <td className="border border-black px-20 py-2">Intro to JavaScript</td>
                <td className="border border-black px-20 py-2">Chris</td>
                <td className="border border-black px-20 py-2">1,280</td>
              </tr>
              <tr>
                <td className="border border-black px-20 py-2">10位</td>
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
