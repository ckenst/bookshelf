(function () {
  const statuses = ['reading', 'finishing', 'finished', 'want-to-read', 'unknown', 'unfinished', 'unread', 'paused'];
  const formats = ['unspecified', 'kindle', 'audible', 'both'];
  const seedBooks = [
    { id: 'vibe-coding', title: 'Vibe Coding', authors: 'Gene Kim & Steve Yegge', status: 'finishing', format: 'audible', notes: '', theme: 'vibe', addedAt: '2026-06-25', listeningEvents: [{ date: '2026-09-27', status: 'unfinished' }], subtitle: 'Building Production-Grade Software With GenAI, Chat, Agents, and Beyond', source: 'https://www.simonandschuster.com/books/Vibe-Coding/Gene-Kim/9781966280026' },
    { id: 'protocols', title: 'Protocols', authors: 'Andrew D. Huberman', status: 'reading', format: 'unspecified', notes: '', theme: 'protocols', subtitle: 'An Operating Manual for the Human Body', source: 'https://www.simonandschuster.com/books/Protocols/Andrew-D-Huberman/9781668032145' },
    {"id": "kissinger", "title": "Kissinger", "authors": "Walter Isaacson", "addedAt": "2026-07-27", "status": "unknown", "format": "unspecified", "notes": ""},
    {"id": "titan", "title": "Titan", "authors": "Ron Chernow", "addedAt": "2026-06-25", "status": "unknown", "format": "unspecified", "notes": ""},
    {"id": "the-nvidia-way", "title": "The Nvidia Way", "authors": "Tae Kim", "addedAt": "2026-03-21", "status": "unknown", "format": "unspecified", "notes": ""},
    {"id": "breakneck", "title": "Breakneck", "authors": "Dan Wang", "addedAt": "2026-03-06", "status": "unknown", "format": "unspecified", "notes": ""},
    {"id": "the-comfort-crisis", "title": "The Comfort Crisis", "authors": "Michael Easter", "addedAt": "2025-11-22", "status": "unknown", "format": "unspecified", "notes": ""},
    {"id": "engineering-management", "title": "Engineering Management for the Rest of Us", "authors": "Author not specified", "status": "unfinished", "format": "audible", "notes": "", "listeningEvents": [{"date": "2026-02-12", "status": "unfinished"}]},
    {"id": "the-goal", "title": "The Goal", "authors": "Goldratt", "status": "finished", "format": "audible", "notes": "", "listeningEvents": [{"date": "2025-11-07", "status": "finished"}]}
  ];
  seedBooks.push(...[{"id": "elon-musk", "title": "Elon Musk", "authors": "Walter Isaacson", "addedAt": "2025-08-22", "finishedAt": "2025-12-12", "status": "finished", "statusRevision": 1, "format": "unspecified", "notes": ""}, {"id": "wool", "title": "Wool", "authors": "Hugh Howey", "addedAt": "2025-01-24", "finishedAt": "2025-02-19", "status": "finished", "statusRevision": 1, "format": "unspecified", "notes": ""}, {"id": "shift", "title": "Shift", "authors": "Hugh Howey", "addedAt": "2025-06-04", "finishedAt": "2025-06-18", "status": "finished", "statusRevision": 1, "format": "unspecified", "notes": ""}, {"id": "dust", "title": "Dust", "authors": "Hugh Howey", "addedAt": "2025-07-21", "finishedAt": "2025-08-01", "status": "finished", "statusRevision": 1, "format": "unspecified", "notes": ""}]);
  seedBooks.find(b => b.id === "protocols").addedAt = "2026-10";
  seedBooks.find(b => b.id === "engineering-management").addedAt = "2025-10-25";
  seedBooks.push(...[
  {
    "id": "tiny-experiments",
    "title": "Tiny Experiments",
    "authors": "Anne-Laure Le Cunff",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/tiny-experiments-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41GGz9i9GoL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Tiny-Experiments-Audiobook/B0D8LLXKLR",
    "addedAt": "2025-03-05",
    "audibleObservation": {
      "observedAt": "2025-07-15",
      "progressPercent": 0,
      "displayedProgress": "6h 25m left"
    }
  },
  {
    "id": "digital-minimalism",
    "title": "Digital Minimalism",
    "authors": "Cal Newport",
    "status": "finished",
    "format": "audible",
    "notes": "",
    "cover": "assets/digital-minimalism-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51KzXfk6-hL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Digital-Minimalism-Audiobook/B07LGF8TCJ",
    "addedAt": "2025-02-20",
    "audibleObservation": {
      "observedAt": "2025-05-29",
      "progressPercent": 100,
      "displayedProgress": "Finished"
    }
  },
  {
    "id": "radical-candor-fully-revised-updated-edition",
    "title": "Radical Candor: Fully Revised & Updated Edition",
    "authors": "Kim Scott",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/radical-candor-fully-revised-updated-edition-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/412O+gU9XZL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Radical-Candor-Fully-Revised-Updated-Edition-Audiobook/1250245788",
    "addedAt": "2025-02-20"
  },
  {
    "id": "what-the-heck-is-eos",
    "title": "What the Heck is EOS?",
    "authors": "Gino Wickman, Tom Bouwer",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/what-the-heck-is-eos-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51USjd5WJlL._SL320_.jpg",
    "source": "https://www.audible.com/pd/What-the-Heck-is-EOS-Audiobook/B077Y12QDJ",
    "addedAt": "2025-01-28",
    "audibleObservation": {
      "observedAt": "2025-02-14",
      "progressPercent": 99,
      "displayedProgress": "0h 1m left"
    }
  },
  {
    "id": "how-to-talk-so-little-kids-will-listen",
    "title": "How to Talk So Little Kids Will Listen",
    "authors": "Joanna Faber, Julie King",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/how-to-talk-so-little-kids-will-listen-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/6137ZXV2sxL._SL320_.jpg",
    "source": "https://www.audible.com/pd/How-to-Talk-So-Little-Kids-Will-Listen-Audiobook/B01MYT9CNX",
    "addedAt": "2025-01-26"
  },
  {
    "id": "the-worlds-i-see",
    "title": "The Worlds I See",
    "authors": "Fei-Fei Li",
    "status": "finished",
    "format": "audible",
    "notes": "",
    "cover": "assets/the-worlds-i-see-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51cEf2vKKnL._SL320_.jpg",
    "source": "https://www.audible.com/pd/The-Worlds-I-See-Audiobook/B0BSP3QDZH",
    "addedAt": "2024-12-11",
    "audibleObservation": {
      "observedAt": "2025-02-07",
      "progressPercent": 100,
      "displayedProgress": "Finished"
    }
  },
  {
    "id": "dune-messiah",
    "title": "Dune Messiah",
    "authors": "Frank Herbert",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/dune-messiah-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41dcXp9bIoL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Dune-Messiah-Audiobook/B002V8H660",
    "addedAt": "2024-11-04",
    "audibleObservation": {
      "observedAt": "2026-05-15",
      "progressPercent": 0,
      "displayedProgress": "8h 57m left"
    }
  },
  {
    "id": "tiny-humans-big-emotions",
    "title": "Tiny Humans, Big Emotions",
    "authors": "Alyssa Blask Campbell, Lauren Elizabeth Stauble",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/tiny-humans-big-emotions-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/417vLkXpWnL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Tiny-Humans-Big-Emotions-Audiobook/B0BT3KSS36",
    "addedAt": "2024-07-16",
    "audibleObservation": {
      "observedAt": "2025-01-20",
      "progressPercent": 2,
      "displayedProgress": "10h 0m left"
    }
  },
  {
    "id": "million-dollar-weekend",
    "title": "Million Dollar Weekend",
    "authors": "Noah Kagan, Tahl Raz",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/million-dollar-weekend-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41SO9dIN3JL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Million-Dollar-Weekend-Audiobook/B0C6YK4917",
    "addedAt": "2024-07-16",
    "audibleObservation": {
      "observedAt": "2025-03-09",
      "progressPercent": 75,
      "displayedProgress": "1h 8m left"
    }
  },
  {
    "id": "thinking-in-systems",
    "title": "Thinking in Systems",
    "authors": "Donella H. Meadows",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/thinking-in-systems-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51YXiA+y-VL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Thinking-in-Systems-Audiobook/B07FWBN4Q5",
    "addedAt": "2024-02-17",
    "audibleObservation": {
      "observedAt": "2025-06-22",
      "progressPercent": 25,
      "displayedProgress": "4h 49m left"
    }
  },
  {
    "id": "charlie-munger",
    "title": "Charlie Munger",
    "authors": "Tren Griffin",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/charlie-munger-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/411hDfeZsqL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Charlie-Munger-Audiobook/B0158USVC0",
    "addedAt": "2023-11-29"
  },
  {
    "id": "friends-lovers-and-the-big-terrible-thing",
    "title": "Friends, Lovers, and the Big Terrible Thing",
    "authors": "Matthew Perry",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/friends-lovers-and-the-big-terrible-thing-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/519o7a61MzL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Friends-Lovers-and-the-Big-Terrible-Thing-Audiobook/B09RQ4HRHN",
    "addedAt": "2023-11-09",
    "audibleObservation": {
      "observedAt": "2026-10-19",
      "progressPercent": 99,
      "displayedProgress": "0h 5m left"
    }
  },
  {
    "id": "mastery",
    "title": "Mastery",
    "authors": "Robert Greene",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/mastery-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41y9IkSGfwL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Mastery-Audiobook/B00A4OPH0U",
    "addedAt": "2023-09-18"
  },
  {
    "id": "outlive",
    "title": "Outlive",
    "authors": "Peter Attia, Bill Gifford",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/outlive-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41w+zyAK8NL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Outlive-Audiobook/B0B6444XS3",
    "addedAt": "2023-09-09",
    "audibleObservation": {
      "observedAt": "2024-10-31",
      "progressPercent": 76,
      "displayedProgress": "4h 6m left"
    }
  },
  {
    "id": "the-revolt-of-the-public-and-the-crisis-of-authority-in-the-new-millennium",
    "title": "The Revolt of The Public and the Crisis of Authority in the New Millennium",
    "authors": "Martin Gurri",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/the-revolt-of-the-public-and-the-crisis-of-authority-in-the-new-millennium-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51TKrzVSgkL._SL320_.jpg",
    "source": "https://www.audible.com/pd/The-Revolt-of-The-Public-and-the-Crisis-of-Authority-in-the-New-Millennium-Audiobook/B07K6WSG93",
    "addedAt": "2023-09-08",
    "audibleObservation": {
      "observedAt": "2024-02-09",
      "progressPercent": 37,
      "displayedProgress": "8h 37m left"
    }
  },
  {
    "id": "dollars-and-sense",
    "title": "Dollars and Sense",
    "authors": "Dan Ariely, Jeff Kreisler",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/dollars-and-sense-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51-7PikbokL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Dollars-and-Sense-Audiobook/B074CNGRN2",
    "addedAt": "2023-08-21",
    "audibleObservation": {
      "observedAt": "2025-06-04",
      "progressPercent": 20,
      "displayedProgress": "7h 21m left"
    }
  },
  {
    "id": "capitalism-in-america",
    "title": "Capitalism in America",
    "authors": "Alan Greenspan, Adrian Wooldridge",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/capitalism-in-america-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51D3yTnCsAL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Capitalism-in-America-Audiobook/0525635653",
    "addedAt": "2023-07-30",
    "audibleObservation": {
      "observedAt": "2023-09-22",
      "progressPercent": 95,
      "displayedProgress": "0h 48m left"
    }
  },
  {
    "id": "deep-work",
    "title": "Deep Work",
    "authors": "Cal Newport",
    "status": "finished",
    "format": "audible",
    "notes": "",
    "cover": "assets/deep-work-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51CTJKORW7L._SL320_.jpg",
    "source": "https://www.audible.com/pd/Deep-Work-Audiobook/B0189PX1RQ",
    "addedAt": "2023-07-30",
    "audibleObservation": {
      "observedAt": "2024-08-28",
      "progressPercent": 100,
      "displayedProgress": "Finished"
    }
  },
  {
    "id": "me",
    "title": "Me",
    "authors": "Elton John",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/me-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/519GCEJZ3YL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Me-Audiobook/125023106X",
    "addedAt": "2023-07-30",
    "audibleObservation": {
      "observedAt": "2023-10-17",
      "progressPercent": 99,
      "displayedProgress": "0h 7m left"
    }
  },
  {
    "id": "cribsheet",
    "title": "Cribsheet",
    "authors": "Emily Oster",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/cribsheet-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41sCSucUhaL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Cribsheet-Audiobook/1984838873",
    "addedAt": "2023-06-05"
  },
  {
    "id": "greenlights",
    "title": "Greenlights",
    "authors": "Matthew McConaughey",
    "status": "finished",
    "format": "audible",
    "notes": "",
    "cover": "assets/greenlights-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51m+AA2gNaL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Greenlights-Audiobook/0593294181",
    "addedAt": "2023-06-05",
    "audibleObservation": {
      "observedAt": "2023-06-21",
      "progressPercent": 100,
      "displayedProgress": "Finished"
    }
  },
  {
    "id": "economics-in-one-lesson",
    "title": "Economics in One Lesson",
    "authors": "Henry Hazlitt",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/economics-in-one-lesson-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51wXKAORQTL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Economics-in-One-Lesson-Audiobook/B002V0KK0C",
    "addedAt": "2023-05-04"
  },
  {
    "id": "love-pamela",
    "title": "Love, Pamela",
    "authors": "Pamela Anderson",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/love-pamela-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/518NczRivxL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Love-Pamela-Audiobook/B0BCH8WLGL",
    "addedAt": "2023-02-16",
    "audibleObservation": {
      "observedAt": "2023-03-01",
      "progressPercent": 99,
      "displayedProgress": "0h 3m left"
    }
  },
  {
    "id": "alexander-hamilton",
    "title": "Alexander Hamilton",
    "authors": "Ron Chernow",
    "status": "finished",
    "format": "audible",
    "notes": "",
    "cover": "assets/alexander-hamilton-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41CPS3JoO6L._SL320_.jpg",
    "source": "https://www.audible.com/pd/Alexander-Hamilton-Audiobook/B002UZLEFS",
    "addedAt": "2023-02-12",
    "audibleObservation": {
      "observedAt": "2023-04-19",
      "progressPercent": 100,
      "displayedProgress": "Finished"
    }
  },
  {
    "id": "how-the-post-office-created-america",
    "title": "How the Post Office Created America",
    "authors": "Winifred Gallagher",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/how-the-post-office-created-america-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51HUmCq+M8L._SL320_.jpg",
    "source": "https://www.audible.com/pd/How-the-Post-Office-Created-America-Audiobook/B01G62F62M",
    "addedAt": "2023-02-06",
    "audibleObservation": {
      "observedAt": "2023-07-31",
      "progressPercent": 21,
      "displayedProgress": "8h 29m left"
    }
  },
  {
    "id": "noise",
    "title": "Noise",
    "authors": "Daniel Kahneman, Olivier Sibony, Cass R. Sunstein",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/noise-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41ahUW55KJS._SL320_.jpg",
    "source": "https://www.audible.com/pd/Noise-Audiobook/1984832069",
    "addedAt": "2022-11-22",
    "audibleObservation": {
      "observedAt": "2023-03-26",
      "progressPercent": 1,
      "displayedProgress": "13h 19m left"
    }
  },
  {
    "id": "food-rules",
    "title": "Food Rules",
    "authors": "Michael Pollan",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/food-rules-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41xTy5LhBwL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Food-Rules-Audiobook/059329386X",
    "addedAt": "2022-09-26",
    "audibleObservation": {
      "observedAt": "2022-11-07",
      "progressPercent": 0,
      "displayedProgress": "1h 20m left"
    }
  },
  {
    "id": "an-elegant-puzzle-systems-of-engineering-management",
    "title": "An Elegant Puzzle: Systems of Engineering Management",
    "authors": "Will Larson",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/an-elegant-puzzle-systems-of-engineering-management-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51GWYSdK0QL._SL320_.jpg",
    "source": "https://www.audible.com/pd/An-Elegant-Puzzle-Systems-of-Engineering-Management-Audiobook/B07SFKFDQW",
    "addedAt": "2022-09-19",
    "audibleObservation": {
      "observedAt": "2022-11-27",
      "progressPercent": 35,
      "displayedProgress": "4h 17m left"
    }
  },
  {
    "id": "it-s-about-damn-time",
    "title": "It's About Damn Time",
    "authors": "Arlan Hamilton, Rachel L. Nelson",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/it-s-about-damn-time-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41Eo88wTeyL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Its-About-Damn-Time-Audiobook/0593208242",
    "addedAt": "2020-05-05"
  },
  {
    "id": "the-age-of-surveillance-capitalism",
    "title": "The Age of Surveillance Capitalism",
    "authors": "Shoshana Zuboff",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/the-age-of-surveillance-capitalism-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41LEONDql7L._SL320_.jpg",
    "source": "https://www.audible.com/pd/The-Age-of-Surveillance-Capitalism-Audiobook/1478947276",
    "addedAt": "2020-04-15"
  },
  {
    "id": "caffeine",
    "title": "Caffeine",
    "authors": "Michael Pollan",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/caffeine-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41QNn+uS3mL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Caffeine-Audiobook/B083MVZ91Y",
    "addedAt": "2020-03-23",
    "audibleObservation": {
      "observedAt": "2022-09-25",
      "progressPercent": 0,
      "displayedProgress": "2h 2m left"
    }
  },
  {
    "id": "the-tales-of-beedle-the-bard",
    "title": "The Tales of Beedle the Bard",
    "authors": "J.K. Rowling",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/the-tales-of-beedle-the-bard-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51xmjwvJL7L._SL320_.jpg",
    "source": "https://www.audible.com/pd/The-Tales-of-Beedle-the-Bard-Audiobook/1781103798",
    "addedAt": "2020-03-23",
    "audibleObservation": {
      "observedAt": "2021-05-11",
      "progressPercent": 1,
      "displayedProgress": "1h 34m left"
    }
  },
  {
    "id": "the-science-of-sci-fi",
    "title": "The Science of Sci-Fi",
    "authors": "Erin Macdonald, The Great Courses",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/the-science-of-sci-fi-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51KzeM5AigL._SL320_.jpg",
    "source": "https://www.audible.com/pd/The-Science-of-Sci-Fi-Audiobook/B07ZP9BGVX",
    "addedAt": "2020-03-22"
  },
  {
    "id": "the-profiteers",
    "title": "The Profiteers",
    "authors": "Sally Denton",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/the-profiteers-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51M8fFrselL._SL320_.jpg",
    "source": "https://www.audible.com/pd/The-Profiteers-Audiobook/B01BVTHBMS",
    "addedAt": "2020-03-11",
    "audibleObservation": {
      "observedAt": "2023-03-26",
      "progressPercent": 36,
      "displayedProgress": "7h 26m left"
    }
  },
  {
    "id": "range",
    "title": "Range",
    "authors": "David Epstein",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/range-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41RprDwa7zL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Range-Audiobook/1984888439",
    "addedAt": "2020-03-11",
    "audibleObservation": {
      "observedAt": "2023-03-26",
      "progressPercent": 0,
      "displayedProgress": "10h 46m left"
    }
  },
  {
    "id": "good-strategy-bad-strategy",
    "title": "Good Strategy/Bad Strategy",
    "authors": "Richard Rumelt",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/good-strategy-bad-strategy-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/41VrnRGEEgL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Good-Strategy-Bad-Strategy-Audiobook/0593162927",
    "addedAt": "2020-01-29"
  },
  {
    "id": "the-phoenix-project",
    "title": "The Phoenix Project",
    "authors": "Gene Kim, Kevin Behr, George Spafford",
    "status": "finished",
    "format": "audible",
    "notes": "",
    "cover": "assets/the-phoenix-project-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51Fi5Fq4u5L._SL320_.jpg",
    "source": "https://www.audible.com/pd/The-Phoenix-Project-Audiobook/B00VAZZY32",
    "addedAt": "2019-12-19",
    "audibleObservation": {
      "observedAt": "2020-03-23",
      "progressPercent": 100,
      "displayedProgress": "Finished"
    }
  },
  {
    "id": "goodnight-moon",
    "title": "Goodnight Moon",
    "authors": "Margaret Wise Brown, Clement Hurd",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/goodnight-moon-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/61BnppyErjL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Goodnight-Moon-Audiobook/B002V8MJI0",
    "addedAt": "2018-10-02",
    "audibleObservation": {
      "observedAt": "2026-10-09",
      "progressPercent": 99,
      "displayedProgress": "<1 min left"
    }
  },
  {
    "id": "harry-potter-and-the-order-of-the-phoenix-full-cast-edition",
    "title": "Harry Potter and the Order of the Phoenix (Full-Cast Edition)",
    "authors": "J.K. Rowling",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/harry-potter-and-the-order-of-the-phoenix-full-cast-edition-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51qW73k+gWL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Harry-Potter-and-the-Order-of-the-Phoenix-Full-Cast-Edition-Audiobook/B0F14P2632",
    "audibleObservation": {
      "observedAt": "2026-05-18",
      "progressPercent": 4,
      "displayedProgress": "25h 35m left"
    }
  },
  {
    "id": "harry-potter-and-the-goblet-of-fire-full-cast-edition",
    "title": "Harry Potter and the Goblet of Fire (Full-Cast Edition)",
    "authors": "J.K. Rowling",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/harry-potter-and-the-goblet-of-fire-full-cast-edition-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/61PDURimu0L._SL320_.jpg",
    "source": "https://www.audible.com/pd/Harry-Potter-and-the-Goblet-of-Fire-Full-Cast-Edition-Audiobook/B0F14PB6WN",
    "audibleObservation": {
      "observedAt": "2026-05-18",
      "progressPercent": 3,
      "displayedProgress": "19h 36m left"
    }
  },
  {
    "id": "harry-potter-and-the-prisoner-of-azkaban-full-cast-edition",
    "title": "Harry Potter and the Prisoner of Azkaban (Full-Cast Edition)",
    "authors": "J.K. Rowling",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/harry-potter-and-the-prisoner-of-azkaban-full-cast-edition-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51KqTt1Fk1L._SL320_.jpg",
    "source": "https://www.audible.com/pd/Harry-Potter-and-the-Prisoner-of-Azkaban-Full-Cast-Edition-Audiobook/B0F14PK33J",
    "audibleObservation": {
      "observedAt": "2026-05-17",
      "progressPercent": 3,
      "displayedProgress": "11h 11m left"
    }
  },
  {
    "id": "harry-potter-and-the-chamber-of-secrets-full-cast-edition",
    "title": "Harry Potter and the Chamber of Secrets (Full-Cast Edition)",
    "authors": "J.K. Rowling",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/harry-potter-and-the-chamber-of-secrets-full-cast-edition-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/61p0qiVzZLL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Harry-Potter-and-the-Chamber-of-Secrets-Full-Cast-Edition-Audiobook/B0F154ZCSN",
    "audibleObservation": {
      "observedAt": "2026-05-15",
      "progressPercent": 3,
      "displayedProgress": "9h 19m left"
    }
  },
  {
    "id": "harry-potter-and-the-sorcerer-s-stone-full-cast-edition",
    "title": "Harry Potter and the Sorcerer’s Stone (Full-Cast Edition)",
    "authors": "J.K. Rowling",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/harry-potter-and-the-sorcerer-s-stone-full-cast-edition-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51ym2M+-kiL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Harry-Potter-and-the-Sorcerers-Stone-Full-Cast-Edition-Audiobook/B0F14RPXHR",
    "audibleObservation": {
      "observedAt": "2026-05-15",
      "progressPercent": 3,
      "displayedProgress": "8h 25m left"
    }
  },
  {
    "id": "it-s-not-luck",
    "title": "It's Not Luck",
    "authors": "Eliyahu Goldratt",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/it-s-not-luck-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51e37cmN9aL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Its-Not-Luck-Audiobook/B00IFHWQKM",
    "audibleObservation": {
      "observedAt": "2025-11-07",
      "progressPercent": 0,
      "displayedProgress": "8h 30m left"
    }
  },
  {
    "id": "dreamland",
    "title": "Dreamland",
    "authors": "Bob Lazar, George Knapp",
    "status": "unread",
    "format": "audible",
    "notes": "",
    "cover": "assets/dreamland-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51gtJBHyxnL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Dreamland-Audiobook/1630156078",
    "audibleObservation": {
      "observedAt": "2025-08-25",
      "progressPercent": 0,
      "displayedProgress": "7h 51m left"
    }
  },
  {
    "id": "invent-and-wander",
    "title": "Invent and Wander",
    "authors": "Jeff Bezos, Walter Isaacson",
    "status": "unfinished",
    "format": "audible",
    "notes": "",
    "cover": "assets/invent-and-wander-cover.jpg",
    "coverSource": "https://m.media-amazon.com/images/I/51prfFQwWlL._SL320_.jpg",
    "source": "https://www.audible.com/pd/Invent-and-Wander-Audiobook/1663710732",
    "audibleObservation": {
      "observedAt": "2025-08-02",
      "progressPercent": 1,
      "displayedProgress": "8h 49m left"
    }
  }
]);
  const reviewedStatuses = {"the-phoenix-project":"finished","good-strategy-bad-strategy":"unread","the-profiteers":"paused","range":"unread","the-science-of-sci-fi":"unread","caffeine":"finished","the-tales-of-beedle-the-bard":"finished","the-age-of-surveillance-capitalism":"paused","it-s-about-damn-time":"finished","an-elegant-puzzle-systems-of-engineering-management":"paused","food-rules":"finished","noise":"unread","how-the-post-office-created-america":"unfinished","alexander-hamilton":"finished","love-pamela":"finished","economics-in-one-lesson":"unread","cribsheet":"unread","greenlights":"finished","capitalism-in-america":"finished","deep-work":"finished","me":"finished","dollars-and-sense":"unread","the-revolt-of-the-public-and-the-crisis-of-authority-in-the-new-millennium":"paused","outlive":"unread","mastery":"unread","friends-lovers-and-the-big-terrible-thing":"finished","charlie-munger":"unread","thinking-in-systems":"paused","tiny-humans-big-emotions":"unread","million-dollar-weekend":"finished","dune-messiah":"finished","the-worlds-i-see":"finished","how-to-talk-so-little-kids-will-listen":"unread","what-the-heck-is-eos":"finished","digital-minimalism":"finished","radical-candor-fully-revised-updated-edition":"paused","tiny-experiments":"paused"};
  for (const book of seedBooks) if (reviewedStatuses[book.id]) { book.status = reviewedStatuses[book.id]; book.statusRevision = 1; }
  const removedBookIds = new Set(["invent-and-wander", "dreamland", "it-s-not-luck", "goodnight-moon", "harry-potter-and-the-order-of-the-phoenix-full-cast-edition", "harry-potter-and-the-goblet-of-fire-full-cast-edition", "harry-potter-and-the-prisoner-of-azkaban-full-cast-edition", "harry-potter-and-the-chamber-of-secrets-full-cast-edition", "harry-potter-and-the-sorcerer-s-stone-full-cast-edition"]);
  for (let i = seedBooks.length - 1; i >= 0; i--) if (removedBookIds.has(seedBooks[i].id)) seedBooks.splice(i, 1);
  seedBooks.push({"id": "high-growth-handbook", "title": "High Growth Handbook", "authors": "Elad Gil", "addedAt": "2019-12-24", "status": "unfinished", "format": "kindle", "notes": "", "cover": "assets/high-growth-handbook-cover.jpg", "coverSource": "https://m.media-amazon.com/images/I/416PW8nt+-L._SL320_.jpg"});
  const artwork = {
  "kissinger": {
    "cover": "assets/kissinger-cover.jpg",
    "coverSource": "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9780743286978_9780743286978_hr.jpg",
    "pages": 896,
    "source": "https://www.simonandschuster.com/books/Kissinger/Walter-Isaacson/9780743286978",
    "spineAtlas": "assets/library-spines-five.png",
    "spineIndex": 0,
    "spineCount": 5
  },
  "titan": {
    "cover": "assets/titan-cover.jpg",
    "coverSource": "https://images2.penguinrandomhouse.com/cover/9781400077304",
    "pages": 832,
    "source": "https://www.penguinrandomhouse.com/books/26804/titan-by-ron-chernow/",
    "spineAtlas": "assets/library-spines-five.png",
    "spineIndex": 1,
    "spineCount": 5
  },
  "the-nvidia-way": {
    "cover": "assets/the-nvidia-way-cover.jpg",
    "coverSource": "https://cdn2.wwnorton.com/wwnproducts/TRADE/0/1/9781324086710/9781324086710_198.jpg",
    "pages": 272,
    "source": "https://wwnorton.co.uk/books/9781324086710-the-nvidia-way",
    "spineAtlas": "assets/library-spines-five.png",
    "spineIndex": 2,
    "spineCount": 5
  },
  "breakneck": {
    "cover": "assets/breakneck-cover.jpg",
    "coverSource": "https://cdn2.wwnorton.com/wwnproducts/TRADE/6/3/9781324106036/9781324106036_300.jpg",
    "source": "https://wwnorton.co.uk/books/9781324106036-breakneck",
    "spineAtlas": "assets/library-spines-five.png",
    "spineIndex": 3,
    "spineCount": 5
  },
  "the-comfort-crisis": {
    "cover": "assets/the-comfort-crisis-cover.jpg",
    "coverSource": "https://images3.penguinrandomhouse.com/cover/9780593138762",
    "pages": 320,
    "source": "https://www.penguinrandomhouse.com/books/634446/the-comfort-crisis-by-michael-easter/",
    "spineAtlas": "assets/library-spines-five.png",
    "spineIndex": 4,
    "spineCount": 5
  },
  "engineering-management": {
    "cover": "assets/engineering-management-cover.jpg",
    "coverSource": "https://cdn.kobo.com/book-images/055f57a1-a648-4ce0-a18b-ed5e054b90bb/1200/1200/False/engineering-management-for-the-rest-of-us.jpg",
    "source": "https://www.engmanagement.dev/",
    "spineAtlas": "assets/library-spines-two.png",
    "spineIndex": 0,
    "spineCount": 2
  },
  "the-goal": {
    "cover": "assets/the-goal-cover.jpg",
    "coverSource": "https://is1-ssl.mzstatic.com/image/thumb/Publication6/v4/be/ef/8e/beef8e8d-4ef4-e5b5-112f-74ebdec85c7b/TheGOAL.jpg/1200x900wz.jpg",
    "pages": 408,
    "source": "https://books.apple.com/no/book/the-goal/id669145472",
    "spineAtlas": "assets/library-spines-two.png",
    "spineIndex": 1,
    "spineCount": 2
  },
  "vibe-coding": {
    "cover": "assets/vibe-coding-cover.jpg",
    "coverSource": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781966280026/vibe-coding-9781966280026_hr.jpg",
    "pages": 384,
    "spineAtlas": "assets/cover-based-spines.png",
    "spineIndex": 0,
    "spineCount": 2
  },
  "protocols": {
    "cover": "assets/protocols-cover.jpg",
    "coverSource": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781668032145/protocols-9781668032145_xlg.jpg",
    "pages": 688,
    "spineAtlas": "assets/cover-based-spines.png",
    "spineIndex": 1,
    "spineCount": 2
  }
};
  Object.assign(artwork, {"elon-musk": {"cover": "assets/elon-musk-cover.jpg", "coverSource": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982181284/elon-musk-9781982181284_hr.jpg", "source": "https://www.simonandschuster.com/books/Elon-Musk/Walter-Isaacson/9781982181284", "pages": 688, "spineAtlas": "assets/library-spines-four.png", "spineIndex": 0, "spineCount": 4}, "wool": {"cover": "assets/wool-cover.jpg", "coverSource": "https://cdn.penguin.co.uk/dam-assets/books/9781804940822/9781804940822-jacket-large.jpg", "source": "https://www.penguin.co.uk/books/416558/wool-by-howey-hugh/9781804940822", "pages": 576, "spineAtlas": "assets/library-spines-four.png", "spineIndex": 1, "spineCount": 4}, "shift": {"cover": "assets/shift-cover.jpg", "coverSource": "https://cdn.penguin.co.uk/dam-assets/books/9781804940839/9781804940839-jacket-large.jpg", "source": "https://www.penguin.co.uk/books/416773/shift-by-howey-hugh/9781804940839", "pages": 592, "spineAtlas": "assets/library-spines-four.png", "spineIndex": 2, "spineCount": 4}, "dust": {"cover": "assets/dust-cover.jpg", "coverSource": "https://cdn.penguin.co.uk/dam-assets/books/9781804940846/9781804940846-jacket-large.jpg", "source": "https://www.penguin.co.uk/books/418340/dust-by-howey-hugh/9781804940846", "pages": 416, "spineAtlas": "assets/library-spines-four.png", "spineIndex": 3, "spineCount": 4}});
  for (const book of seedBooks) Object.assign(book, artwork[book.id]);
  seedBooks.find(b => b.id === "engineering-management").authors = "Sarah Drasner";
  seedBooks.find(b => b.id === "the-goal").authors = "Eliyahu M. Goldratt & Jeff Cox";
  for (const book of seedBooks) {
    if (book.status === 'unknown') { book.status = 'unread'; book.statusRevision = 1; }
    if (['engineering-management', 'protocols'].includes(book.id)) { book.status = 'reading'; book.statusRevision = 1; }
  }
  // Verified Audible account observations; activity dates are not completion dates.
  const audibleHistory = {
  "the-comfort-crisis": {
    "addedAt": "2025-11-22",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/The-Comfort-Crisis-Audiobook/0593348702"
  },
  "engineering-management": {
    "addedAt": "2025-10-25",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/Engineering-Management-for-the-Rest-of-Us-Audiobook/B0D5YYSHK2",
    "audibleObservation": {
      "observedAt": "2026-06-12",
      "progressPercent": 61,
      "displayedProgress": "2h 12m left"
    }
  },
  "elon-musk": {
    "addedAt": "2025-08-22",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/Elon-Musk-Audiobook/B0BX4SCV1V",
    "audibleObservation": {
      "observedAt": "2025-12-12",
      "progressPercent": 0,
      "displayedProgress": "20h 39m left"
    }
  },
  "dust": {
    "addedAt": "2025-07-21",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/Dust-Audiobook/B0BKR4Q1PH",
    "audibleObservation": {
      "observedAt": "2025-08-01",
      "progressPercent": 99,
      "displayedProgress": "0h 6m left"
    }
  },
  "shift": {
    "addedAt": "2025-06-04",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/Shift-Audiobook/B0BKR7LNQ9",
    "audibleObservation": {
      "observedAt": "2025-06-18",
      "progressPercent": 99,
      "displayedProgress": "0h 8m left"
    }
  },
  "wool": {
    "addedAt": "2025-01-24",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/Wool-Audiobook/B0BKR3Y6SP",
    "audibleObservation": {
      "observedAt": "2025-02-19",
      "progressPercent": 99,
      "displayedProgress": "0h 9m left"
    }
  },
  "the-goal": {
    "addedAt": "2024-01-18",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/The-Goal-Audiobook/B00IFG88SM",
    "audibleObservation": {
      "observedAt": "2025-11-07",
      "progressPercent": 99,
      "displayedProgress": "0h 7m left"
    }
  },
  "kissinger": {
    "addedAt": "2026-07-27",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/Kissinger-Audiobook/B00D3NK2PY"
  },
  "vibe-coding": {
    "addedAt": "2026-06-25",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/Vibe-Coding-Audiobook/B0FPGKZZHL",
    "audibleObservation": {
      "observedAt": "2026-09-27",
      "progressPercent": 86,
      "displayedProgress": "1h 39m left"
    }
  },
  "titan": {
    "addedAt": "2026-06-25",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/Titan-Audiobook/B00ECGLKLG"
  },
  "the-nvidia-way": {
    "addedAt": "2026-03-21",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/The-Nvidia-Way-Audiobook/B0DNRNV83B"
  },
  "breakneck": {
    "addedAt": "2026-03-06",
    "format": "audible",
    "audibleSource": "https://www.audible.com/pd/Breakneck-Audiobook/B0FDH3V8T2"
  }
};
  for (const book of seedBooks) Object.assign(book, audibleHistory[book.id]);
  function filterBooks(books, query = '', status = 'all') {
    const search = query.trim().toLowerCase();
    return books.filter(b => `${b.title} ${b.authors}`.toLowerCase().includes(search) &&
      (status === 'all' || (status === 'reading' ? ['reading', 'finishing'].includes(b.status) : b.status === status)));
  }
  function updateBook(books, id, patch) {
    if (patch.status !== undefined && !statuses.includes(patch.status)) throw Error('Unknown reading status');
    if (patch.format !== undefined && !formats.includes(patch.format)) throw Error('Unknown book format');
    return books.map(b => b.id !== id ? b : { ...b, status: patch.status ?? b.status, format: patch.format ?? b.format, notes: typeof patch.notes === 'string' ? patch.notes : b.notes });
  }
  function parseLibrary(text) {
    const books = JSON.parse(text);
    const ids = new Set();
    if (!Array.isArray(books) || !books.length) throw Error('Expected a library of books');
    for (const b of books) {
      if (!b || typeof b.id !== 'string' || ids.has(b.id) || typeof b.title !== 'string' || typeof b.authors !== 'string' || !statuses.includes(b.status) || !formats.includes(b.format) || typeof b.notes !== 'string') throw Error('Invalid library record');
      ids.add(b.id);
    }
    return books;
  }
  function mergeLibrary(saved) {
    const existing = new Map(saved.map(b => [b.id, b]));
    const merged = seedBooks.map(seed => {
      const old = existing.get(seed.id);
      if (!old) return { ...seed };
      const book = { ...seed, ...old, ...artwork[seed.id], authors: seed.authors };
      if ((old.statusRevision || 0) < (seed.statusRevision || 0)) { book.status = seed.status; book.statusRevision = seed.statusRevision; }
      if (book.status === 'unknown') book.status = 'unread';
      if (seed.addedAt) book.addedAt = seed.addedAt;
      if (seed.finishedAt) book.finishedAt = seed.finishedAt;
      if (seed.audibleSource) book.audibleSource = seed.audibleSource;
      if (seed.cover) { book.cover = seed.cover; book.coverSource = seed.coverSource; if (seed.source) book.source = seed.source; }
      if (seed.audibleObservation) book.audibleObservation = { ...seed.audibleObservation };
      if (seed.listeningEvents) book.listeningEvents = seed.listeningEvents.map(e => ({ ...e }));
      if (old.format === 'unspecified' && seed.format !== 'unspecified') book.format = seed.format;
      return book;
    });
    return merged.concat(saved.filter(b => !removedBookIds.has(b.id) && !seedBooks.some(seed => seed.id === b.id)).map(b => b.status === 'unknown' ? {...b, status:'unread'} : b));
  }
  function shelfBooks(books) {
    return books.filter(b => typeof b.cover === 'string' && /^assets\/[a-z0-9-]+-cover\.jpg$/.test(b.cover) && typeof b.coverSource === 'string' && b.coverSource.startsWith('https://'));
  }
  function shelfDimensions(book) {
    const pages = Number.isFinite(book.pages) && book.pages > 0 ? book.pages : 320;
    let hash = 0;
    for (const character of book.id || book.title || '') hash = (hash * 33 + character.charCodeAt(0)) % 65521;
    const variation = hash % 37 - 18;
    const height = Math.max(224, Math.min(304, Math.round(220 + Math.sqrt(pages) * 2.15) + variation));
    return { width: Math.max(book.title?.length > 30 ? 46 : 38, Math.min(64, Math.round(25 + pages * 0.035))), height, estimated: true };
  }
  function isLocalLibrary(location) {
    return location.protocol === 'file:' || ['localhost', '127.0.0.1', '[::1]', '::1'].includes(location.hostname);
  }
  function yearScrollTarget({ scrollLeft, viewportLeft, viewportWidth, groupLeft, groupWidth, maxScroll }) {
    return Math.max(0, Math.min(maxScroll, scrollLeft + groupLeft - viewportLeft - (viewportWidth - groupWidth) / 2));
  }
  function formatBookDate(value) {
    const monthOnly = /^\d{4}-\d{2}$/.test(value);
    const date = new Date(value + (monthOnly ? '-01' : '') + 'T12:00:00Z');
    return date.toLocaleDateString('en-US', { month:'short', ...(monthOnly ? {} : {day:'numeric'}), year:'numeric', timeZone:'UTC' });
  }
  function formatBookHistory(book, includeCompletion = true) {
    const lines = [];
    if (book.addedAt) lines.push('Added ' + formatBookDate(book.addedAt));
    if (includeCompletion && book.finishedAt) lines.push('Finished ' + formatBookDate(book.finishedAt));
    return lines.join(' · ');
  }
  const api = { seedBooks, filterBooks, updateBook, parseLibrary, mergeLibrary, shelfBooks, shelfDimensions, isLocalLibrary, yearScrollTarget, formatBookDate, formatBookHistory };
  if (typeof module !== 'undefined') module.exports = api;
  else globalThis.BookshelfModel = api;
})();
