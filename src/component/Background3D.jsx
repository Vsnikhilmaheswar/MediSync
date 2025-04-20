// Background3D.jsx
import Spline from '@splinetool/react-spline';

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
         <Spline scene="https://prod.spline.design/vvDvYaHwXCwPC8Hi/scene.splinecode" />
    </div>
  );
};

export default Background3D;
