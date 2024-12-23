<template>
    <div class="presentations">
      <h1>Presentations</h1>
      <ul>
        <li>
          <a href="/presentations/sample1.pdf" download>Presentation 1</a>
        </li>
        <li>
          <a href="/presentations/sample2.pdf" download>Presentation 2</a>
        </li>
      </ul>
    </div>
  </template>
  
  <style>
  .presentations ul {
    list-style-type: none;
    padding: 0;
  }
  
  .presentations li {
    margin: 10px 0;
  }
  
  .presentations a {
    color: #55AD9B;
    text-decoration: none;
  }
  
  .presentations a:hover {
    text-decoration: underline;
  }
  </style>