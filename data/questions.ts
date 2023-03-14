enum MediaType {
    MovieScene = '🎬 Scene from a movie',
    TVScene = "📺 Scene from a TV show",
    MovieTitle = "🎬 Movie title",
    TVTitle = "🎬 TV show title",
    GameTitle = "👾 Video game title",
    HistoricalEvent = "📜 Historical event",
};

export const questions = [
    {
        title: "The Lion King",
        acceptableAnswers: ["The Lion King", "Lion King", "lionking"],
        emoji: "🦁👑",
        mediaType: MediaType.MovieTitle
    },
    {
        title: "Spider Man",
        acceptableAnswers: ["Spider Man", "Spiderman"],
        emoji: "🕷👨🏻",
        mediaType: MediaType.MovieTitle
    },
    {
        title: "Interview With The Vampire",
        acceptableAnswers: ["Interview With The Vampire"],
        emoji: "👨🏻🎙🧛🏻",
        mediaType: MediaType.MovieTitle
    },
    {
        title: "Sly Raccoon",
        acceptableAnswers: ["Sly Raccoon", "Sly Cooper"],
        emoji: "🦝💰🏦",
        mediaType: MediaType.GameTitle
    },
    {
        title: "Moon Landing",
        acceptableAnswers: ["Moon Landing", "Landing On The Moon", "Neil Armstrong", "Buzz Aldrin", "Moon Landing 1969", "The Moon Landing"],
        emoji: "🌛🧑🏻‍🚀🇺🇸",
        mediaType: MediaType.HistoricalEvent
    }
];