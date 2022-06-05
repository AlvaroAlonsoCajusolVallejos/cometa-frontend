interface UserInformation {
  user?: User;
  kitchen?: KitchenUser;
  isAuthenticated: Boolean;
}

interface User {
  name: string;
  document: string;
}

interface KitchenUser {
  kitchenId: string;
  name: string;
}

export type { UserInformation, User, KitchenUser };
