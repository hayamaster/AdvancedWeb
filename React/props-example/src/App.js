import "./App.css";
import Garage from "./Garage";
import Comment from "./Comment";
import Me from "./Me";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React",
  author: {
    name: "Hello Kitty!",
    avatarUrl: "http://placekitten.com/g/65/65",
  },
};

const me = {
  date: new Date(),
  text: "I want to be the best",
  author: {
    name: "JUHA, KIM",
    logo: "good.png",
  },
};

function App() {
  return (
    <div>
      {/* <Garage /> */}
      {/* <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      /> */}
      <Me date={me.date} text={me.text} author={me.author} />
    </div>
  );
}

export default App;
