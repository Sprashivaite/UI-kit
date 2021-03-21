# FSD-frontend-education-program
Frontend-education-program with Webpack, Pug and Stylus.

## Demo page

[UI-kit demo page](https://sprashivaite.github.io/UI-kit/index.html)

## How to work
#### Install dependencies
```commandline
npm install
```

#### Start dev server
```commandline
npm run dev
```

Visit http://localhost:8081/ to see all possible pages of the project, click any page and start working.

#### On the production server create the bundle files
```commandline
npm run build
```

### File structure
 
#### `build`
 
Contains all webpack configs, they are imported in the webpack.config.js from the root directory

#### `src`
```
src
|  entry.js
|  favicon
└─── components
└─── fonts
└─── pages
└─── styl
```

`entry.js` entry.js is a main file that import every .js file in the src directory.

`pages`  is a folder with all possible pages of the project.

`components` is a folder with all possible components shared between all pages.

#### `pages`
`pages` has the following structure:

```
pages
└─── index
|   |  index.pug
|   |  index.styl
└─── cards
|   |  cards.pug
|   |  cards.styl
└─── colors-type
|   |  colors-type.pug
|   |  colors-type.styl
└─── landing-page
|   |  landing-page.pug
|   |  landing-page.styl
|   └─── img
|   |   |  landing-page.jpg
```


#### `components`
`components` has the following structure:
```
components
└─── comfort
|   |  comfort.pug
|   |  comfort.styl
|   └─── img
|   |   |  cosiness.svg
|   |   |  insert_emoticon.svg
|   |   |  location-city.svg
└─── calendar
|   |  calendar.pug
|   |  calendar.js
|   |  calendar.styl
|   └─── img
|   |   |  arrow-back.svg
|   |   |  arrow-forward.svg
```


