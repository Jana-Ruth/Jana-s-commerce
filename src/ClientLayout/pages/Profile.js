import React, { useState } from 'react';
import { BiUserPlus } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import PersonalInfo from '../../components/UsedComp/PersonalInfo';
import ChangePassword from '../../components/UsedComp/ChangePassword';

const Profile = () => {
  const user = useSelector((state) => state?.user?.user); // Directly using Redux user state
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, name: 'Personal Information', icon: BiUserPlus },
    { id: 2, name: 'Change Password', icon: RiLockPasswordLine },
  ];

  const renderTabPanel = () => {
    switch (activeTab) {
      case 1:
        return <PersonalInfo user={user} />;
      case 2:
        return <ChangePassword user={user} />;
      default:
        return null;
    }
  };



  return (
    <>
    <h1 className="text-xl font-semibold text-gray-800">User Profile</h1>
    <div className="grid grid-cols-12 gap-6 mt-8 ">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        className="col-span-12 flex-colo gap-6 lg:col-span-4 bg-white rounded-xl border-[1px] border-border p-6 lg:sticky top-28"
      >
        <img
          src={user?.profilePic || "/images/user1.png"}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border border-dashed border-subMain"
        />
        <div className="gap-2 flex-colo">
          <h2 className="text-sm font-semibold">{user?.fullName || 'User Name'}</h2>
          <p className="text-xs text-textGray">{user?.email || 'email@example.com'}</p>
          <p className="text-xs">{user?.phoneNumber || '+123 456 789'}</p>
        </div>
        {/* Tabs */}
        <div className="flex-colo gap-3 px-2 xl:px-12 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'bg-text text-subMain'
                  : 'bg-dry text-main hover:bg-text hover:text-subMain'
              } text-xs gap-4 flex items-center w-full p-4 rounded`}
            >
              <tab.icon className="text-lg" /> {tab.name}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Panel */}
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        className="col-span-12 lg:col-span-8 bg-white rounded-xl border-[1px] border-border p-6"
      >
        {renderTabPanel()}
      </div>
    </div>
  </>

  );
};

export default Profile;
