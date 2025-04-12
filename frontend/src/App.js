import AOS from 'aos';
import 'aos/dist/aos.css';
import RoutesPage from './Components/Routes/RoutesPage';
AOS.init();

const  ChatApp=() => {
  
  return (
    <div className="container">
          <RoutesPage/>
    </div>
  );
}

export default ChatApp;
