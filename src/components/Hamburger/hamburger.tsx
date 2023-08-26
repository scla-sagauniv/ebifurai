import Drawer  from '@mui/material/Drawer';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function Hamburger() {

    const [drawerOpened, setDrawerOpened] = useState(false);
    return (
        <header>
        <GiHamburgerMenu 
        onClick={() => setDrawerOpened(true)}
        size={40}
        />
        <Drawer
          anchor='left'
          open={drawerOpened}
          onClose={() => setDrawerOpened(false)}
          PaperProps={{style:{width:'20%'}}}
        >
            <IoMdClose 
            size={30}
            onClick={() => setDrawerOpened(false)}
            className="ml-[300px]"/>
            <div className='flex flex-col justify-center mt-[30px]'>
                <div className='text-[50px] underline ml-[20px]'>ホーム</div>
                <div className='text-[50px] underline ml-[20px]'>ランキング</div>
                <div className='mt-[400px] text-[50px] ml-[20px]'>なまえん</div>
                <div className='text-[20px] ml-[20px]'>@idididi</div>
                <a href="../" className="text-[30px] border rounded bg-gray-300 hover:bg-gray-200 border-black w-[100px] py-[2px] ml-[200px]">log out</a>
            </div>
        </Drawer>
      </header>
  
    );
  }
