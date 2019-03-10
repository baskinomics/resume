mkdir resume-react
cd resume-react/

# Add Babel packages
yarn add @babel/node
yarn add @babel/core
yarn add @babel/cli
yarn add @babel/preset-env
yarn add @babel/preset-react

# Create root project assets
1959  # cat package.json
1960  mkdir public src
1964  touch public/index.html

# babel.rc configuration
1971  touch .babelrc

# Configure webpack
yarn add webpack
yarn add webpack-cli
yarn add webpack-dev-server
yarn add style-loader
yarn add css-loader
yarn add babel-loader
touch webpack.config.js

# Add React and associated packages
1973  yarn add react react-dom

# Implement React components
1974  touch src/index.js
1975  touch src/App.js
1976  touch src/App.css

1983  yarn reload
1984
1985  yarn install
1986  yarn reload

1989  yarn remove babel-core babel-cli
1990  clear
1991  yarn reload
1992  yarn add react-hot-loader
1993  yarn reload
1994  clear
1995  yarn add @react-pdf/renderer
1996  touch src/MyDocument.js
1997  yarn add @babel/node
1998  yarn pdf
1999  clear
2000  yarn pdf
2001  history --help
2002  history 15
2003  history 150 > project-scaffolding.sh
