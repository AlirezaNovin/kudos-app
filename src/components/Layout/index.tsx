import { Footer } from "./Footer";
import { Header } from "./Header";

interface ILayoutProps {}
export const Layout: React.FC<ILayoutProps> = (children): JSX.Element => {
  return (
    <>
      <Header />
      children
      <Footer />
    </>
  );
};
