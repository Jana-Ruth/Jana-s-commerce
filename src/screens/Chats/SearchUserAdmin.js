import React, { useEffect, useState } from 'react';
import { IoClose, IoSearchOutline } from 'react-icons/io5';
import toast from 'react-hot-toast';
import SummaryApi from '../../common';
import UserSearchCardAdmin from './UserSearchCardAdmin';
import Loading from '../../ClientLayout/components/Loading';

const SearchUserAdmin = ({ onClose }) => {
  const [searchUser, setSearchUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchUser = async () => {
    try {
      setLoading(true);
      const fetchUser = await fetch(SummaryApi.searchUserInfo.url, {
        method: SummaryApi.searchUserInfo.method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ search }) // Pass search term in request body
      });

      const responseData = await fetchUser.json();
      setLoading(false);
      setSearchUser(responseData.data);
    } catch (error) {
      toast.error(error?.message || 'Failed to fetch users');
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearchUser();
    }, 500); // debounce to limit API calls while typing

    return () => clearTimeout(delayDebounceFn); // clear timeout if component is unmounted or search term changes
  }, [search]);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-slate-700 bg-opacity-40 p-2 z-10">
      <div className="w-full max-w-lg mx-auto mt-20 pt-8" >
        {/* Input for searching users */}
        <div className="bg-white rounded h-14 overflow-hidden flex">
          <input
            type="text"
            placeholder="Search user by name, email..."
            className="w-full outline-none py-1 h-full px-4"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="h-14 w-14 flex justify-center items-center">
            <IoSearchOutline size={25} />
          </div>
        </div>

        {/* Display search results */}
        <div className="bg-white mt-2 w-full p-4 rounded">
          {!loading && searchUser.length === 0 && search && (
            <p className="text-center text-slate-500">No user found!</p>
          )}
          {loading && (
            <p className="text-center text-slate-500"><Loading /></p>
          )}
          {
            searchUser.length !== 0 && !loading && (
              searchUser
                .filter(user => user.role === "GENERAL") // Filter for users with GENERAL role
                .map(user => (
                  <UserSearchCardAdmin key={user._id} user={user} onClose={onClose} />
                ))
            )
          }
        </div>
      </div>
      <div className="absolute mt-20 top-0 right-0 p-2 text-2xl lg:text-4xl hover:text-white" onClick={onClose}>
        <button>
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default SearchUserAdmin;
