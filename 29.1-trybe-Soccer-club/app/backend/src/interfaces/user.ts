export interface IUser {
  id: number,
  username:string,
  role:string,
  email:string,
  password:string,
}

export interface SToken {
  id: number,
  email: string,
}

export interface DToken {
  id?: number,
  email?: string,
  iat?: number,
  exp?: number,
  message: string,
}

export interface FilterUser {
  where: {
    email: string | undefined,
  }
}
