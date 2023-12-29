import { useContext } from 'react';
import ApiContext from './ApiContext';
import { CosmosApi, MugApi } from '@/api';

const useApiClients = (): { mugClient: MugApi, cosmosClient: CosmosApi } => {
  const apiClients = useContext(ApiContext);

  if (!apiClients) {
    // Throw an error if the hook is used outside of the AxiosClientProvider context
    throw new Error('useApiClients must be used within a ApiProvider');
  }

  return apiClients;
};

export default useApiClients;