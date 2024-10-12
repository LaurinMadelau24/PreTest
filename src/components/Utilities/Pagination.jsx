import React from 'react';

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scroll({
      behavior: 'smooth',
      top: 0,
    });
  };

  const HandleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const HandlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center p-2 gap-4 font-bold ">
      {
        page <= 1 ? null :
      <button className="text-slate-400 hover:text-cyan-600" onClick={HandlePrevPage}>Prev
      </button>
      }

      <p className="text-white">
        {page} of {lastPage}
      </p>

      {page >= lastPage ? null :
      <button className="text-slate-400 hover:text-cyan-600" onClick={HandleNextPage}>Next
      </button>
    }
    </div>
  );
};

export default Pagination;
