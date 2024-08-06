'use client';

import Image from "next/image";

const SearchInput = ({ searchTerm, setSearchTerm, handleSubmit, width }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label className='flex-center gap-1 bg-slate-50 p-2 rounded-md'>
        <Image
          src="/assets/images/search.png" 
          width={22} 
          height={22} 
          alt='logo'
          className='object-cover' 
        />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`bg-slate-50 border-none outline-none ${width}`}
          style={{ boxShadow: 'none' }}
        />
      </label>
    </form>
  );
};

export default SearchInput;
