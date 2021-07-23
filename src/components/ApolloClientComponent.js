import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import ApolloData from './ApolloData'

const ApolloClientComponent = () => {
    return (
        <div>
            Welcome to ApolloClient
            <Query query={gql`
                {
                    countries {
                        name
                      }
                }
            `}
            >
            {({loading,error,data})=>{
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(</p>

                return data.countries.map((country)=>{
                   setTimeout(()=>{
                       debugger
                    <table>
                        <tr>
                        <td>{country.name}</td>
                        </tr>
                    </table>
                   },1000)
                //    <ApolloData country={country} />
                }); 
            }}    
            </Query>
        </div>
    )
}

export default ApolloClientComponent
