import React, { useEffect } from 'react';
import 'trackswitch';
import "trackswitch/dist/js/trackswitch.min.js";
import "trackswitch/dist/css/trackswitch.min.css";
import '../assets/js/ts-settings.js'

// Import assets
// import mix from '../assets/img/mix.png'
import mixAudio from '../assets/audio/mix.wav'
import campana from '../assets/img/campana_de_mano.png'

window.downwardRamp = window.downwardRamp || {};

const TSPlayer = ({ sources }) => {
  useEffect(() => {
    jQuery(document).ready(function () {
      var settings = {
        repeat: true,
        solo: false,
        radiosolo: false,
        spacebar: true,
        tabview: false,
      };
      jQuery(".player").trackSwitch(settings); // All other players are default
    });
  }, []);

  return (
    <>
      <div className="player">
        {sources.map((source, index) => (
          <ts-track key={index} title={source.title} data-seek-margin-left="4" data-seek-margin-right="4">
            <ts-source src={source.src} type={source.type}></ts-source>
          </ts-track>
        ))}
      </div>
    </>
  );
};

export default TSPlayer;