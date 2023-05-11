import axios from 'axios';

export default class TicketStoreService {
  searchId = '';
  initSearch = async () => {
    const response = await axios.get('https://aviasales-test-api.kata.academy/search');
    this.searchId = await response.data.searchId;
  };
  getTickets = async () => {
    await this.initSearch();
    const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${this.searchId}`);
    return response.data.tickets;
  };
}
