export interface IUser {
  username: string, 
  classe:string, 
  level:number, 
  password: string,
}

export interface Login {
  username: string, 
  password: string, 
}

export interface DToken {
  id?: number, 
  username?: string, 
  iat?: number,
  exp?: number,
  message: string,
}

export interface SToken {
  id: number, 
  username: string, 
}

export interface User extends IUser {
  id: number,
}
