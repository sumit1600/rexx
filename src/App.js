import './App.css';
import NavBar from './components/NavBar' 
import Footer from './components/Footer';
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

//to check graphQl endpoint returning data or not 
client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

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


