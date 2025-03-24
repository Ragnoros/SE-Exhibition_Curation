# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<h1>SE Exhibition Curator</h1>

<h3>Description</h3>
<p>The project allows users to search through 2 apis and filter the results as they choose. Each exhibit has a default setting so when the page opens cards are displayed. The science museum has the default built in, the Victoria & Albert Museum has been manually set to the 'Beatles' (band) </p>
<p>The project allows students researching exhbits to browse the collections and save exhibits locally so that they can go back to them at a future date. Each card opens up to display more info about the specific exhibit</p>
<p>Not all exhibits have images so I have placed an image replacer in the app</p>

<h3>Getting Started</h3>

<p>If pulling the project down please enter the /frontend folder and type npm install to get started. If you wish to view installed packages please open the package.json file</p>
<p>The filters work locally. Please use the search bar for api calls and then filter the cards after the search.</p>

<h4>Searching</h4>
<p>Searching varies depending on api. Victoria & Albert allows the searching of dates (1980) which brings back what you would expect. The same search on the science museum will bring back 1980 in titles etc</p>
<p>Searching nations and places: It seems Victoria & Albert has a more global collection. Searching India on Victoria & Albert will bring back exhibits but not on the Science Museum. Searcing Britain will bring back exhibits on both.</p>
