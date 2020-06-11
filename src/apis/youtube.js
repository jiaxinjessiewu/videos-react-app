// import React, { Component } from 'react';

const KEY = 'AIzaSyBBIBQD9piJKwaIAsc9WcRPQ9otWOOmSbA';
const maxResults = 20;
const URL = 'https://www.googleapis.com/youtube/v3/search?';
const query = `key=${KEY}&part=snippet&maxResults=${maxResults}`;

export const finalURL = URL + query;
