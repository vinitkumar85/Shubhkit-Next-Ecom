import Navbar from '../atoms/navbar';

const Header = ({ children }) => (
    <div>
       <p><img src="/logo.png" width="150"/></p>
       <Navbar/>
    </div>
  );

  export default Header;