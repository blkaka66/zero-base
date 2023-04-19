
import "./Body.module.css";
import BodyUp from './BodyCaresol/BodyUp';
import BodyDown from './BodyDown';

interface BodyProps {
  theme:boolean;
}
function Body({ theme }: BodyProps) {

  return (
    <div>
      <BodyUp/>
      <BodyDown  theme={theme} />
    </div>
  )
}





export default Body;
