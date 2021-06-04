# GitHub Star Tagger

Add tags to your starred repositories on GitHub!

[Live Link](https://apettenati.github.io/github-star-tagger)

Have too many stars on GitHub? Do you find yourself googling the same repositories over and over? Know that once upon a time you found that perfect Vim plugin you didn't have time to install and now it's lost forever?

Look no further! Now you can add tags to your starred repositories on GitHub so you never lose another repo!

GitHub Star Tagger retrieves your starred repositories from [GitHub's REST API](https://docs.github.com/rest) and saves your star and tag data to local storage.

If you wish to test functionality of the app or don't have a GitHub account, click the `Use Demo Data` button on the homepage to test the application with some demo data.

## Front End

The live link is a front-end only application that saves to local storage and is hosted with GitHub Pages.

Worried about security? No account creation or logging in is necessary! Simply type in your username and pull your public data from GitHub.

## Back End

The server is built with NodeJS/Express and MongoDB. Tag data is saved to the database. This is not currently hosted.

## Features

- Fetch from GitHub's REST API on home page
- Saves data to local storage
- View star data on `user` page without fetching from the API to reduce API calls
- Add/Remove custom tags for each starred repository
- Filter stars with a multi-select input that auto-completes based on existing tags to search for a single tag or a combination of tags
- Filter contains `untagged` option to quickly identify any repos with no tags
- Pagination limits the quantity of stars on each page

## Built with

- [ Typescript ](https://www.typescriptlang.org/)
- [ React ](https://reactjs.org/)
- [ Create React App ](https://create-react-app.dev/) - React application boilerplate
- [ GitHub Rest ](https://docs.github.com/rest) API - fetching github starred repository data
- [ React-Router ](https://reactrouter.com/) - URL routing
- [ React-Select ](https://react-select.com/) - Filter with multi-select input
- [ FontAwesome Icons ](https://fontawesome.com/) - Icons 
- [ Bootstrap ](https://getbootstrap.com/) - CSS Framework