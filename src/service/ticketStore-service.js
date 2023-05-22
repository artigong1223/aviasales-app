import axios from 'axios';

export default class TicketStoreService {
  ticketsList = [];
  initSearch = async () => {
    const response = await axios.get('https://aviasales-test-api.kata.academy/search');
    return response.data.searchId;
  };
  getTickets = async (searchId) => {
    const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    const { tickets, stop } = await response.data;
    this.ticketsList.push(...tickets);
    if (!stop) {
      return this.getTickets(searchId);
    }
    return this.ticketsList;
  };
}
