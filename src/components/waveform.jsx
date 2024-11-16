import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import WaveformPlaylist from "waveform-playlist";
import "../assets/css/waveform-playlist.css";

const AudioPlayer = ({ playlists }) => {
  const playlistRefs = useRef([]);
  const eeRefs = useRef([]); // Store event emitters


  useEffect(() => {

    // if playlists are playing, stop them and mount new ones
    playlistRefs.current.forEach((playlist) => {
      console.log("test", playlist);
    });

    playlists.forEach((playlist, index) => {
      if (!playlistRefs.current[index]) {
        playlistRefs.current[index] = WaveformPlaylist({
          samplesPerPixel: 1000,
          waveHeight: 60,
          container: document.getElementById(playlist.id),
          timescale: true,
          isScrolling: true,
          isAutomaticScroll: true,
          colors: {
            waveOutlineColor: "#f8f9fa",
            timeColor: "#fbfa81",
            fadeColor: "#040415",
          },
          controls: {
            show: true,
            width: 150,
            widgets: {
              remove: false,
              stereoPan: false,
              volume: false,
              collapse: false,
            },
          },
          zoomLevels: [500, 1000, 3000, 5000],
        });

        playlistRefs.current[index].load(playlist.data).then(function () {
          const ee = playlistRefs.current[index].getEventEmitter();
          eeRefs.current[index] = ee; // Store the event emitter

          const playBtn = document.getElementById(`btn-play-${playlist.id}`);
          const pauseBtn = document.getElementById(`btn-pause-${playlist.id}`);
          const stopBtn = document.getElementById(`btn-stop-${playlist.id}`);
          const loopBtn = document.getElementById(`btn-loop-${playlist.id}`);

          let isLooping = true;

          playBtn?.addEventListener("click", function () {
            ee.emit("play");
            playBtn.classList.add('active');
          });

          pauseBtn?.addEventListener("click", function () {
            ee.emit("pause");
            playBtn.classList.remove('active');
          });

          stopBtn?.addEventListener("click", function () {
            ee.emit("stop");
            playBtn.classList.remove('active');
          });

          loopBtn?.addEventListener("click", function () {
            isLooping = !isLooping;
            loopBtn.classList.toggle('active');
          });

          ee.on("finished", function () {
            console.log("Playback finished!");
            if (isLooping) {
              ee.emit("rewind");
              setTimeout(() => {
                ee.emit("play");
              }, 50);
            }
          });

        });
      }
    });

    // Cleanup function
    return () => {
      // stop all playlists
      playlistRefs.current.forEach((playlist) => {
        playlist.getEventEmitter().emit("stop");
      });
    };
  }, [playlists]);

  return (
    <div>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <div className="playlist-top-bar mb-4">
          <div className="playlist-toolbar">
              <button
                type="button"
                id={`btn-pause-${playlist.id}`}
                className="btn-pause btn btn-outline-warning"
                title="Pause"
              >
                <i className="fas fa-circle-pause" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                id={`btn-play-${playlist.id}`}
                className="btn-play btn btn-outline-success"
                title="Play"
              >
                <i className="fas fa-circle-play" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                id={`btn-stop-${playlist.id}`}
                className="btn-stop btn btn-outline-danger"
                title="Stop"
              >
                <i className="fa-regular fa-circle-stop" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                id={`btn-loop-${playlist.id}`}
                className="btn-loop btn-stop btn btn btn-outline-secondary active"
                title="Toggle Loop"
              >
                <i className="fa-solid fa-repeat" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div id={playlist.id} className="rounded h-[60px]" />
        </div>
      ))}
    </div>
  );
};

AudioPlayer.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.array.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AudioPlayer;