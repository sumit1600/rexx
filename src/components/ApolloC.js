import React from 'react'
import {gql,useQuery} from "@apollo/client"
import ApolloData from './ApolloData';

const ApolloC = () => {

    const EXCHANGE_RATES = gql`
        query GetExchangeRates {
            rates(currency: "USD") {
            currency
            rate
            }
        }
    `;
    
    const { loading, error, data, refetch, networkStatus  } = useQuery(EXCHANGE_RATES);
  
    if (networkStatus === networkStatus.refetch) return <p>Refetching!'</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>`Error! ${error.message}`;</p>;
  
    return data.rates.map((er) => (
        <ApolloData props = {er}/>
    ));

    // return data.rates.map(({ currency, rate }) =>                                                                                                                            (
    //   <div key={currency}>
    //     <p>
    //       <button onClick={() => refetch()}>Refetch!</button>
    //       {currency}: {rate}
    //     </p>
    //   </div>
    // ));
   
}

export default ApolloC
