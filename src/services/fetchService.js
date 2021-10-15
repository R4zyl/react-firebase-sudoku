export const fetchService = {
  async fetchData(path, method, body) {
    let fetchAttributes = {
      method,
      headers: { 
        'Content-Type': 'application/json',
      },
    };
    if (body) {
      fetchAttributes.body = JSON.stringify(body);
    };
    const response = await fetch(`${path}`, fetchAttributes);
    const responseBody = await response.json();
    if (response.status !== 200) {
      throw Error(responseBody.error);
    }
    return responseBody;
  },
};
