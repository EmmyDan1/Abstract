export type ContentTableType = {
    id: number;
    title: string;
    text: string;
    img: string;
    link: string;
} 


export type User = {
  id?: string;
  name: string;
  email: string;
  password?: string;
  profilepic?: string;
};

export type UserAuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  signUp: (userData: User) => Promise<void>;
  logout: () => void;
  error: string | null;
  isLoading: boolean;
};