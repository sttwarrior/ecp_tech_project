import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CampaignApiUrls } from '../constants';
import { AuthResponse } from '../../components/auth/types';
import { Campaign } from '../../components/campaign/types';
import { AuthContext } from '../../components/auth';

const getAuthorization = async (apiKey: string): Promise<AuthResponse> => {
  const { data } = await axios.get(CampaignApiUrls.PROXY_URL + CampaignApiUrls.AUTH,
    {
      headers: {
        "x-api-key": apiKey,
      }   
    }
  );
  return data;
};

export const useGetAuthorization = (apiKey: string | null) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['authorization', apiKey], 
    queryFn: () => getAuthorization(apiKey!),
    enabled: !!apiKey
  });
  return { authToken: data?.access_token, error, isLoading };
}

const getCampaigns = async (token: string): Promise<Campaign[]> => {
  const { data } = await axios.get(CampaignApiUrls.PROXY_URL + CampaignApiUrls.CAMPAIGNS,
    {
      headers: {
        "Authorization": 'Bearer ' + token,
      },
      params: {
        "limit": 30
      }
    }
  );
  return data;
};

export const useGetCampaigns = () => {
  const { auth } = useContext(AuthContext);
  const { data, error, isLoading } = useQuery({
    queryKey: ['campaigns'], 
    queryFn: () => getCampaigns(auth!),
    enabled: !!auth,
  });

  return { data, error, isLoading };
}
