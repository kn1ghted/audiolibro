import TSPlayer from "./TS-player";

export const Section = ({ section }) => {
    // Helper function to check if content is audio content
    const isAudioContent = (content) => {
        return (
            typeof content === "object" &&
            content !== null &&
            "sourceFolder" in content &&
            "tracks" in content
        );
    };

    switch (section.type) {
        case "header":
            return (
                <h2 className="text-2xl font-bold mb-4">{section.content}</h2>
            );

        case "text":
            return <p className="mb-4 text-gray-700">{section.content}</p>;

        case "audio": {
            
            return <TSPlayer sources={section.sources} />;
        }
        default:
            return null;
    }
};
