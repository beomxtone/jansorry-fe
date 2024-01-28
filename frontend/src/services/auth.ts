import { apiClient } from '@/services/index';
import { authResponse, signupRequest } from '@/types/auth';

export const getKakaoLogin = async (code: string): Promise<authResponse> => {
  try {
    return await apiClient.get<authResponse>(`/oauth/login/kakao?code=${code}`);
  } catch (e) {
    console.log(e);
  }
  // TODO: authResponse 타입 default 선언 필요함
  return { oauthId: '', nickname: null, accessToken: null } as authResponse;
};

export const postSignup = async (signupInfo: signupRequest): Promise<authResponse> => {
  try {
    return await apiClient.post<authResponse, signupRequest>(`/members/signup`, signupInfo);
  } catch (e) {
    console.log(e);
  }
  return { nickname: null, accessToken: null } as authResponse;
};