export interface UserContextType {
  user: string;
  newUser: (name: string) => void;
  logout: () => void;
}
