import { FaShieldAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const history = []

const dummyFeedbacks = [
  {
    name: "Alissa",
    feedbacks: "lorem ipsum dolor sit amet",
  },
  {
    name: "Benny",
    feedbacks: "Bagus.",
  },
  {
    name: "Tyler",
    feedbacks:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque bibendum augue, eget lacinia ante molestie ut. Etiam dignissim turpis dolor, ac pharetra diam varius vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id euismod nisi. Fusce sollicitudin condimentum tincidunt. Proin fringilla, mauris a cursus ultricies, ante dolor convallis nunc, convallis placerat enim odio vitae turpis. Cras rutrum condimentum tempor. Duis at rhoncus sapien.",
  },
  {
    name: "Tyler",
    feedbacks:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque bibendum augue, eget lacinia ante molestie ut. Etiam dignissim turpis dolor, ac pharetra diam varius vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id euismod nisi. Fusce sollicitudin condimentum tincidunt. Proin fringilla, mauris a cursus ultricies, ante dolor convallis nunc, convallis placerat enim odio vitae turpis. Cras rutrum condimentum tempor. Duis at rhoncus sapien.",
  },
  {
    name: "Tyler",
    feedbacks:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque bibendum augue, eget lacinia ante molestie ut. Etiam dignissim turpis dolor, ac pharetra diam varius vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id euismod nisi. Fusce sollicitudin condimentum tincidunt. Proin fringilla, mauris a cursus ultricies, ante dolor convallis nunc, convallis placerat enim odio vitae turpis. Cras rutrum condimentum tempor. Duis at rhoncus sapien.",
  },
  {
    name: "Tyler",
    feedbacks:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque bibendum augue, eget lacinia ante molestie ut. Etiam dignissim turpis dolor, ac pharetra diam varius vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id euismod nisi. Fusce sollicitudin condimentum tincidunt. Proin fringilla, mauris a cursus ultricies, ante dolor convallis nunc, convallis placerat enim odio vitae turpis. Cras rutrum condimentum tempor. Duis at rhoncus sapien.",
  },
];

const elections = [
  {
    electionId: 0,
    electionTitle: "VOTE 1",
    electionPicture:
      "https://d2v9ipibika81v.cloudfront.net/uploads/sites/33/2-1080x684.jpg",
    electionCreator: "0x...788",
    electionStart: "Today at 12:00:00",
    electionEnd: "Today at 18:00:00",
    electionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat lacus. Fusce sollicitudin non dolor in venenatis. Aenean a sem gravida risus ornare elementum. Vestibulum quis augue nulla. Phasellus tincidunt mauris pharetra ullamcorper suscipit. Sed mattis nulla vel urna scelerisque dignissim. Suspendisse at elementum urna. Donec id aliquet nulla, in tincidunt orci.",
  },
  {
    electionId: 1,
    electionTitle: "VOTE 2",
    electionPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZtpQWrKnU6avtGUkqf2LzqlXmchzXPDbPg&s",
    electionCreator: "0x...789",
    electionStart: "Tomorrow at 10:00:00",
    electionEnd: "Tomorrow at 22:00:00",
    electionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat lacus. Fusce sollicitudin non dolor in venenatis. Aenean a sem gravida risus ornare elementum. Vestibulum quis augue nulla. Phasellus tincidunt mauris pharetra ullamcorper suscipit. Sed mattis nulla vel urna scelerisque dignissim. Suspendisse at elementum urna. Donec id aliquet nulla, in tincidunt orci.",
  },
  {
    electionId: 2,
    electionTitle: "VOTE 3",
    electionPicture:
      "https://cdn.britannica.com/56/193556-131-7D3D1EDD/Election---Button-Vote-stripes-politics-campaign.jpg?w=840&h=460&c=crop",
    electionCreator: "0x...790",
    electionStart: "July 24th 2024 at 12:00:00",
    electionEnd: "July 24th 2024 at 18:00:00",
    electionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat lacus. Fusce sollicitudin non dolor in venenatis. Aenean a sem gravida risus ornare elementum. Vestibulum quis augue nulla. Phasellus tincidunt mauris pharetra ullamcorper suscipit. Sed mattis nulla vel urna scelerisque dignissim. Suspendisse at elementum urna. Donec id aliquet nulla, in tincidunt orci.",
  },
  {
    electionId: 3,
    electionTitle: "LO",
    electionPicture:
      "https://saifulmujani.com/wp-content/uploads/2020/06/depositphotos_110340254-stock-illustration-election-campaign-election-vote-election.jpg",
    electionCreator: "0x...791",
    electionStart: "Today at 18:00:00",
    electionEnd: "Today at 23:00:00",
    electionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat lacus. Fusce sollicitudin non dolor in venenatis. Aenean a sem gravida risus ornare elementum. Vestibulum quis augue nulla. Phasellus tincidunt mauris pharetra ullamcorper suscipit. Sed mattis nulla vel urna scelerisque dignissim. Suspendisse at elementum urna. Donec id aliquet nulla, in tincidunt orci.",
  },
  {
    electionId: 4,
    electionTitle: "LALALA",
    electionPicture:
      "https://img.etimg.com/thumb/width-1600,height-900,imgsize-64666,resizemode-75,msid-108516210/news/elections/lok-sabha/india/general-elections-2024-schedule-to-be-announce-on-march-16.jpg",
    electionCreator: "0x...801",
    electionStart: "Today at 12:00:00",
    electionEnd: "Today at 18:00:00",
    electionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat lacus. Fusce sollicitudin non dolor in venenatis. Aenean a sem gravida risus ornare elementum. Vestibulum quis augue nulla. Phasellus tincidunt mauris pharetra ullamcorper suscipit. Sed mattis nulla vel urna scelerisque dignissim. Suspendisse at elementum urna. Donec id aliquet nulla, in tincidunt orci.",
  },
];

const candidates = [
  {
    id: 0,
    candidateName: "Thomas Alpha Edison",
    candidatePhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEavBmbKd_5QrxjJv61uzO6Vd54P9H7Pgsg&s",
    candidateVision: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum velit. Aliquam semper lorem eu lectus efficitur, nec tincidunt ex luctus. Donec volutpat congue augue, eu maximus elit pulvinar nec. Mauris volutpat nulla at ipsum accumsan congue. Vivamus malesuada est dignissim ullamcorper lobortis. Proin consequat a velit sed gravida. Ut accumsan vel sapien vitae faucibus. Duis pulvinar, mi et posuere tincidunt, eros ante viverra dui, et feugiat nulla risus at sem. Suspendisse semper urna ac risus sollicitudin, ut imperdiet turpis dapibus. Vestibulum tempus purus ut malesuada accumsan.",
    candidateMission: "Fusce elementum consequat mi sed aliquet. Quisque ullamcorper eu mi non facilisis. Proin vel suscipit ligula. Nam ante risus, lacinia in ligula iaculis, sodales vehicula mi. Etiam vestibulum volutpat lorem ut congue. Donec sodales pulvinar est, et bibendum nibh aliquet vitae. Donec varius aliquam lectus, vitae volutpat enim lobortis in. Nullam eget pretium lorem. Nulla non erat porta, venenatis elit vitae, fermentum risus. Donec purus massa, lobortis luctus luctus at, porttitor quis nisi. In aliquet quam quis tempus scelerisque.",
    totalVote: 12
  },
  {
    id: 1,
    candidateName: "Nicholas Tesla",
    candidatePhoto: "https://cdn0-production-images-kly.akamaized.net/aQK4Eqplwz15BRCLeR0_rFMhovk=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2360545/original/030301100_1537160924-800px-N.jpg",
    candidateVision: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum velit. Aliquam semper lorem eu lectus efficitur, nec tincidunt ex luctus. Donec volutpat congue augue, eu maximus elit pulvinar nec. Mauris volutpat nulla at ipsum accumsan congue. Vivamus malesuada est dignissim ullamcorper lobortis. Proin consequat a velit sed gravida. Ut accumsan vel sapien vitae faucibus. Duis pulvinar, mi et posuere tincidunt, eros ante viverra dui, et feugiat nulla risus at sem. Suspendisse semper urna ac risus sollicitudin, ut imperdiet turpis dapibus. Vestibulum tempus purus ut malesuada accumsan.",
    candidateMission: "Fusce elementum consequat mi sed aliquet. Quisque ullamcorper eu mi non facilisis. Proin vel suscipit ligula. Nam ante risus, lacinia in ligula iaculis, sodales vehicula mi. Etiam vestibulum volutpat lorem ut congue. Donec sodales pulvinar est, et bibendum nibh aliquet vitae. Donec varius aliquam lectus, vitae volutpat enim lobortis in. Nullam eget pretium lorem. Nulla non erat porta, venenatis elit vitae, fermentum risus. Donec purus massa, lobortis luctus luctus at, porttitor quis nisi. In aliquet quam quis tempus scelerisque.",
    totalVote: 13
  },
  {
    id: 2,
    candidateName: "Albert Einstein",
    candidatePhoto: "https://cdn.britannica.com/77/142177-050-4E8010A9/Albert-Einstein-1947.jpg",
    candidateVision: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet bibendum velit. Aliquam semper lorem eu lectus efficitur, nec tincidunt ex luctus. Donec volutpat congue augue, eu maximus elit pulvinar nec. Mauris volutpat nulla at ipsum accumsan congue. Vivamus malesuada est dignissim ullamcorper lobortis. Proin consequat a velit sed gravida. Ut accumsan vel sapien vitae faucibus. Duis pulvinar, mi et posuere tincidunt, eros ante viverra dui, et feugiat nulla risus at sem. Suspendisse semper urna ac risus sollicitudin, ut imperdiet turpis dapibus. Vestibulum tempus purus ut malesuada accumsan.",
    candidateMission: "Fusce elementum consequat mi sed aliquet. Quisque ullamcorper eu mi non facilisis. Proin vel suscipit ligula. Nam ante risus, lacinia in ligula iaculis, sodales vehicula mi. Etiam vestibulum volutpat lorem ut congue. Donec sodales pulvinar est, et bibendum nibh aliquet vitae. Donec varius aliquam lectus, vitae volutpat enim lobortis in. Nullam eget pretium lorem. Nulla non erat porta, venenatis elit vitae, fermentum risus. Donec purus massa, lobortis luctus luctus at, porttitor quis nisi. In aliquet quam quis tempus scelerisque.",
    totalVote: 15
  }
]

const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "elections",
    title: "Elections",
  },
  {
    id: "history",
    title: "History",
  },
];

const iconMap = {
  star: FaStar,
  shield: FaShieldAlt,
  paperPlane: FaPaperPlane
}

const features = [
  {
    id: "feature-1",
    icon: "star",
    title: "Advantages",
    content:
      "Our blockchain voting system offers a unique combination of transparency and efficiency.",
  },
  {
    id: "feature-2",
    icon: "shield",
    title: "100% Secured",
    content:
      "We take proactive steps to ensure your votes and information are secure.",
  },
  {
    id: "feature-3",
    icon: "paperPlane",
    title: "Eazy Voting",
    content:
      "Our platform makes casting and counting votes simple and accurate, saving time and reducing errors.",
  },
];

export { features, navLinks, iconMap, elections, dummyFeedbacks, history, candidates };
