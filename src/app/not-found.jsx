'use client';
import { FileSearch } from '@phosphor-icons/react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gal-4 flex-col">
        <FileSearch size={32} />
        <h3 className="text-2xl font-bold">NOT FOUND</h3>
        <Link href="/" className="hover:text-cyan-600 underline font-bold">Kembali</Link>
      </div>
    </div>
  );
};

export default page;
