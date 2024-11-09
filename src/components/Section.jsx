import AudioPlayer from "./waveform.jsx";
import PropTypes from 'prop-types';

export const Section = ({ section }) => {

    switch (section.type) {
        case "header":
            return (
                <h2 className="text-2xl font-bold mt-5 mb-3">{section.content}</h2>
            );

        case "text":
            return <p className="mb-4 text-gray-700">{section.content}</p>;

        case "audio": {
            
            return <AudioPlayer data={section.sources} />;
        }
        default:
            return null;
};

};
