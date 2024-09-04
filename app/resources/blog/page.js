'use client';

import GradientBox from '@app/components/GradientBox'
import SearchInput from '@app/components/SearchInput'
import { useState } from 'react'
import { blogData } from '@utils/data';

const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const blogOptions = ['Marketing', 'Blockchain', 'Wallet', 'Product']

    const handleSearch = (e) => {
        e.preventDefault(); 
        console.log(searchTerm); 
    };

    const handleOptionClick = (option) => {
        console.log(option);
    };

  return (
    <section
        className='main overflow-hidden'
    >
        <header
            className="absolute top-[4rem] md:top-[4.5rem] flex-center w-full px-4 md:px-10 bg-white h-[3.75rem] md:h-[4rem]"
        >
            <nav
                className='flex-between w-full relative max-w-[90rem]'
            >
                    <h1
                        className='font-medium text-lg md:text-xl'
                    >
                        Blog
                    </h1>
                    <div
                        className='gap-0 hidden md:flex justify-center items-center absolute top-0 bottom-0 left-0 right-0'
                    >
                        {blogOptions.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className="btn btn-ghost xl:text-base"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <GradientBox
                        className="bg-gradient-to-tr p-[1.2px] w-max rounded-md relative z-10"
                    >
                        <SearchInput
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            handleSubmit={handleSearch}
                            width={'w-28 lg:w-40'}
                        />
                    </GradientBox>
            </nav>
            <GradientBox className="bg-gradient-to-r h-[1px] w-full absolute bottom-0 left-0" />
        </header>
        {/* <div
            className="w-full relative z-10 max-w-[90rem] mt-[7.75rem] md:mt-[8.5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
            {blogData.map((article, index) => (
            <ArticleCards
                key={index}
                title={article.title}
                image={article.articleImage}
                tag={article.tag}
                author={article.author}
                authImage={article.authImage}
                authTitle={article.authTitle}
                index={index}
            />
            ))}
        </div> */}

        <div className='flex-center items-center h-[calc(100vh-19.5rem)] sm:h-[calc(100vh-16rem)] md:h-[calc(100vh-16.5rem)] w-full mt-[7.75rem] md:mt-[8.5rem]'>
            <div className='text-center'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-700 mb-4'>No Blogs Yet</h2>
              <p className='text-base md:text-lg text-gray-500'>Stay tuned! We will be adding new content soon.</p>
            </div>
        </div>
    </section>
  )
}

const ArticleCards = ({ title, image, tag, author, authImage, authTitle, index}) => {
    return (
        <GradientBox
            className={`bg-gradient-to-tr rounded-md p-[1.2px] md:p-[1.4px] w-full overflow-hidden z-5 ${index == 0 ? 'md:col-span-2 lg:col-span-3': 'col-span-1'} overflow-hidden`}
        >
            <div
                className={`bg-white rounded-md p-5 md:p-7 lg:p-10 flex-col  ${index == 0 ? 'md:flex-row-reverse lg:h-full': ''} flex-start lg:gap-5 gap-4 relative overflow-hidden`}
            >
                <GradientBox
                    className={`w-full h-[12rem] ${index == 0 ? 'lg:h-[16rem]': 'lg:h-[14rem]'} bg-gradient-to-tr rounded-md p-[1.2px]  overflow-hidden`}
                >
                    <div
                        className={`bg-gray-50 w-full h-full rounded-md`}
                    >

                    </div>
                </GradientBox>
                <div
                    className='w-full h-full flex-start flex-col gap-1'
                >
                    <p
                        className={`bg-gradient-to-b from-[#00FF7F] to-[#FF7D9C] inline-block text-transparent bg-clip-text text:sm md:text-base ${index == 0 ? 'lg:text-xl': ''}`}
                    >
                        {tag}
                    </p>
                    <h1
                        className={`leading-5 font-medium text-lg  ${index == 0 ? 'md:text-2xl lg:text-[2rem] lg:mt-2': 'md:text-xl'}`}
                    >
                        {title}
                    </h1>
                    <div
                        className='flex justify-start items-center w-full mt-2 md:mt-4 gap-3 '
                    >
                        <div 
                            className='h-full flex-center'
                        >
                            <div
                                className='bg-gray-300  w-10 h-10 rounded-full'
                            >

                            </div>
                        </div>
                        <div
                            className='flex justify-center items-start flex-col gap-1'
                        >
                            <p
                                className='text:sm leading-4'
                            >
                                {author}
                            </p>
                            <p
                                className='text:xs text-gray-400 leading-4'
                            >
                                {authTitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </GradientBox>
    )
}



export default BlogPage