import './App.css';
import NavBar from './components/NavBar' 
import Footer from './components/Footer';
import ApolloClient from 'apollo-boost'
import { ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/"
});

function App() {
  return (
    <ApolloProvider client = {client} >
      <div className="App">
        <NavBar/>
        <Footer/>
      </div>
    </ApolloProvider>
  );
}

export default App;
