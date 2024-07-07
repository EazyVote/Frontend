import { FaShieldAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

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
  paperPlane: FaPaperPlane,
};

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

export { features, navLinks, iconMap, elections };
