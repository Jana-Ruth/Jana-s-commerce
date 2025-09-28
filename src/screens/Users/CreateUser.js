import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
import Layout from '../../Layout';
import UserInfo from '../../components/UsedComp/UserInfo';

function CreateUser() {
  
  return (
    <Layout>
      <div className="flex items-center gap-4">
        <Link
          to="/users"
          className="bg-white border border-subMain border-dashed rounded-lg py-3 px-4 text-md"
        >
          <IoArrowBackOutline />
        </Link>
        <h1 className="text-xl font-semibold">Create User</h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        className="bg-white my-8 rounded-xl border-[1px] border-border p-6"
      >
        <UserInfo titles={false} />
      </div>
    </Layout>
  );
}

export default CreateUser;
