import httpUserClient from '@/httpClient/UserClient';

export default {
  getNotifications(catalog, page, perPage) {
    return httpUserClient.get(`notifications?page=${page}&per_page=${perPage}&catalog=${catalog}`);
  },
};
