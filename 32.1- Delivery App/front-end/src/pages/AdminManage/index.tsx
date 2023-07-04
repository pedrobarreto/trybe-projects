import React from 'react';
import NavBarAdmin from '../../components/NavBarAdmin';
// import UserRegister from '../../components/RegisterUser';
import UserList from '../../components/UserList';

function AdminManage() {
  return (
    <>
      <NavBarAdmin />
      {/* <UserRegister /> */}
      <UserList />
    </>
  );
}

export default AdminManage;
