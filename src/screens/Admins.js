import React, { useEffect, useState } from 'react';
import { MdOutlineCloudDownload } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import Layout from '../Layout';
import { Button } from '../components/Form';
import SummaryApi from '../common';
import { FaRegCircleUser } from 'react-icons/fa6';
import moment from 'moment';
import { FiEdit, FiEye } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import ChangeUserRole from './ChangeUserRole';
import ViewUser from './Users/ViewUser';

function Admins() {
  const [allUser, setAllUsers] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    fullName: "",
    role: "",
    _id: "",
  });

  const [viewUserDetails, setViewUserDetails] = useState(null);

  const fetchAllUsers = async () => {
    try {
      const fetchData = await fetch(SummaryApi.allUser.url, {
        method: SummaryApi.allUser.method,
        credentials: 'include'
      });
      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        const nonAdminUsers = dataResponse.data.filter(user => user.role === 'ADMIN'); // Filter non-admin users
        setAllUsers(nonAdminUsers);
        
      } else {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      toast.error("Failed to fetch user data.");
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);


  const deleteUser = async (userId) => {
    try {
      // Make an API call to delete the user
      const response = await fetch(SummaryApi.deleteUser.url, {
        method: SummaryApi.deleteUser.method,
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ _id: userId }),
        credentials : "include",
      });

      console.log("Delete user",response)
      const data = await response.json();

      if (data.success) {
        // Show success toast and refresh the user list
        toast.success(data.message);
        setAllUsers(allUser.filter(user => user._id !== userId)); // Remove the user from the state
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error deleting the user.");
    }
  };

  const thclass = "text-start text-sm font-medium py-3 px-2 whitespace-nowrap";
  const tdclass = "text-start text-sm py-4 px-2 whitespace-nowrap";
  return (
    <Layout>
   
      {/*  */}
      <h1 className="text-xl font-semibold">Administrators</h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        className="bg-white my-8 rounded-xl border-[1px] border-border p-5"
      >
        {/* datas */}

        <div className="grid md:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-2">
          <div className="md:col-span-5 grid lg:grid-cols-4 items-center gap-6">
            <input
              type="text"
              placeholder='Search "Amina Mwakio"'
              className="h-14 w-full text-sm text-main rounded-md bg-dry border border-border px-4"
            />
          </div>

          {/* export */}
          <Button
            label="Export"
            Icon={MdOutlineCloudDownload}
            onClick={() => {
              toast.error('Exporting is not available yet');
            }}
          />
        </div>
        <div className="mt-8 w-full overflow-x-scroll">
           <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          <th className={thclass}>#</th>
          <th className={thclass}>Admin</th>
          <th className={thclass}>Created At</th>
          <th className={thclass}>Phone</th>
          <th className={thclass}>Email</th>
          <th className={thclass}>Role</th>
          <th className={thclass}>Actions</th>
        </tr>
      </thead>
      <tbody>
            {allUser.map((el, index) => (
              <tr key={el._id} className="border-b border-border hover:bg-greyed transitions">
                <td className={tdclass}>{index + 1}</td>
                <td className={tdclass}>
                  <div className="flex gap-4 items-center">
                    <span className="w-12">
                      {el?.profilePic ? (
                        <img
                          src={el.profilePic}
                          alt="user"
                          className="w-12 border border-border object-cover h-12 rounded-full"
                        />
                      ) : (
                        <FaRegCircleUser className="text-gray-500 w-10 h-10" />
                      )}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium">{el?.fullName}</h4>
                      <p className="text-xs mt-1 text-textGray">{el?.phoneNumber}</p>
                    </div>
                  </div>
                </td>
                <td className={tdclass}>{moment(el?.createdAt).format('LL')}</td>
                <td className={tdclass}>{el?.phoneNumber}</td>
                <td className={tdclass}>{el?.email}</td>
                <td className={tdclass}>{el?.role}</td>
               
                <td className={tdclass}>
                <button
                    className="bg-blue-100 p-2 rounded hover:bg-blue-500 hover:text-white mr-2"
                    onClick={() => setViewUserDetails(el)}
                  >
                    <FiEye />
                  </button>
                  <button
                    className="bg-blue-100 p-2 rounded hover:bg-blue-500 hover:text-white mr-2"
                    onClick={() => {
                      setUpdateUserDetails(el);
                      setOpenUpdateRole(true);
                    }}
                  >
                    <FiEdit />
                  </button>
                  <button
                    className="bg-red-100 p-2 rounded hover:bg-red-500 hover:text-white"
                    onClick={() => deleteUser(el._id)}
                  >
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
      {openUpdateRole && (
          <ChangeUserRole 
            onClose={() => setOpenUpdateRole(false)}
            fullName={updateUserDetails.fullName}
            email={updateUserDetails.email}
            role={updateUserDetails.role}
            userId={updateUserDetails._id}
          />
        )}

        {viewUserDetails && (
          <ViewUser user={viewUserDetails} onClose={() => setViewUserDetails(null)} />
        )}
        </div>
      </div>
    </Layout>
  );
}

export default Admins;
