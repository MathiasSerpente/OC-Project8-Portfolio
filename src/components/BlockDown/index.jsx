import './style.css';
import BlockDownImg from '../../assets/images/block/block-down.png';

function BlockDown() {
  return (
    <div className="block-down">
      <img
        className="img-block-down"
        src={BlockDownImg}
        alt="Décoration bloc bas"
        width={240}
        height={64}
      />
    </div>
  );
}

export default BlockDown;
