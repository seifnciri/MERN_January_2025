import Subcontent from './Subcontent';
import Advertisement from './Advertisement';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="subcontent-container">
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </div>
      <Advertisement />
    </div>
  );
};

export default MainContent;