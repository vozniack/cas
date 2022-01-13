export interface UserState {

  token?: string;
}

export const initializeUserState = (): UserState => {
  return {
    token: undefined
  }
}
