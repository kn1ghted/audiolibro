import 'trackswitch';
import "trackswitch/dist/js/trackswitch.min.js";
import "trackswitch/dist/css/trackswitch.min.css";
import '../assets/js/ts-settings.js'

// Import assets
import mix from '../assets/img/mix.png'
import mixAudio from '../assets/audio/mix.wav'
import campana from '../assets/img/campana_de_mano.png'

window.downwardRamp = window.downwardRamp || {};

const TSPlayer = () => {
  return (
    <>
      <div className="player">
        <img className="seekable" data-seek-margin-left="1" data-seek-margin-right="1" src= {mix} alt="seekable"/>
        <p>Pistas de audio con controles individuales</p>
        <ts-track title="Audio Mix" data-seek-margin-left="4" data-seek-margin-right="4" data-img={campana}>
            <ts-source src={mixAudio} type="audio/wav"></ts-source>
        </ts-track>
      </div>
    </>
  );
};

export default TSPlayer;