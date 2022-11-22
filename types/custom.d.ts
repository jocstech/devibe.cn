interface Response<T> {
  code: number;
  message: string;
  data: T;
  type: string;
}

interface Credential {
  username: string;
  password: string;
}

interface SystemUser {
  readonly _id?: string;
  username?: string;
  password?: string;
  hash?: string;
  email?: string;
  avatar?: string;
  nickname?: string;
  name?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  verified?: boolean;
  blocked?: boolean;
  roles?: string[];
  exp?: number;
  iat?: number;
  creator?: SystemUser;
  updator?: SystemUser;
  created_at?: Date;
  updated_at?: Date;
}

interface CRMArticle {
  readonly _id?: string;
  slug?: string;
  cover?: string;
  title?: string;
  subtitle?: string;
  editor_type?: string;
  content?: string;
  excerpt?: string;
  tags?: CRMTag[];
  roles?: any[];
  published_at?: Date | string;
  author?: SystemUser;
  updator?: SystemUser;
  creator?: SystemUser;
}
