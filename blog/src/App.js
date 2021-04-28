import './App.css';
import Article from './Article';
import missedArticles from './_data/missed-articles.json';

function App() {
  return (
    <div>
      <h1>Blog</h1>
      {/* <Article /> */}
      {missedArticles.map((a, idx) => {
        return <Article key={idx} article={a} />
      })}
      <h1>My Blog</h1>
      <Article article={{
        title: 'You wont believe this story',
        description: 'Click here to read more',
        hasAudioAvailable: false
      }} />
    </div>
  );
}

export default App;
