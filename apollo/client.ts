import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// NO SUBSCRIPTION REQUIRED FOR DEVELOP PROCESS

const httpLink = createHttpLink({
    uri: "http://localhost:3007/graphql" //beckend server manzili
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;