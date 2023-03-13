enum MediaType {
    MovieScene = '🎬 Scene from a movie',
    TVScene = "📺 Scene from a TV show",
    MovieTitle = "🎬 Movie title",
    TVTitle = "🎬 TV show title",
    GameTitle = "👾 Video game title"
};

export const questions = [
    {
        title: "The Lion King",
        emoji: "🦁👑",
        mediaType: MediaType.MovieTitle
    },
    {
        title: "Spider Man",
        emoji: "🕷👨🏻",
        mediaType: MediaType.MovieTitle
    },
    {
        title: "Interview With The Vampire",
        emoji: "👨🏻🎙🧛🏻",
        mediaType: MediaType.MovieTitle
    },
    {
        title: "Sly Raccoon",
        emoji: "🦝💰🏦",
        mediaType: MediaType.GameTitle
    },
];