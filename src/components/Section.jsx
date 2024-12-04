import AudioPlayer from "./waveform.jsx";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export const Section = ({ section }) => {
  const location = useLocation();

  console.log(location.pathname);

  switch (section.type) {
    case "header":
      return (
        <h2 className="text-2xl font-bold mt-5 mb-3">{section.content}</h2>
      );

    case "text":
      return <p className="mb-4 text-gray-700">{section.content}</p>;

    case "div":
      return (
        <div dangerouslySetInnerHTML={ { __html: section.content } }></div>
      );

    case "audio": {
      return (
        <AudioPlayer key={location.pathname} playlists={section.playlists} slides={section.slides} />
      );
    }
    default:
      return null;
  }
};

Section.propTypes = {
  section: PropTypes.shape({
    type: PropTypes.string.isRequired,
    content: PropTypes.string,
    playlists: PropTypes.array,
    slides: PropTypes.array,
  }).isRequired,
};
