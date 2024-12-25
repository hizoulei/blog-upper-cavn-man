export interface userInfo {
  id?: number;
  account?: string;
  phone?: string;
  email?: string;
}

export interface createUserType {
  account: string;
  password: string;
  nickname: string;
}

export interface userInfoType {
  id: number;
  account: string;
  phone: string;
  email: string;
  password: string;
  nickname: string;
  avatar: string;
  address: string;
  created_at: string;
  updated_at: string;
}
