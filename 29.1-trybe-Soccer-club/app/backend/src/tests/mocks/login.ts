import { IUser } from "../../interfaces/user";

const validUserResponse:IUser[] = [{
  id:1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW', // secret_admin
},
{
  id:2,
  username: 'User',
  role: 'user',
  email: 'user@user.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO', // secret_user
},
]

const ValidUserRequest = { 
  email: 'admin@admin.com',
  password: 'secret_admin'
}

export { validUserResponse, ValidUserRequest };