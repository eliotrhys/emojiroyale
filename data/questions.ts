import { MediaType } from "../app/types/MediaType";

export const questions = [
    // MOVIE SECTION
    {
        title: "The Lion King",
        acceptableAnswers: ["the lion king", "lion king", "lionking"],
        emoji: "🦁/👑",
        mediaType: MediaType.Movie
    },
    {
        title: "Spider Man",
        acceptableAnswers: ["spider man", "spiderman", "spider-man"],
        emoji: "🕷/👨🏻",
        mediaType: MediaType.Movie
    },
    {
        title: "Interview With The Vampire",
        acceptableAnswers: ["interview with the vampire", "the interview with the vampire", "interview with vampire"],
        emoji: "👨🏻/🎙/🧛🏻",
        mediaType: MediaType.Movie
    },
    {
        title: "Four Weddings And A Funeral",
        acceptableAnswers: ["four weddings and a funeral", "four weddings & a funeral", "four weddings"],
        emoji: "💍/💍/💍/💍/⚰️",
        mediaType: MediaType.Movie
    },
    {
        title: "The Curious Case Of Benjamin Button",
        acceptableAnswers: ["the curious case of benjamin button", "benjamin button", "curious case of benjamin button", "curious case", "benjaminbutton"],
        emoji: "👴🏻/👨🏻‍🦳/👱🏻‍♂️/👦🏼/👶🏼",
        mediaType: MediaType.Movie
    },
    {
        title: "Cool Runnings",
        acceptableAnswers: ["cool runnings", "cool running", "coolrunnings"],
        emoji: "😎/🏃‍♂️/🏃‍♂️",
        mediaType: MediaType.Movie
    },
    {
        title: "Whiplash",
        acceptableAnswers: ["whiplash"],
        emoji: "😭/🥁/🤬",
        mediaType: MediaType.Movie
    },
    {
        title: "Wedding Crashers",
        acceptableAnswers: ["wedding crashers", "weddings crashers", "wedding crasher", "the wedding crasher", "the wedding crashers", "wedding-crashers", "weddingcrashers"],
        emoji: "🤵🏻‍♂️/👰🏻/💥/🚗",
        mediaType: MediaType.Movie
    },
    {
        title: "Chicken Run",
        acceptableAnswers: ["chicken run", "chickens run", "chicken runs", "chicken-run", "chickenrun"],
        emoji: "🐔/🏃‍♂️",
        mediaType: MediaType.Movie
    },
    {
        title: "It",
        acceptableAnswers: ["it", "stephen king's it", "stephen kings it"],
        emoji: "🤡/🔪",
        mediaType: MediaType.Movie
    },
    {
        title: "Limitless",
        acceptableAnswers: ["limitless"],
        emoji: "😐/➡️/💊/➡️/🤓",
        mediaType: MediaType.Movie
    },
    {
        title: "Pirates Of The Caribbean",
        acceptableAnswers: ["pirates of the caribbean", "pirates of the carribean", "jack sparrow", "captain jack sparrow"],
        emoji: "🏴‍☠️/🏝️",
        mediaType: MediaType.Movie
    },
    {
        title: "Boss Baby",
        acceptableAnswers: ["boss baby", "baby boss"],
        emoji: "📈/👨🏻‍💼/👶🏻",
        mediaType: MediaType.Movie
    },
    {
        title: "Ghost In The Shell",
        acceptableAnswers: ["ghost in the shell", "ghost in shell"],
        emoji: "👻/➡️/🐚",
        mediaType: MediaType.Movie
    },
    {
        title: "Silence Of The Lambs",
        acceptableAnswers: ["silence of the lambs", "silence of lambs"],
        emoji: "🤫/🐑/🐑",
        mediaType: MediaType.Movie
    },
    {
        title: "The Exorcist",
        acceptableAnswers: ["the exorcist", "the excorcist", "exorcist", "excorcist", "the exorsist", "exorsist"],
        emoji: "👧🏼/🤮/🛌/👹",
        mediaType: MediaType.Movie
    },
    {
        title: "Twelve Angry Men",
        acceptableAnswers: ["twelve angry men", "12 angry men"],
        emoji: "😡/😡/😡/😡/😡/😡/😡/😡/😡/😡/😡/😡",
        mediaType: MediaType.Movie
    },
    {
        title: "West Side Story",
        acceptableAnswers: ["west side story", "westside story"],
        emoji: "⬅️/🧭/📖/🎶",
        mediaType: MediaType.Movie
    },
    {
        title: "Titanic",
        acceptableAnswers: ["titanic", "the titanic"],
        emoji: "🚢/➡️/🧊/⬇️",
        mediaType: MediaType.Movie
    },
    // FAMOUS PEOPLE SECTION
    {
        title: "Elon Musk",
        acceptableAnswers: ["elon musk", "elon", "musk"],
        emoji: "🙍🏻‍♂️/🚀/🔋/🚗/🪐",
        mediaType: MediaType.FamousPeople
    },
    {
        title: "Queen Elizabeth II",
        acceptableAnswers: ["queen elizabeth ii", "the queen", "the queen of england", "queen of england", "queen elizabeth", "elizabeth", "queen"],
        emoji: "💂🏻‍♂️/👸🏻/🐩/💂🏻‍♂️",
        mediaType: MediaType.FamousPeople
    },
    {
        title: "Christopher Columbus",
        acceptableAnswers: ["christopher columbus", "columbus", "chris columbus"],
        emoji: "🧔🏻/🌍/⛵️/👀/🌎",
        mediaType: MediaType.FamousPeople
    },
    {
        title: "Abraham Lincoln",
        acceptableAnswers: ["abraham lincoln", "lincoln", "president lincoln", "president abraham lincoln"],
        emoji: "🧔🏻/🎩/🇺🇸",
        mediaType: MediaType.FamousPeople
    },
    {
        title: "Genghis Khan",
        acceptableAnswers: ["genghis khan", "gengis khan"],
        emoji: "🇲🇳/🧔🏻/🐎/⚔️/🌏",
        mediaType: MediaType.FamousPeople
    },
    // VIDEO GAME SECTION
    {
        title: "Sly Raccoon",
        acceptableAnswers: ["sly raccoon", "sly cooper"],
        emoji: "🦝/💰/🏦",
        mediaType: MediaType.VideoGame
    },
    {
        title: "Pong",
        acceptableAnswers: ["pong", "pong game", "ping pong", "ping-pong"],
        emoji: "🏓/🕹️",
        mediaType: MediaType.VideoGame
    },
    {
        title: "Frogger",
        acceptableAnswers: ["frogger"],
        emoji: "🐸/🛣️/🚗/🚚",
        mediaType: MediaType.VideoGame
    },
    {
        title: "Mario",
        acceptableAnswers: ["mario", "super mario", "super mario brothers", "super mario bros.", "super mario bros"],
        emoji: "👨🏻‍🔧/🍄",
        mediaType: MediaType.VideoGame
    },
    {
        title: "Grand Theft Auto",
        acceptableAnswers: ["grand theft auto", "GTA"],
        emoji: "🚗/😕/🔫/😠",
        mediaType: MediaType.VideoGame
    },
    // HISTORICAL EVENT SECTION
    {
        title: "Moon Landing",
        acceptableAnswers: ["moon landing", "landing on the moon", "neil armstrong", "buzz aldrin", "moon landing 1969", "the moon landing"],
        emoji: "🌛/👨🏻‍🚀/🇺🇸",
        mediaType: MediaType.HistoricalEvent
    },
    {
        title: "The Black Death",
        acceptableAnswers: ["the black death", "black death", "the black plague", "black plague", "the plague", "plague", "bubonic plague", "bubonic"],
        emoji: "🦠/⬛️/💀/🌍/🐀",
        mediaType: MediaType.HistoricalEvent
    },
    {
        title: "Invention Of The Wheel",
        acceptableAnswers: ["invention of the wheel", "the invention of the wheel", "discovery of the wheel", "the discovery of the wheel", "the wheel", "wheel"],
        emoji: "🧔🏻/💡/🛠️/🛞",
        mediaType: MediaType.HistoricalEvent
    },
    {
        title: "The Manhattan Project",
        acceptableAnswers: ["the manhattan project", "manhattan project", "the atomic bomb", "atomic bomb", "the nuclear bomb", "nuclear bomb", "nuclear warhead", "the invention of the atomic bomb", "the invention of the nuclear bomb"],
        emoji: "👨🏻‍🔬/🍄/☁️/💣",
        mediaType: MediaType.HistoricalEvent
    },
    {
        title: "The Cold War",
        acceptableAnswers: ["the cold war", "cold war"],
        emoji: "🥶/☢️/🚀",
        mediaType: MediaType.HistoricalEvent
    },
    // BOOK SECTION
    {
        title: "The Lord Of The Rings",
        acceptableAnswers: ["the lord of the rings", "lord of the rings", "lotr", "thefellowship of the ring", "the two towers", "the return of the king", "fellowship of the ring", "two towers", "return of the king"],
        emoji: "🧙‍♂️/🧌/🧝‍♀️/💍",
        mediaType: MediaType.Book
    },
    {
        title: "Animal Farm",
        acceptableAnswers: ["animal farm", "the animal farm", "george orwell animal farm"],
        emoji: "🐷/🐴/🐕/☭",
        mediaType: MediaType.Book
    },
    {
        title: "The Hitchhiker's Guide To The Galaxy",
        acceptableAnswers: ["the hitchhiker's guide to the galaxy", "the hitchhikers guide to the galaxy", "hitchhiker's guide to the galaxy", "hitchhikers guide to the galaxy", "hitchhiker's guide", "hitchhikers guide", "hitchhiker's", "hitchhikers"],
        emoji: "👍/🗺️/🌌",
        mediaType: MediaType.Book
    },
    {
        title: "The Grapes Of Wrath",
        acceptableAnswers: ["the grapes of wrath", "grapes of wrath", "grapes wrath", "grapes wroth", "the grapes of wroth"],
        emoji: "🍇/😡",
        mediaType: MediaType.Book
    },
    {
        title: "The Old Man And The Sea",
        acceptableAnswers: ["the old man and the sea", "old man and the sea", "old man and sea"],
        emoji: "👴🏻/🌊/🎣",
        mediaType: MediaType.Book
    },
    {
        title: "War And Peace",
        acceptableAnswers: ["war and peace", "war & peace", "peace and war", "peace & war"],
        emoji: "😡/💣/🔥/🔫/🪦/&/🕊️",
        mediaType: MediaType.Book
    },
    {
        title: "Moby Dick",
        acceptableAnswers: ["moby dick", "the whale", "moaby dick", "whale"],
        emoji: "🐋/🔫/⛴️/👴🏻",
        mediaType: MediaType.Book
    },
    {
        title: "Harry Potter",
        acceptableAnswers: ["harry potter", "hogwarts", "harry potter and the philosopher's stone", "harry potter and the philosophers stone", "harry potter and the sorcerer's stone", "harry potter and the sorcerers stone"],
        emoji: "👦🏻/⚡️/🪄",
        mediaType: MediaType.Book
    },
    {
        title: "Dracula",
        acceptableAnswers: ["dracula", "bram stokers dracula", "bram stoker's dracula"],
        emoji: "🧛🏻",
        mediaType: MediaType.Book
    },
    {
        title: "Frankenstein",
        acceptableAnswers: ["frankenstein", "mary shelleys frankenstein", "mary shelley's frankenstein", "frankenstien"],
        emoji: "😵/👨🏻‍🔬/🧪/🧟‍♂️/🏘️/🔥",
        mediaType: MediaType.Book
    },
    // MYTHS AND LEGENDS SECTION
    {
        title: "King Arthur",
        acceptableAnswers: ["king arthur", "sword and the stone", "sword of the stone", "sword in the stone", "the sword in the stone", "the sword of the stone", "the sword and the stone", "the legend of king arthur", "king arthur's legend", "king arthur", "king arthur pulling the sword from the stone", "king arthur pulling the sword out of the stone"],
        emoji: "🤴🏻/🗡️/🪨/🤺",
        mediaType: MediaType.MythsLegends
    },
    {
        title: "Medusa",
        acceptableAnswers: ["medusa", "gorgon", "gorgons", "gorgo", "turn to stone", "medusa queen of the gorgons", "legend of medusa"],
        emoji: "🐍/👩🏻‍🦳/🧔🏻/👀/➡️/🐍/👩🏻‍🦳/🗿",
        mediaType: MediaType.MythsLegends
    },
    {
        title: "Sisyphus",
        acceptableAnswers: ["sisyphus", "sisyphos", "the myth of sisyphus"],
        emoji: "🏋🏼/🪨/➡️/⛰️/🪨/💨/🔁",
        mediaType: MediaType.MythsLegends
    },
    {
        title: "Thor",
        acceptableAnswers: ["thor", "god of thunder", "mjolnir", "mjölnir", "mjolnir", "thor's hammer", "thors hammer"],
        emoji: "🧔🏼‍♂️/🔨/⚡️",
        mediaType: MediaType.MythsLegends
    },
    {
        title: "The Loch Ness Monster",
        acceptableAnswers: ["the loch ness monster", "loch ness monster", "nessie", "loch ness"],
        emoji: "🐍/🌊/🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        mediaType: MediaType.MythsLegends
    },
    {
        title: "Theseus And The Minotaur",
        acceptableAnswers: ["theseus and the minotaur", "the minotaur", "minotaur", "theseus", "theseus vs the minotaur"],
        emoji: "🧔🏻‍♂️/🗡️/🐂",
        mediaType: MediaType.MythsLegends
    },
    {
        title: "Robin Hood",
        acceptableAnswers: ["robin hood", "steal from the rich and give to the poor"],
        emoji: "🧔🏻/🏰/💰/💨/🤴🏻/🤬",
        mediaType: MediaType.MythsLegends
    },
    {
        title: "Lady Godiva",
        acceptableAnswers: ["lady godiva", "godiva"],
        emoji: "👩🏼/🚫/👙/🏇🏻/😳/😡/🫢",
        mediaType: MediaType.MythsLegends
    },
    {
        title: "The Fountain Of Youth",
        acceptableAnswers: ["the fountain of youth", "fountain of youth", "water of youth", "water of life"],
        emoji: "👴🏻/➡️/⛲️/➡️/👶🏻",
        mediaType: MediaType.MythsLegends
    },
    {
        title: "Atlantis",
        acceptableAnswers: ["atlantis", "the lost city of atlantis", "lost city of atlantis", "city of atlantis", "the lost city", "lost city"],
        emoji: "🤿/🌊/⬇️/🌆",
        mediaType: MediaType.MythsLegends
    },
    // NATION FLAG SECTION
    {
        title: "United Kingdom",
        acceptableAnswers: ["UK", "the UK", "the united kingdom", "united kingdom", "britain", "great britain", "the united kingdom of great britain and northern ireland"],
        emoji: "🇬🇧",
        mediaType: MediaType.NationFlag
    },
    {
        title: "Spain",
        acceptableAnswers: ["spain", "reino de españa", "reino de espana", "españa", "espana", "kingdom of spain", "the kingdom of spain"],
        emoji: "🇪🇸",
        mediaType: MediaType.NationFlag
    },
    {
        title: "France",
        acceptableAnswers: ["france", "french republic", "the french republic", "la france", "république française", "republique francaise"],
        emoji: "🇫🇷",
        mediaType: MediaType.NationFlag
    },
    {
        title: "Germany",
        acceptableAnswers: ["germany", "federal republic of germany", "deutschland", "deutsche"],
        emoji: "🇩🇪",
        mediaType: MediaType.NationFlag
    },
    {
        title: "Italy",
        acceptableAnswers: ["italy", "italian republic", "republic of italy", "italia"],
        emoji: "🇮🇹",
        mediaType: MediaType.NationFlag
    },
    {
        title: "Finland",
        acceptableAnswers: ["finland", "the republic of finland", "republic of finland", "suomi"],
        emoji: "🇫🇮",
        mediaType: MediaType.NationFlag
    },
    {
        title: "Sweden",
        acceptableAnswers: ["sweden", "the kingdom of sweden", "kingdom of sweden", "sverige"],
        emoji: "🇸🇪",
        mediaType: MediaType.NationFlag
    },
    {
        title: "Norway",
        acceptableAnswers: ["norway", "the kingdom of norway", "kingdom of norway", "norge", "noreg"],
        emoji: "🇸🇪",
        mediaType: MediaType.NationFlag
    },
    {
        title: "England",
        acceptableAnswers: ["england"],
        emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        mediaType: MediaType.NationFlag
    },
    {
        title: "Scotland",
        acceptableAnswers: ["scotland", "alba"],
        emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        mediaType: MediaType.NationFlag
    },
    {
        title: "Wales",
        acceptableAnswers: ["wales", "cymru"],
        emoji: "󠁧󠁢🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        mediaType: MediaType.NationFlag
    },
    {
        title: "Ireland",
        acceptableAnswers: ["ireland", "Éire", "eire"],
        emoji: "🇮🇪",
        mediaType: MediaType.NationFlag
    },
    // SONG SECTION
    {
        title: "We Will Rock You",
        acceptableAnswers: ["we will rock you", "we will we will rock you"],
        emoji: "🥾/🥾/👏",
        mediaType: MediaType.Song
    },
    {
        title: "We Didn't Start The Fire",
        acceptableAnswers: ["we didn't start the fire", "we didnt start the fire", "we did not start the fire", "billy joel", "didnt start the fire", "didn't start the fire"],
        emoji: "🔥/🙅‍♂️/🙅‍♀️",
        mediaType: MediaType.Song
    },
    {
        title: "Single Ladies",
        acceptableAnswers: ["single ladies", "all the single ladies", "single ladies by beyonce", "all the single ladies by beyonce"],
        emoji: "✋/🤚/✋/🤚/💍",
        mediaType: MediaType.Song
    },
    {
        title: "Shape Of You",
        acceptableAnswers: ["shape of you", "the shape of you", "im in love with the shape of you", "i'm in love with the shape of you" ,"shape of you by ed sheeran"],
        emoji: "🟪/🔺/🟢/🫵",
        mediaType: MediaType.Song
    },
    {
        title: "Stairway To Heaven",
        acceptableAnswers: ["stairway to heaven", "the stairway to heaven", "stairway to heaven by led zeppelin", "stairway too heaven"],
        emoji: "🪜/☁️/👼🏻/👼🏻/☁️",
        mediaType: MediaType.Song
    },
    {
        title: "Born To Run",
        acceptableAnswers: ["born to run", "born 2 run", "born to run by bruce springsteen", "born to run by springsteen"],
        emoji: "👶🏻/2️⃣/🏃‍♂️",
        mediaType: MediaType.Song
    },
    {
        title: "Over The Rainbow",
        acceptableAnswers: ["over the rainbow", "somewhere over the rainbow"],
        emoji: "↗️/🌈/↘️",
        mediaType: MediaType.Song
    },
    {
        title: "Dancing Queen",
        acceptableAnswers: ["dancing queen", "the dancing queen", "abba dancing queen", "dancing queen by abba", "dancin' queen"],
        emoji: "💃/👸🏼",
        mediaType: MediaType.Song
    },
    {
        title: "Dancing In The Moonlight",
        acceptableAnswers: ["dancing in the moonlight", "dancin in the moonlight", "dancin' in the moonlight"],
        emoji: "💃/🕺/🌝/🔦",
        mediaType: MediaType.Song
    },
    {
        title: "Sweet Child O' Mine",
        acceptableAnswers: ["sweet child o' mine", "sweet child o mine", "sweet child of mine"],
        emoji: "🍬/👶🏻/⛏️",
        mediaType: MediaType.Song
    },
];