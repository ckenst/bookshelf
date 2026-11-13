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
  const kindleReviewStatuses = {
    'radical-candor-fully-revised-updated-edition': 'unread',
    'charlie-munger': 'unfinished',
    'me': 'finished',
    'high-growth-handbook': 'paused'
  };
  for (const book of seedBooks) if (kindleReviewStatuses[book.id]) {
    book.status = kindleReviewStatuses[book.id];
    book.statusRevision = 2;
  }
  const removedBookIds = new Set(["invent-and-wander", "dreamland", "it-s-not-luck", "goodnight-moon", "harry-potter-and-the-order-of-the-phoenix-full-cast-edition", "harry-potter-and-the-goblet-of-fire-full-cast-edition", "harry-potter-and-the-prisoner-of-azkaban-full-cast-edition", "harry-potter-and-the-chamber-of-secrets-full-cast-edition", "harry-potter-and-the-sorcerer-s-stone-full-cast-edition"]);
  for (let i = seedBooks.length - 1; i >= 0; i--) if (removedBookIds.has(seedBooks[i].id)) seedBooks.splice(i, 1);
  seedBooks.push({"id": "high-growth-handbook", "title": "High Growth Handbook", "authors": "Elad Gil", "addedAt": "2019-12-24", "status": "unfinished", "format": "kindle", "notes": "", "cover": "assets/high-growth-handbook-cover.jpg", "coverSource": "https://m.media-amazon.com/images/I/416PW8nt+-L._SL320_.jpg"});
  seedBooks.find(book => book.id === 'high-growth-handbook').status = 'paused';
  seedBooks.find(book => book.id === 'high-growth-handbook').statusRevision = 2;
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
  seedBooks.push(...[
  {
    "id": "the-pleasure-of-finding-things-out",
    "title": "The Pleasure of Finding Things Out: The Best Short Works of Richard P. Feynman",
    "authors": "Richard P. Feynman",
    "addedAt": "2026-11-11",
    "status": "unread",
    "statusRevision": 1,
    "format": "both",
    "notes": "",
    "pages": 288,
    "cover": "assets/the-pleasure-of-finding-things-out-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B005QBLHB4.01.L.jpg",
    "source": "https://www.hachettebookgroup.com/titles/richard-p-feynman/the-pleasure-of-finding-things-out/9780465023950/?lens=basic-books",
    "audibleSource": "https://www.audible.com/pd/The-Pleasure-of-Finding-Things-Out-Audiobook/B00BSU83HI"
  },
  {
    "id": "kindle-b0gwrwg64j",
    "title": "Signals & Levers: Systems Thinking Tools to Unblock Software Delivery",
    "authors": "Elisabeth Hendrickson, Joel Tosi",
    "addedAt": "2026-09-21",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0gwrwg64j-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0GWRWG64J.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0GWRWG64J"
  },
  {
    "id": "kindle-b0h3mlr5bn",
    "title": "Testing AI: Engineering Confidence in Non-Deterministic Systems",
    "authors": "Jason Arbon",
    "addedAt": "2026-07-16",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0h3mlr5bn-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0H3MLR5BN.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0H3MLR5BN"
  },
  {
    "id": "kindle-b010mh9v3w",
    "title": "Grit: The Power of Passion and Perseverance",
    "authors": "Angela Duckworth",
    "addedAt": "2026-06-25",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b010mh9v3w-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B010MH9V3W.01.L.jpg",
    "source": "https://www.amazon.com/dp/B010MH9V3W"
  },
  {
    "id": "kindle-b0bskw45kb",
    "title": "The Coming Wave: AI, Power, and Our Future",
    "authors": "Mustafa Suleyman",
    "addedAt": "2026-06-25",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0bskw45kb-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0BSKW45KB.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0BSKW45KB"
  },
  {
    "id": "kindle-b0djk2d88b",
    "title": "Apple in China: The Capture of the World's Greatest Company",
    "authors": "Patrick McGee",
    "addedAt": "2026-03-21",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0djk2d88b-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0DJK2D88B.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0DJK2D88B"
  },
  {
    "id": "kindle-b004j35lhq",
    "title": "The Secrets of Consulting: A Guide to Giving and Getting Advice Successfully (Consulting Secrets Book 1)",
    "authors": "Gerald Weinberg",
    "addedAt": "2026-01-26",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004j35lhq-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004J35LHQ.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004J35LHQ"
  },
  {
    "id": "kindle-b0c8fnfv38",
    "title": "Read Write Own: Building the Next Era of the Internet",
    "authors": "Chris Dixon",
    "addedAt": "2025-12-25",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0c8fnfv38-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0C8FNFV38.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0C8FNFV38"
  },
  {
    "id": "kindle-b07cl67rxj",
    "title": "Rule Makers, Rule Breakers: How Tight and Loose Cultures Wire Our World",
    "authors": "Michele Gelfand",
    "addedAt": "2025-12-25",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07cl67rxj-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07CL67RXJ.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07CL67RXJ"
  },
  {
    "id": "kindle-b000pc0s0k",
    "title": "Einstein: His Life and Universe",
    "authors": "Walter Isaacson",
    "addedAt": "2025-12-25",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b000pc0s0k-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B000PC0S0K.01.L.jpg",
    "source": "https://www.amazon.com/dp/B000PC0S0K"
  },
  {
    "id": "kindle-b0g22pcvbg",
    "title": "Frictionless: 7 Steps to Remove Barriers, Unlock Value, and Outpace Your Competition in the AI Era",
    "authors": "Nicole Forsgren, Abi Noda",
    "addedAt": "2025-11-22",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0g22pcvbg-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0G22PCVBG.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0G22PCVBG"
  },
  {
    "id": "kindle-b00555x8oa",
    "title": "Thinking, Fast and Slow",
    "authors": "Daniel Kahneman",
    "addedAt": "2025-11-22",
    "status": "paused",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00555x8oa-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00555X8OA.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00555X8OA"
  },
  {
    "id": "kindle-b0c1fnv4dq",
    "title": "Be Useful: Seven Tools for Life",
    "authors": "Arnold Schwarzenegger",
    "addedAt": "2025-11-16",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0c1fnv4dq-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0C1FNV4DQ.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0C1FNV4DQ"
  },
  {
    "id": "kindle-b0d886zqhy",
    "title": "Superagency: What Could Possibly Go Right with Our AI Future",
    "authors": "Reid Hoffman, Greg Beato",
    "addedAt": "2025-07-01",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0d886zqhy-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0D886ZQHY.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0D886ZQHY"
  },
  {
    "id": "kindle-b07b2hs77m",
    "title": "Who Is Michael Ovitz?",
    "authors": "Michael Ovitz",
    "addedAt": "2025-06-28",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07b2hs77m-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07B2HS77M.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07B2HS77M"
  },
  {
    "id": "kindle-b09cdb69wt",
    "title": "How the World Really Works: The Science Behind How We Got Here and Where We're Going",
    "authors": "Vaclav Smil",
    "addedAt": "2025-06-28",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b09cdb69wt-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B09CDB69WT.01.L.jpg",
    "source": "https://www.amazon.com/dp/B09CDB69WT"
  },
  {
    "id": "kindle-b0byds7zrj",
    "title": "Worthy: An Impactful Biography with a Powerful Message, Empower Yourself Today",
    "authors": "Jada Pinkett Smith",
    "addedAt": "2025-06-28",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0byds7zrj-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0BYDS7ZRJ.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0BYDS7ZRJ"
  },
  {
    "id": "kindle-b007fu8f28",
    "title": "The Bug: A Novel",
    "authors": "Ellen Ullman",
    "addedAt": "2025-06-04",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b007fu8f28-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B007FU8F28.01.L.jpg",
    "source": "https://www.amazon.com/dp/B007FU8F28"
  },
  {
    "id": "kindle-b01772ps00",
    "title": "The Box: How the Shipping Container Made the World Smaller and the World Economy Bigger - Second Edition with a new chapter by the author",
    "authors": "Marc Levinson",
    "addedAt": "2025-06-04",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b01772ps00-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B01772PS00.01.L.jpg",
    "source": "https://www.amazon.com/dp/B01772PS00"
  },
  {
    "id": "kindle-b0by39ykbt",
    "title": "Wiring the Winning Organization: Liberating Our Collective Greatness through Slowification, Simplification, and Amplification",
    "authors": "Gene Kim, Steven J. Spear",
    "addedAt": "2024-07-05",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0by39ykbt-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0BY39YKBT.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0BY39YKBT"
  },
  {
    "id": "kindle-b00b0ypj0g",
    "title": "HBR Guide to Better Business Writing (HBR Guide Series)",
    "authors": "Bryan A. Garner",
    "addedAt": "2024-03-19",
    "status": "paused",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00b0ypj0g-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00B0YPJ0G.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00B0YPJ0G"
  },
  {
    "id": "kindle-b0bqmzxc3t",
    "title": "Misbelief: What Makes Rational People Believe Irrational Things — A Study of Why People Believe Conspiracy Theories",
    "authors": "Dan Ariely",
    "addedAt": "2024-02-17",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0bqmzxc3t-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0BQMZXC3T.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0BQMZXC3T"
  },
  {
    "id": "kindle-b004woxyv2",
    "title": "Are Your Lights On?",
    "authors": "Gerald M Weinberg, Donald C Gause",
    "addedAt": "2024-02-06",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004woxyv2-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004WOXYV2.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004WOXYV2"
  },
  {
    "id": "kindle-b00pddkqv2",
    "title": "Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems",
    "authors": "David J. Agans",
    "addedAt": "2024-01-18",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00pddkqv2-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00PDDKQV2.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00PDDKQV2"
  },
  {
    "id": "kindle-b004ik8puk",
    "title": "Brando: Songs My Mother Taught Me",
    "authors": "Marlon Brando",
    "addedAt": "2023-12-08",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004ik8puk-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004IK8PUK.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004IK8PUK"
  },
  {
    "id": "kindle-b0c6fvbw9z",
    "title": "Automation Awesomeness: 260 actionable affirmations to improve your QA and automation testing skills",
    "authors": "Joe Colantonio",
    "addedAt": "2023-05-29",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0c6fvbw9z-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0C6FVBW9Z.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0C6FVBW9Z"
  },
  {
    "id": "kindle-b09ngvvcj9",
    "title": "The Complete Software Tester: Concepts, Skills, and Strategies for High-Quality Testing",
    "authors": "Kristin Jackvony",
    "addedAt": "2023-02-12",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b09ngvvcj9-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B09NGVVCJ9.01.L.jpg",
    "source": "https://www.amazon.com/dp/B09NGVVCJ9"
  },
  {
    "id": "kindle-b06wgnpm7v",
    "title": "Life 3.0: Being Human in the Age of Artificial Intelligence",
    "authors": "Max Tegmark",
    "addedAt": "2023-02-12",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b06wgnpm7v-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B06WGNPM7V.01.L.jpg",
    "source": "https://www.amazon.com/dp/B06WGNPM7V"
  },
  {
    "id": "kindle-b01byh07p0",
    "title": "Building Successful Communities of Practice: Discover How Connecting People Makes Better Organisations",
    "authors": "Emily Webber",
    "addedAt": "2023-02-12",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b01byh07p0-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B01BYH07P0.01.L.jpg",
    "source": "https://www.amazon.com/dp/B01BYH07P0"
  },
  {
    "id": "kindle-b07t4xx4k1",
    "title": "Amazing Decisions: The Illustrated Guide to Improving Business Deals and Family Meals",
    "authors": "Dan Ariely",
    "addedAt": "2023-02-06",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07t4xx4k1-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07T4XX4K1.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07T4XX4K1"
  },
  {
    "id": "kindle-b08twkl363",
    "title": "The Bomber Mafia: A Dream, a Temptation, and the Longest Night of the Second World War",
    "authors": "Malcolm Gladwell",
    "addedAt": "2023-02-06",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b08twkl363-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B08TWKL363.01.L.jpg",
    "source": "https://www.amazon.com/dp/B08TWKL363"
  },
  {
    "id": "kindle-b08g1xng7j",
    "title": "The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race",
    "authors": "Walter Isaacson",
    "addedAt": "2022-12-15",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b08g1xng7j-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B08G1XNG7J.01.L.jpg",
    "source": "https://www.amazon.com/dp/B08G1XNG7J"
  },
  {
    "id": "kindle-b00icn066a",
    "title": "Sapiens: A Brief History of Humankind – The #1 New York Times Bestseller Exploring How We Became Ruler of the Planet",
    "authors": "Yuval Noah Harari",
    "addedAt": "2022-12-15",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00icn066a-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00ICN066A.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00ICN066A"
  },
  {
    "id": "kindle-b01afxz2f4",
    "title": "Everybody Lies: Big Data, New Data, and What the Internet Can Tell Us About Who We Really Are — A Big Data Study",
    "authors": "Seth Stephens-Davidowitz",
    "addedAt": "2022-07-12",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b01afxz2f4-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B01AFXZ2F4.01.L.jpg",
    "source": "https://www.amazon.com/dp/B01AFXZ2F4"
  },
  {
    "id": "kindle-b07h1ft3pw",
    "title": "Ten Drugs: How Plants, Powders, and Pills Have Shaped the History of Medicine",
    "authors": "Thomas Hager",
    "addedAt": "2022-07-12",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07h1ft3pw-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07H1FT3PW.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07H1FT3PW"
  },
  {
    "id": "kindle-b00b7npry8",
    "title": "Dune",
    "authors": "Frank Herbert",
    "addedAt": "2022-04-14",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00b7npry8-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00B7NPRY8.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00B7NPRY8"
  },
  {
    "id": "kindle-b08bcct6mw",
    "title": "Invent and Wander: The Collected Writings of Jeff Bezos, With an Introduction by Walter Isaacson",
    "authors": "Jeff Bezos",
    "addedAt": "2022-04-02",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b08bcct6mw-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B08BCCT6MW.01.L.jpg",
    "source": "https://www.amazon.com/dp/B08BCCT6MW"
  },
  {
    "id": "kindle-b097xnt4rt",
    "title": "The Power of Regret: How Looking Backward Moves Us Forward",
    "authors": "Daniel H. Pink",
    "addedAt": "2022-04-02",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b097xnt4rt-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B097XNT4RT.01.L.jpg",
    "source": "https://www.amazon.com/dp/B097XNT4RT"
  },
  {
    "id": "kindle-b004j4vv3i",
    "title": "Becoming a Technical Leader",
    "authors": "Gerald Weinberg",
    "addedAt": "2022-02-07",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004j4vv3i-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004J4VV3I.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004J4VV3I"
  },
  {
    "id": "kindle-b000fbjcje",
    "title": "Snow Crash: A Novel",
    "authors": "Neal Stephenson",
    "addedAt": "2022-01-21",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b000fbjcje-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B000FBJCJE.01.L.jpg",
    "source": "https://www.amazon.com/dp/B000FBJCJE"
  },
  {
    "id": "kindle-b0030v0pew",
    "title": "The Checklist Manifesto: How to Get Things Right",
    "authors": "Atul Gawande",
    "addedAt": "2022-01-11",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0030v0pew-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0030V0PEW.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0030V0PEW"
  },
  {
    "id": "kindle-b076gphlfk",
    "title": "Sh*tshow!: The Country's Collapsing . . . and the Ratings Are Great",
    "authors": "Charlie LeDuff",
    "addedAt": "2022-01-10",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b076gphlfk-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B076GPHLFK.01.L.jpg",
    "source": "https://www.amazon.com/dp/B076GPHLFK"
  },
  {
    "id": "kindle-b005flogmm",
    "title": "Abundance: The Future Is Better Than You Think (Exponential Technology Series)",
    "authors": "Peter H. Diamandis, Steven Kotler",
    "addedAt": "2022-01-10",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b005flogmm-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B005FLOGMM.01.L.jpg",
    "source": "https://www.amazon.com/dp/B005FLOGMM"
  },
  {
    "id": "kindle-b084nmlzpx",
    "title": "Cunning Machines: Your Pocket Guide to the World of Artificial Intelligence (Chapman & Hall/CRC Artificial Intelligence and Robotics Series)",
    "authors": "Jędrzej Osiński",
    "addedAt": "2021-11-18",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b084nmlzpx-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B084NMLZPX.01.L.jpg",
    "source": "https://www.amazon.com/dp/B084NMLZPX"
  },
  {
    "id": "kindle-b096lpzxch",
    "title": "Will",
    "authors": "Will Smith",
    "addedAt": "2021-11-08",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b096lpzxch-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B096LPZXCH.01.L.jpg",
    "source": "https://www.amazon.com/dp/B096LPZXCH"
  },
  {
    "id": "kindle-b09j9wq86t",
    "title": "Learning Test-Driven Development: A Polyglot Guide to Writing Uncluttered Code",
    "authors": "Saleem Siddiqui",
    "addedAt": "2021-11-04",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b09j9wq86t-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B09J9WQ86T.01.L.jpg",
    "source": "https://www.amazon.com/dp/B09J9WQ86T"
  },
  {
    "id": "kindle-b00a9juj12",
    "title": "It's Kind of a Cute Story",
    "authors": "Rolly Crump, Jeff Heimbuch",
    "addedAt": "2021-11-03",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00a9juj12-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00A9JUJ12.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00A9JUJ12"
  },
  {
    "id": "kindle-b08bkmv54m",
    "title": "Uncomfortable Conversations with a Black Man",
    "authors": "Emmanuel Acho",
    "addedAt": "2021-09-22",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b08bkmv54m-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B08BKMV54M.01.L.jpg",
    "source": "https://www.amazon.com/dp/B08BKMV54M"
  },
  {
    "id": "kindle-b019b6vclo",
    "title": "Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy",
    "authors": "Cathy O'Neil",
    "addedAt": "2021-09-16",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b019b6vclo-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B019B6VCLO.01.L.jpg",
    "source": "https://www.amazon.com/dp/B019B6VCLO"
  },
  {
    "id": "kindle-b01buibbzi",
    "title": "The Coaching Habit: Say Less, Ask More & Change the Way You Lead Forever",
    "authors": "Michael Bungay Stanier",
    "addedAt": "2021-09-03",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b01buibbzi-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B01BUIBBZI.01.L.jpg",
    "source": "https://www.amazon.com/dp/B01BUIBBZI"
  },
  {
    "id": "kindle-b004jhysgc",
    "title": "Hiring Smart!: How to Predict Winners and Losers in the Incredibly Expensive People-Reading Game",
    "authors": "Pierre Mornell",
    "addedAt": "2021-08-29",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004jhysgc-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004JHYSGC.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004JHYSGC"
  },
  {
    "id": "kindle-b07gnwszbg",
    "title": "The Montessori Toddler: A Parent's Guide to Raising a Curious and Responsible Human Being (The Parents' Guide to Montessori Book 1)",
    "authors": "Simone Davies",
    "addedAt": "2021-08-29",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07gnwszbg-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07GNWSZBG.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07GNWSZBG"
  },
  {
    "id": "kindle-b093ncn3fz",
    "title": "Formulation: Document examples with Given/When/Then (BDD Books Book 2)",
    "authors": "Seb Rose, Gaspar Nagy",
    "addedAt": "2021-05-01",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b093ncn3fz-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B093NCN3FZ.01.L.jpg",
    "source": "https://www.amazon.com/dp/B093NCN3FZ"
  },
  {
    "id": "kindle-b07c5r9plv",
    "title": "Discovery: Explore behaviour using examples (BDD Books Book 1)",
    "authors": "Gaspar Nagy, Seb Rose",
    "addedAt": "2021-05-01",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07c5r9plv-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07C5R9PLV.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07C5R9PLV"
  },
  {
    "id": "kindle-b08sl83qt7",
    "title": "Servant Leadership: Learn the Most Effective Soft Skills to Become a Servant Leader and Guide Your Team to Success",
    "authors": "Liam Taylor",
    "addedAt": "2021-04-23",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b08sl83qt7-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B08SL83QT7.01.L.jpg",
    "source": "https://www.amazon.com/dp/B08SL83QT7"
  },
  {
    "id": "kindle-b003zk58ta",
    "title": "Where Good Ideas Come From",
    "authors": "Steven Johnson",
    "addedAt": "2021-04-02",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b003zk58ta-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B003ZK58TA.01.L.jpg",
    "source": "https://www.amazon.com/dp/B003ZK58TA"
  },
  {
    "id": "kindle-b07yry461y",
    "title": "How to Avoid a Climate Disaster: The Solutions We Have and the Breakthroughs We Need",
    "authors": "Bill Gates",
    "addedAt": "2021-03-15",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07yry461y-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07YRY461Y.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07YRY461Y"
  },
  {
    "id": "kindle-b07r8qsxyb",
    "title": "Humble Pi: When Math Goes Wrong in the Real World",
    "authors": "Matt Parker",
    "addedAt": "2021-03-10",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07r8qsxyb-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07R8QSXYB.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07R8QSXYB"
  },
  {
    "id": "kindle-b079wv79tk",
    "title": "It Doesn't Have to Be Crazy at Work: A Practical Guide to Sustainable Productivity Through Calm Company Culture and Effective Leadership",
    "authors": "Jason Fried, David Heinemeier Hansson",
    "addedAt": "2021-01-18",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b079wv79tk-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B079WV79TK.01.L.jpg",
    "source": "https://www.amazon.com/dp/B079WV79TK"
  },
  {
    "id": "kindle-b07zts7k1c",
    "title": "The Drive-Thru is Not Always Faster",
    "authors": "Mike Lyles",
    "addedAt": "2021-01-12",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07zts7k1c-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07ZTS7K1C.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07ZTS7K1C"
  },
  {
    "id": "kindle-b08dp84v2x",
    "title": "Weight Lifting Is a Waste of Time : So Is Cardio, and There’s a Better Way to Have the Body You Want",
    "authors": "Dr. John Jaquish, Henry Alkire",
    "addedAt": "2021-01-08",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b08dp84v2x-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B08DP84V2X.01.L.jpg",
    "source": "https://www.amazon.com/dp/B08DP84V2X"
  },
  {
    "id": "kindle-b084byk62k",
    "title": "Is This Anything?",
    "authors": "Jerry Seinfeld",
    "addedAt": "2020-12-30",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b084byk62k-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B084BYK62K.01.L.jpg",
    "source": "https://www.amazon.com/dp/B084BYK62K"
  },
  {
    "id": "kindle-b08n2zdqpy",
    "title": "Skyrocket Your Career: The No Bullsh*t Approach to Find Your Dream Job, Be Successful in It, and Transform into a Rockstar",
    "authors": "Raj Subrameyer",
    "addedAt": "2020-12-26",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b08n2zdqpy-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B08N2ZDQPY.01.L.jpg",
    "source": "https://www.amazon.com/dp/B08N2ZDQPY"
  },
  {
    "id": "kindle-b08191dv5t",
    "title": "Calling Bullshit: The Art of Skepticism in a Data-Driven World",
    "authors": "Carl T. Bergstrom, Jevin D. West",
    "addedAt": "2020-12-17",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b08191dv5t-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B08191DV5T.01.L.jpg",
    "source": "https://www.amazon.com/dp/B08191DV5T"
  },
  {
    "id": "kindle-b08q76f2sz",
    "title": "The Underdog Paradox: Secrets to Battling Adversity and Stories of Real Life Superheroes",
    "authors": "Jamie Russo",
    "addedAt": "2020-12-13",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b08q76f2sz-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B08Q76F2SZ.01.L.jpg",
    "source": "https://www.amazon.com/dp/B08Q76F2SZ"
  },
  {
    "id": "kindle-b0072nzzs0",
    "title": "Garbology: Our Dirty Love Affair with Trash",
    "authors": "Edward Humes",
    "addedAt": "2020-11-17",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0072nzzs0-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0072NZZS0.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0072NZZS0"
  },
  {
    "id": "kindle-b07b8glnk2",
    "title": "Out There: A Scientific Guide to Alien Life, Antimatter, and Human Space Travel (For the Cosmically Curious)",
    "authors": "Michael Wall",
    "addedAt": "2020-10-29",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07b8glnk2-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07B8GLNK2.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07B8GLNK2"
  },
  {
    "id": "kindle-b076yzc99l",
    "title": "The Great Revolt: Inside the Populist Coalition Reshaping American Politics",
    "authors": "Salena Zito, Brad Todd",
    "addedAt": "2020-10-29",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b076yzc99l-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B076YZC99L.01.L.jpg",
    "source": "https://www.amazon.com/dp/B076YZC99L"
  },
  {
    "id": "kindle-b00i829qbg",
    "title": "Uncontainable: How Passion, Commitment, and Conscious Capitalism Built a Business Where Everyone Thrives",
    "authors": "Kip Tindell",
    "addedAt": "2020-10-29",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00i829qbg-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00I829QBG.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00I829QBG"
  },
  {
    "id": "kindle-b079wm7kls",
    "title": "21 Lessons for the 21st Century",
    "authors": "Yuval Noah Harari",
    "addedAt": "2020-10-29",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b079wm7kls-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B079WM7KLS.01.L.jpg",
    "source": "https://www.amazon.com/dp/B079WM7KLS"
  },
  {
    "id": "kindle-b07ffcmscx",
    "title": "The Fifth Risk: Undoing Democracy",
    "authors": "Michael Lewis",
    "addedAt": "2020-10-15",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07ffcmscx-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07FFCMSCX.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07FFCMSCX"
  },
  {
    "id": "kindle-b007bgq9a6",
    "title": "We Are Anonymous: Inside the Hacker World of LulzSec, Anonymous, and the Global Cyber Insurgency",
    "authors": "Parmy Olson",
    "addedAt": "2020-09-29",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b007bgq9a6-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B007BGQ9A6.01.L.jpg",
    "source": "https://www.amazon.com/dp/B007BGQ9A6"
  },
  {
    "id": "kindle-b0124njkre",
    "title": "Door to Door: The Magnificent, Maddening, Mysterious World of Transportation",
    "authors": "Edward Humes",
    "addedAt": "2020-09-24",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0124njkre-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0124NJKRE.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0124NJKRE"
  },
  {
    "id": "kindle-b084q9dm4m",
    "title": "Buddha in Testing : Finding Peace in Chaos",
    "authors": "Pradeep Soundararajan",
    "addedAt": "2020-04-28",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b084q9dm4m-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B084Q9DM4M.01.L.jpg",
    "source": "https://www.amazon.com/dp/B084Q9DM4M"
  },
  {
    "id": "kindle-b00mts3luc",
    "title": "The Simplicity Cycle: A Field Guide to Making Things Better Without Making Them Worse",
    "authors": "Dan Ward",
    "addedAt": "2020-04-15",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00mts3luc-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00MTS3LUC.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00MTS3LUC"
  },
  {
    "id": "kindle-b00ckx5cp8",
    "title": "Brand Thinking and Other Noble Pursuits",
    "authors": "Debbie Millman",
    "addedAt": "2020-03-30",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00ckx5cp8-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00CKX5CP8.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00CKX5CP8"
  },
  {
    "id": "kindle-b0089loew2",
    "title": "The Astor Orphan: A Memoir – A Gritty True Story of Bohemian Neglect and a Brave Escape from the Astor Family's Rokeby Mansion",
    "authors": "Alexandra Aldrich",
    "addedAt": "2020-03-30",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0089loew2-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0089LOEW2.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0089LOEW2"
  },
  {
    "id": "kindle-b003wjq7da",
    "title": "How to Travel with a Salmon: And Other Essays (A Harvest Book)",
    "authors": "Umberto Eco",
    "addedAt": "2019-12-24",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b003wjq7da-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B003WJQ7DA.01.L.jpg",
    "source": "https://www.amazon.com/dp/B003WJQ7DA"
  },
  {
    "id": "kindle-b076zhg3h3",
    "title": "Trillion Dollar Coach: The Leadership Playbook of Silicon Valley's Bill Campbell",
    "authors": "Eric Schmidt, Jonathan Rosenberg, Alan Eagle",
    "addedAt": "2019-12-24",
    "status": "unfinished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b076zhg3h3-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B076ZHG3H3.01.L.jpg",
    "source": "https://www.amazon.com/dp/B076ZHG3H3"
  },
  {
    "id": "kindle-b003f3pmyi",
    "title": "The Happiness Advantage: How a Positive Brain Fuels Success in Work and Life",
    "authors": "Shawn Achor",
    "addedAt": "2019-08-22",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b003f3pmyi-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B003F3PMYI.01.L.jpg",
    "source": "https://www.amazon.com/dp/B003F3PMYI"
  },
  {
    "id": "kindle-b007hby1go",
    "title": "Bitter Brew: The Rise and Fall of Anheuser-Busch and America's Kings of Beer",
    "authors": "William Knoedelseder",
    "addedAt": "2019-07-15",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b007hby1go-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B007HBY1GO.01.L.jpg",
    "source": "https://www.amazon.com/dp/B007HBY1GO"
  },
  {
    "id": "kindle-b06wp982hx",
    "title": "The Four: The Hidden DNA of Amazon, Apple, Facebook, and Google",
    "authors": "Scott Galloway",
    "addedAt": "2019-06-26",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b06wp982hx-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B06WP982HX.01.L.jpg",
    "source": "https://www.amazon.com/dp/B06WP982HX"
  },
  {
    "id": "kindle-b00z8vtmyg",
    "title": "Seven Brief Lessons on Physics",
    "authors": "Carlo Rovelli",
    "addedAt": "2019-05-20",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00z8vtmyg-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00Z8VTMYG.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00Z8VTMYG"
  },
  {
    "id": "kindle-b01drxcpj0",
    "title": "The Case Against Sugar",
    "authors": "Gary Taubes",
    "addedAt": "2019-05-12",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b01drxcpj0-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B01DRXCPJ0.01.L.jpg",
    "source": "https://www.amazon.com/dp/B01DRXCPJ0"
  },
  {
    "id": "kindle-b00ihzs39a",
    "title": "Yes Please: The #1 New York Times Bestselling Celebrity Memoir of Comedy, Life Lessons, and Hard-Won Wisdom",
    "authors": "Amy Poehler",
    "addedAt": "2019-05-02",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00ihzs39a-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00IHZS39A.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00IHZS39A"
  },
  {
    "id": "kindle-b004fn1s18",
    "title": "The Sleepeasy Solution: The Exhausted Parent's Guide to Getting Your Child to Sleep from Birth to Age 5",
    "authors": "Jennifer Waldburger, Jill Spivak",
    "addedAt": "2019-05-01",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004fn1s18-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004FN1S18.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004FN1S18"
  },
  {
    "id": "kindle-b06x1ct33r",
    "title": "Guns, Germs, and Steel: The Fates of Human Societies",
    "authors": "Jared Diamond Ph.D.",
    "addedAt": "2019-04-06",
    "status": "unfinished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b06x1ct33r-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B06X1CT33R.01.L.jpg",
    "source": "https://www.amazon.com/dp/B06X1CT33R"
  },
  {
    "id": "kindle-b015vachok",
    "title": "High Output Management",
    "authors": "Andrew S. Grove",
    "addedAt": "2019-03-21",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b015vachok-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B015VACHOK.01.L.jpg",
    "source": "https://www.amazon.com/dp/B015VACHOK"
  },
  {
    "id": "kindle-b004c43f9s",
    "title": "The Bed of Procrustes: Philosophical and Practical Aphorisms (Incerto Book 4)",
    "authors": "Nassim Nicholas Taleb",
    "addedAt": "2019-02-01",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004c43f9s-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004C43F9S.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004C43F9S"
  },
  {
    "id": "kindle-b011h56mks",
    "title": "Peak: Unleashing Your Inner Champion Through Revolutionary Methods for Skill Acquisition and Performance Enhancement in Work, Sports, and Life",
    "authors": "Anders Ericsson, Robert Pool",
    "addedAt": "2019-01-22",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b011h56mks-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B011H56MKS.01.L.jpg",
    "source": "https://www.amazon.com/dp/B011H56MKS"
  },
  {
    "id": "kindle-b0725f8mmc",
    "title": "Like Brothers",
    "authors": "Mark Duplass, Jay Duplass",
    "addedAt": "2019-01-03",
    "status": "unfinished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0725f8mmc-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0725F8MMC.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0725F8MMC"
  },
  {
    "id": "kindle-b006id0ch4",
    "title": "How Will You Measure Your Life?: Using Innovation Theory to Create a Life Strategy for Career, Relationships, and Integrity",
    "authors": "Clayton M. Christensen, James Allworth, Karen Dillon",
    "addedAt": "2018-12-26",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b006id0ch4-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B006ID0CH4.01.L.jpg",
    "source": "https://www.amazon.com/dp/B006ID0CH4"
  },
  {
    "id": "kindle-b001fa0w5w",
    "title": "Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets (Incerto Book 1)",
    "authors": "Nassim Nicholas Taleb",
    "addedAt": "2018-12-07",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b001fa0w5w-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B001FA0W5W.01.L.jpg",
    "source": "https://www.amazon.com/dp/B001FA0W5W"
  },
  {
    "id": "kindle-b00mjd7an6",
    "title": "How to Disappear: Erase Your Digital Footprint, Leave False Trails, and Vanish without a Trace",
    "authors": "Frank Ahearn, Eileen Horan",
    "addedAt": "2018-12-05",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00mjd7an6-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00MJD7AN6.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00MJD7AN6"
  },
  {
    "id": "kindle-b00irczhxi",
    "title": "The Peter Principle: Why Things Always Go Wrong",
    "authors": "Laurence J. Peter, Raymond Hull",
    "addedAt": "2018-11-26",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00irczhxi-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00IRCZHXI.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00IRCZHXI"
  },
  {
    "id": "kindle-b008ekop1i",
    "title": "Detroit: An American Autopsy",
    "authors": "Charlie LeDuff",
    "addedAt": "2018-11-02",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b008ekop1i-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B008EKOP1I.01.L.jpg",
    "source": "https://www.amazon.com/dp/B008EKOP1I"
  },
  {
    "id": "kindle-b01n34idu6",
    "title": "WTF?: What's the Future and Why It's Up to Us",
    "authors": "Tim O'Reilly",
    "addedAt": "2018-10-09",
    "status": "unfinished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b01n34idu6-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B01N34IDU6.01.L.jpg",
    "source": "https://www.amazon.com/dp/B01N34IDU6"
  },
  {
    "id": "kindle-b01m9asfq3",
    "title": "The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations",
    "authors": "Gene Kim, Jez Humble, Patrick Debois, John Willis",
    "addedAt": "2018-09-20",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b01m9asfq3-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B01M9ASFQ3.01.L.jpg",
    "source": "https://www.amazon.com/dp/B01M9ASFQ3"
  },
  {
    "id": "kindle-b00kac65pw",
    "title": "The Opposite of Spoiled: Raising Kids Who Are Grounded, Generous, and Smart About Money – A NYT Bestselling Guide for Financial Literacy and Family Education",
    "authors": "Ron Lieber",
    "addedAt": "2018-08-19",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00kac65pw-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00KAC65PW.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00KAC65PW"
  },
  {
    "id": "kindle-b06zzlyvcg",
    "title": "The Last Black Unicorn (A Bestselling Comedian Memoir)",
    "authors": "Tiffany Haddish",
    "addedAt": "2018-07-22",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b06zzlyvcg-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B06ZZLYVCG.01.L.jpg",
    "source": "https://www.amazon.com/dp/B06ZZLYVCG"
  },
  {
    "id": "kindle-b07b9f83wm",
    "title": "Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations",
    "authors": "Nicole Forsgren PhD, Jez Humble, Gene Kim",
    "addedAt": "2018-06-24",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07b9f83wm-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07B9F83WM.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07B9F83WM"
  },
  {
    "id": "kindle-b00xc89wmo",
    "title": "Hands-On Mobile App Testing: A Guide for Mobile Testers and Anyone Involved in the Mobile App Business",
    "authors": "Daniel Knott",
    "addedAt": "2018-02-23",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00xc89wmo-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00XC89WMO.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00XC89WMO"
  },
  {
    "id": "kindle-b00l3kq1li",
    "title": "Data and Goliath: The Hidden Battles to Collect Your Data and Control Your World",
    "authors": "Bruce Schneier",
    "addedAt": "2018-01-01",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00l3kq1li-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00L3KQ1LI.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00L3KQ1LI"
  },
  {
    "id": "kindle-b07335jnw1",
    "title": "Machine Learning For Absolute Beginners: A Plain English Introduction (Second Edition) (Learn AI & Python for Beginners)",
    "authors": "O Theobald",
    "addedAt": "2018-01-01",
    "status": "unfinished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b07335jnw1-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B07335JNW1.01.L.jpg",
    "source": "https://www.amazon.com/dp/B07335JNW1"
  },
  {
    "id": "kindle-b01gi6s7ek",
    "title": "The Undoing Project: A Friendship That Changed Our Minds",
    "authors": "Michael Lewis",
    "addedAt": "2018-01-01",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b01gi6s7ek-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B01GI6S7EK.01.L.jpg",
    "source": "https://www.amazon.com/dp/B01GI6S7EK"
  },
  {
    "id": "kindle-b000fc119w",
    "title": "Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers (Collins Business Essentials)",
    "authors": "Geoffrey A. Moore",
    "addedAt": "2018-01-01",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b000fc119w-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B000FC119W.01.L.jpg",
    "source": "https://www.amazon.com/dp/B000FC119W"
  },
  {
    "id": "kindle-b01myg4mna",
    "title": "The Startup Way: How Modern Companies Use Entrepreneurial Management to Transform Culture and Drive Long-Term Growth",
    "authors": "Eric Ries",
    "addedAt": "2017-10-16",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b01myg4mna-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B01MYG4MNA.01.L.jpg",
    "source": "https://www.amazon.com/dp/B01MYG4MNA"
  },
  {
    "id": "kindle-b007ush7j2",
    "title": "The Structure of Scientific Revolutions: 50th Anniversary Edition",
    "authors": "Thomas S. Kuhn",
    "addedAt": "2017-05-27",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b007ush7j2-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B007USH7J2.01.L.jpg",
    "source": "https://www.amazon.com/dp/B007USH7J2"
  },
  {
    "id": "kindle-b000fc11a6",
    "title": "Cryptonomicon: WWII codebreakers, Nazi Enigma secrets, and a modern data-haven scheme collide across generations in this epic techno-thriller",
    "authors": "Neal Stephenson",
    "addedAt": "2016-11-19",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b000fc11a6-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B000FC11A6.01.L.jpg",
    "source": "https://www.amazon.com/dp/B000FC11A6"
  },
  {
    "id": "kindle-b00qfjhp94",
    "title": "Things That Make Us Smart: Defending Human Attributes in the Age of the Machine",
    "authors": "Don Norman",
    "addedAt": "2016-11-19",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00qfjhp94-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00QFJHP94.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00QFJHP94"
  },
  {
    "id": "kindle-b0079kt81g",
    "title": "The Hobbit: Tolkien's Classic Epic Fantasy Adventure (Lord of the Rings)",
    "authors": "J.R.R. Tolkien",
    "addedAt": "2014-12-17",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0079kt81g-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0079KT81G.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0079KT81G"
  },
  {
    "id": "kindle-b00jvar7em",
    "title": "App Quality: Secrets for Agile App Teams",
    "authors": "Jason Arbon",
    "addedAt": "2014-06-04",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00jvar7em-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00JVAR7EM.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00JVAR7EM"
  },
  {
    "id": "kindle-b0083xvkhi",
    "title": "Diving the Palos Verdes Peninsula",
    "authors": "Phil Garner",
    "addedAt": "2013-12-26",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0083xvkhi-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0083XVKHI.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0083XVKHI"
  },
  {
    "id": "kindle-b00dvjxi4m",
    "title": "The Year Without Pants: WordPress.com and the Future of Work",
    "authors": "Scott Berkun",
    "addedAt": "2013-12-26",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00dvjxi4m-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00DVJXI4M.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00DVJXI4M"
  },
  {
    "id": "kindle-b003g4w49c",
    "title": "Ender's Game (Ender Quintet Book 1)",
    "authors": "Orson Scott Card",
    "addedAt": "2013-05-25",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b003g4w49c-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B003G4W49C.01.L.jpg",
    "source": "https://www.amazon.com/dp/B003G4W49C"
  },
  {
    "id": "kindle-b004pydape",
    "title": "How to Read a Book",
    "authors": "Charles Van Doren, Mortimer J. Adler",
    "addedAt": "2013-05-17",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004pydape-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004PYDAPE.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004PYDAPE"
  },
  {
    "id": "kindle-b00bhej4iw",
    "title": "The Irrational Bundle: Predictably Irrational, The Upside of Irrationality, and The Honest Truth About Dishonesty — An Econ Trilogy",
    "authors": "Dan Ariely",
    "addedAt": "2013-03-25",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b00bhej4iw-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B00BHEJ4IW.01.L.jpg",
    "source": "https://www.amazon.com/dp/B00BHEJ4IW"
  },
  {
    "id": "kindle-b0026772n8",
    "title": "Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values",
    "authors": "Robert M. Pirsig",
    "addedAt": "2012-11-27",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0026772n8-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0026772N8.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0026772N8"
  },
  {
    "id": "kindle-b003urr2bu",
    "title": "Tacit and Explicit Knowledge",
    "authors": "Harry Collins",
    "addedAt": "2012-01-04",
    "status": "unread",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b003urr2bu-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B003URR2BU.01.L.jpg",
    "source": "https://www.amazon.com/dp/B003URR2BU"
  },
  {
    "id": "kindle-b006bc5ouc",
    "title": "Lessons Learned in Software Testing: A Context-Driven Approach",
    "authors": "Cem Kaner, James Bach, Bret Pettichord",
    "addedAt": "2012-01-01",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b006bc5ouc-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B006BC5OUC.01.L.jpg",
    "source": "https://www.amazon.com/dp/B006BC5OUC"
  },
  {
    "id": "kindle-b004j4xg0o",
    "title": "Poke the Box",
    "authors": "Seth Godin",
    "addedAt": "2011-12-30",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004j4xg0o-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004J4XG0O.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004J4XG0O"
  },
  {
    "id": "kindle-b004vs9aus",
    "title": "An Introduction to General Systems Thinking",
    "authors": "Gerald Weinberg",
    "addedAt": "2011-12-18",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004vs9aus-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004VS9AUS.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004VS9AUS"
  },
  {
    "id": "kindle-b0062f5qo2",
    "title": "Mindfire: Big Ideas for Curious Minds",
    "authors": "Scott Berkun",
    "addedAt": "2011-11-04",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b0062f5qo2-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B0062F5QO2.01.L.jpg",
    "source": "https://www.amazon.com/dp/B0062F5QO2"
  },
  {
    "id": "kindle-b004zulmr6",
    "title": "Startups Open Sourced",
    "authors": "Jared Tame",
    "addedAt": "2011-06-01",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004zulmr6-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004ZULMR6.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004ZULMR6"
  },
  {
    "id": "kindle-b004gnfonk",
    "title": "The Comeback: How Innovation Will Restore the American Dream",
    "authors": "Gary Shapiro, Mark Cuban",
    "addedAt": "2011-01-20",
    "status": "finished",
    "statusRevision": 1,
    "format": "kindle",
    "notes": "",
    "cover": "assets/kindle-b004gnfonk-cover.jpg",
    "coverSource": "https://images-na.ssl-images-amazon.com/images/P/B004GNFONK.01.L.jpg",
    "source": "https://www.amazon.com/dp/B004GNFONK"
  }
]);
  function filterBooks(books, query = '', status = 'all') {
    const search = query.trim().toLowerCase();
    return books.filter(b => `${b.title} ${b.authors}`.toLowerCase().includes(search) &&
      (status === 'all' || (status === 'reading' ? ['reading', 'finishing'].includes(b.status) : b.status === status)));
  }
  function isValidSource(value) {
    if (value === '') return true;
    if (typeof value !== 'string' || value.length > 2048) return false;
    try { return new URL(value).protocol === 'https:'; } catch { return false; }
  }
  function updateBook(books, id, patch) {
    if (patch.status !== undefined && !statuses.includes(patch.status)) throw Error('Unknown reading status');
    if (patch.format !== undefined && !formats.includes(patch.format)) throw Error('Unknown book format');
    if (patch.source !== undefined && !isValidSource(patch.source.trim())) throw Error('Publisher details must use HTTPS');
    return books.map(b => b.id !== id ? b : { ...b, status: patch.status ?? b.status, format: patch.format ?? b.format, notes: typeof patch.notes === 'string' ? patch.notes : b.notes, source: patch.source === undefined ? b.source : patch.source.trim() });
  }
  function parseLibrary(text) {
    const books = JSON.parse(text);
    const ids = new Set();
    if (!Array.isArray(books) || !books.length) throw Error('Expected a library of books');
    for (const b of books) {
      if (!b || typeof b.id !== 'string' || ids.has(b.id) || typeof b.title !== 'string' || typeof b.authors !== 'string' || !statuses.includes(b.status) || !formats.includes(b.format) || typeof b.notes !== 'string' || (b.source !== undefined && !isValidSource(b.source))) throw Error('Invalid library record');
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
      if (seed.cover) { book.cover = seed.cover; book.coverSource = seed.coverSource; }
      if (seed.audibleObservation) book.audibleObservation = { ...seed.audibleObservation };
      if (seed.listeningEvents) book.listeningEvents = seed.listeningEvents.map(e => ({ ...e }));
      if (old.format === 'unspecified' && seed.format !== 'unspecified') book.format = seed.format;
      return book;
    });
    return merged.concat(saved.filter(b => !removedBookIds.has(b.id) && !seedBooks.some(seed => seed.id === b.id)).map(b => b.status === 'unknown' ? {...b, status:'unread'} : b));
  }
  function mergeBrowserEdits(serverBooks, browserBooks) {
    const browserById = new Map(browserBooks.map(book => [book.id, book]));
    const seedById = new Map(seedBooks.map(book => [book.id, book]));
    const merged = serverBooks.map(serverBook => {
      const browserBook = browserById.get(serverBook.id), seedBook = seedById.get(serverBook.id);
      if (!browserBook) return serverBook;
      return {
        ...serverBook,
        notes: browserBook.notes.trim() ? browserBook.notes : serverBook.notes,
        status: !seedBook || browserBook.status !== seedBook.status ? browserBook.status : serverBook.status,
        format: !seedBook || browserBook.format !== seedBook.format ? browserBook.format : serverBook.format,
        source: !seedBook || browserBook.source !== seedBook.source ? browserBook.source : serverBook.source
      };
    });
    const serverIds = new Set(serverBooks.map(book => book.id));
    return merged.concat(browserBooks.filter(book => !serverIds.has(book.id)));
  }
  function parseLibraryEdits(text) {
    const edits = JSON.parse(text), ids = new Set(), seedIds = new Set(seedBooks.map(book => book.id));
    if (!Array.isArray(edits)) throw Error('Expected library edits');
    for (const edit of edits) {
      const keys = edit && Object.keys(edit);
      if (!edit || typeof edit.id !== 'string' || !seedIds.has(edit.id) || ids.has(edit.id) || keys.some(key => !['id','status','format','notes','source'].includes(key)) || keys.length < 2) throw Error('Invalid library edit');
      if (edit.status !== undefined && !statuses.includes(edit.status)) throw Error('Invalid library edit');
      if (edit.format !== undefined && !formats.includes(edit.format)) throw Error('Invalid library edit');
      if (edit.notes !== undefined && (typeof edit.notes !== 'string' || edit.notes.length > 20000)) throw Error('Invalid library edit');
      if (edit.source !== undefined && !isValidSource(edit.source)) throw Error('Invalid library edit');
      ids.add(edit.id);
    }
    return edits;
  }
  function extractLibraryEdits(books) {
    const seedById = new Map(seedBooks.map(book => [book.id, book]));
    return books.flatMap(book => {
      const seed = seedById.get(book.id);
      if (!seed) return [];
      const edit = { id:book.id };
      if (book.status !== seed.status) edit.status = book.status;
      if (book.format !== seed.format) edit.format = book.format;
      if (book.notes !== seed.notes) edit.notes = book.notes;
      if ((book.source || '') !== (seed.source || '')) edit.source = book.source || '';
      return Object.keys(edit).length > 1 ? [edit] : [];
    });
  }
  function applyLibraryEdits(books, edits) {
    const byId = new Map(edits.map(edit => [edit.id, edit]));
    return books.map(book => byId.has(book.id) ? { ...book, ...byId.get(book.id) } : book);
  }
  function shelfBooks(books) {
    return books.filter(b => typeof b.cover === 'string' && /^assets\/[a-z0-9-]+-cover\.jpg$/.test(b.cover) && typeof b.coverSource === 'string' && b.coverSource.startsWith('https://'));
  }
  function groupBooksByDecade(books) {
    const knownDecades = books.filter(book => /^\d{4}/.test(book.addedAt || '')).map(book => Math.floor(Number(book.addedAt.slice(0, 4)) / 10) * 10);
    const oldestDecade = Math.min(...knownDecades);
    const groups = new Map();
    for (const book of books) {
      const decade = /^\d{4}/.test(book.addedAt || '') ? Math.floor(Number(book.addedAt.slice(0, 4)) / 10) * 10 : oldestDecade;
      if (!groups.has(decade)) groups.set(decade, []);
      groups.get(decade).push(book);
    }
    return [...groups.entries()].sort(([a], [b]) => b - a).map(([decade, decadeBooks]) => ({ decade, label: `${decade}s`, books: decadeBooks }));
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
  function latestShelfScrollTarget({ scrollWidth, clientWidth }) {
    return Math.max(0, scrollWidth - clientWidth);
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
  const api = { seedBooks, filterBooks, updateBook, parseLibrary, mergeLibrary, mergeBrowserEdits, parseLibraryEdits, extractLibraryEdits, applyLibraryEdits, shelfBooks, groupBooksByDecade, shelfDimensions, isLocalLibrary, yearScrollTarget, latestShelfScrollTarget, formatBookDate, formatBookHistory };
  if (typeof module !== 'undefined') module.exports = api;
  else globalThis.BookshelfModel = api;
})();
