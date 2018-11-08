# MyReads project

This is a project for the Udacity course "React Fundamentals". The goal of this project is to add interactivity to an app by redesigning the static code.

## Description of the app

With this app you can manage your books. Choose from three categories (read, read currently, want to read). You can conveniently move your books from task to task or delete them when they are done. If you want to add new books just click on the + symbol and enter the book or author in the search.

## Functionalities

*List Books under 3 diff shelves : Currently Reading, Want to Read and Read
*Ability to change the shelf of the books by clicking on them and selecting
*Search for different books and list search results
*Ability to add new books from search results to one of 3 shelves
*Maintain and display same shelf for a book in shelf as well as search results

## Development:
* Clones this repo
* Install all project dependencies with `npm install`
* Start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── API
    |   └── BooksAPI.js   
    ├── components
    |   ├── Books.js
    │   ├── Bookshelf.js
    |   ├── index.js
    │   └── Searchindex.js  
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg    
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Important

The backend API uses a fixed set of cached search results and is limited to a specific set of search terms found in [SEARCH_TERMS.md] (SEARCH_TERMS.md). This list of expressions are the _only_ expressions that will work with the backend. So do not be surprised if your search for Basket Weaving or Bubble Wrap does not produce results.

Create ## React App

This project was started with [Create React App] (https://github.com/facebookincubator/create-react-app). For more information about performing common tasks, see (https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Participate

I most likely will not accept pull requests.

For more information, see [CONTRIBUTING.md] (CONTRIBUTING.md).

## License

My Books is distributed under the MIT license.