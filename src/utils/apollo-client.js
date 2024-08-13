import { ApolloClient, InMemoryCache } from "@apollo/client";
import { wordpressGraphQlApiUrl } from "../utils/variables";


const createApolloClient = () => {
  return new ApolloClient({
    uri: wordpressGraphQlApiUrl,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;