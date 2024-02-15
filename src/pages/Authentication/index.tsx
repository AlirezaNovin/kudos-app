import { Authentication } from '../../components/Authentication';

interface IAuthenticationPageProps {}
export const AuthenticationPage: React.FC<
  IAuthenticationPageProps
> = (): JSX.Element => {
  return <Authentication />;
};
