import api from './api';

export function getReport(day = 1, month = 1, year = 1) {
  return api.get(`/year/${year}/month/${month}/day/${day}/revenue`);
}
