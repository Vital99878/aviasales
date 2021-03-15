class Tickets_api {
  async getId() {
    const response = await fetch('https://front-test.beta.aviasales.ru/search');
    const body = await response.json();
    return body.searchId;
  }

  async getTickets(id) {
    try {
      const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`);
      const body = await response.json();
      const { tickets, stop } = body;
      return [tickets, stop];
    } catch {
      return [[], false];
    }
  }
}

export const { getId, getTickets } = new Tickets_api();
