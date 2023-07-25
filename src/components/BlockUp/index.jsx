import './style.css';
import BlockUpImg from '../../assets/images/block/block-up.png';

function BlockUp() {
  return (
    <div className="block-up">
      <img
        className="img-block-up"
        src={BlockUpImg}
        alt="Décoration bloc haut"
        width={240}
        height={64}
      />
    </div>
  );
}

export default BlockUp;
