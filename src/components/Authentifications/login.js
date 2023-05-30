import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://i4v6onpxw7ufhmvgc63wvu62oq0mdslc.lambda-url.us-east-1.on.aws/';

export default function login(username, password) {
    return axios.post(`${BASE_URL}/login`, { username, password });
  }