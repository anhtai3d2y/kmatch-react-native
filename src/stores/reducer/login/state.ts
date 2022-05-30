export interface ILoginState {
  isFetching: boolean;
  login: any;
  error: any;
  message: string;
}

export const initialLoginState: ILoginState = {
  isFetching: false,
  login: null,
  error: null,
  message: '',
};
