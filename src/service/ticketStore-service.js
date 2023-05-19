import axios from 'axios';

export default class TicketStoreService {
  ticketsList = [];
  initSearch = async () => {
    const response = await axios.get('https://aviasales-test-api.kata.academy/search');
    !localStorage.getItem('searchId') ? localStorage.setItem('searchId', response.data.searchId) : null;
  };
  getTickets = async (searchId) => {
    await this.initSearch();
    const response = await axios.get(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${localStorage.getItem('searchId')}`
    );
    const { tickets, stop } = await response.data;
    this.ticketsList.push(...tickets);
    if (!stop) {
      return this.getTickets(searchId);
    }
    if (stop) {
      localStorage.clear();
    }
    return this.ticketsList;
  };
}
