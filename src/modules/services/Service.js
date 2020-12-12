import _ from 'lodash';
import axios from 'axios';

class Service {
  constructor() {
    this.lodash = _;
    this.http = axios;

    this.$apiURL = 'https://5ced4d8bb779120014b4a041.mockapi.io';
  }
}

export default Service;
