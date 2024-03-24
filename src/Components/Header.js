import React from 'react';
import headImg from '../Assests/head.png';
import { BsPlay as FiPlay } from 'react-icons/bs';

const Header = () => {
    return (
        <div className='pt-[73px] bg-[#F6F6F6] sm:pl-16 pl-4 relative overflow-hidden'>
            <div>
                <div className='flex flex-col-reverse sm:flex-row items-center justify-between  '>
                    <div className='sm:w-[50%] w-[100%] p-4 flex flex-col items-center sm:items-start'>
                        <p className='text-xl font-semibold my-3 text-[#12406F] z-10'>Lorem Ipsum</p>
                        <p className='sm:text-left text-sm sm:text-base z-10'>
                            Lorem ipsum dolor sit   , amet consectetur adipisicing elit. Doloremque fugiat earum dignissimos ex fuga velit aspernatur sapiente architecto neque, eius quos tempore dicta accusamus possimus error id iusto voluptate.
                        </p>
                        <button className='my-4 bg-[#12406F] text-white px-3 py-2 rounded-md flex z-10'>
                            Know more <FiPlay className='mt-1 h-6 w-6' />
                        </button>
                    </div>
                    <div className='flex justify-center sm:justify-end mt-4 sm:mt-0 sm:w-[35%]'>
                        <img src={headImg} alt="" className='w-auto h-full absolute top-0 md:relative opacity-25 md:opacity-100 md:block' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
