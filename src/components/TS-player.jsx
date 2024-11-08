import { useEffect, useState } from 'react';
import "trackswitch/dist/js/trackswitch.min.js";
import "trackswitch/dist/css/trackswitch.min.css";
//import '../assets/js/ts-settings.js'

window.downwardRamp = window.downwardRamp || {};

const TSPlayer = ({ data }) => {

  console.log(data);

  const [sources, setSources] = useState([]);

  useEffect(() => {
    setSources(data);

    jQuery(document).ready(function() {
      var settings = {
          repeat: true,
          solo: false,
          radiosolo: false,
          spacebar: true,
          tabview: false
      };
      jQuery(".player").trackSwitch(settings); // All other players are default
    });

  }, [data]);

  return (
    <>
      <div className="player">
        {data.map((source, index) => (
          <ts-track key={index} title={source.title} data-seek-margin-left="4" data-seek-margin-right="4">
            <ts-source src={source.src} type={source.type}></ts-source>
          </ts-track>
        ))}
      </div>
    </>
  );
};

export default TSPlayer;