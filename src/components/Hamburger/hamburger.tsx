import Drawer  from '@mui/material/Drawer';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';

export default function Hamburger() {

    const [drawerOpened, setDrawerOpened] = useState(false);
    return (
      <>
        <GiHamburgerMenu 
          onClick={() => setDrawerOpened(true)}
          size={40}
          className="hover:cursor-pointer"
          />
        <header>
          <Drawer
            anchor='left'
            open={drawerOpened}
            onClose={() => setDrawerOpened(false)}
            PaperProps={{style:{width:'20%'}}}
            className=''
          >
              <IoMdClose 
              size={30}
              onClick={() => setDrawerOpened(false)}
              className="ml-[300px] hover:cursor-pointer"/>
              <div className='flex flex-col justify-center mt-[30px]'>
                  <Link href="/topPage" className='text-[50px] hover:underline ml-[20px]'>ホーム</Link>
                  <Link href="/topPage/ranking" className='text-[50px] hover:underline ml-[20px]'>ランキング</Link>
                  <div className='mt-[400px] text-[50px] ml-[20px]'>なまえん</div>
                  <div className='text-[20px] ml-[20px]'>@idididi</div>
                  <a href="../" className="text-[30px] border rounded bg-gray-300 hover:bg-gray-200 border-black py-[2px] px-[3px] ml-[200px] text-center font-bold">log out</a>
              </div>
          </Drawer>
        </header>   
      </>
    );
  }
