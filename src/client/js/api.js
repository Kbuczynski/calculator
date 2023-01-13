class API {
  constructor(baseURL) {
    this._baseURL = baseURL;
  }

  async post(endpoint, data) {
    try {
      const response = await fetch(
        `${this._baseURL}/${endpoint}`,
        this._getConfig("POST", data)
      );
      return response.json();
    } catch (err) {
      throw new Error(err);
    }
  }

  _getConfig(method, data) {
    return {
      method,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),
    };
  }
}

export default API;
