
# Bitcoin Stock Exchange
This is a Nextjs application to view Bitcoin Prices.
We are using ISOMORPHIC-unfetch to fetch the data from CoinDesk API (https://www.coindesk.com/coindesk-api)

### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need Git to clone the repo.
`git clone https://github.com/anchit1501/next-js`
Run this command to clone the repo in you local machiene

### Installing

Run `npm install` to install the depenencies.
You can use  `npm ren dev` to run the project

Give an example
To fetch data we are using

`import fetch from 'isomorphic-unfetch';`

```
Index.getInitialProps= async function(){
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json',
  {
    method: 'GET',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});
  const data = await res.json();
  return{
    bpi:data.bpi
  }
}
```

### Built With
Bootswatch - The web framework used
CoinDesk API - Used to get updated prices

### Authors
Anchit Aggarwal

### License
This project is licensed under the MIT License - see the LICENSE.md file for details

### Acknowledgments
Travery Media