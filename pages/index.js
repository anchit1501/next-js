import fetch from 'isomorphic-unfetch';
import Layout from "../components/layout";
import Prices from '../components/prices';

const Index = (props) => (
  <Layout>
    <>
      <h1>Welcome to the App</h1>
      <Prices bpi={props.bpi}/>
    </>
  </Layout> 
);

Index.getInitialProps= async function(){
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json',{
    method: 'GET',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});
  const data = await res.json();
  console.log('err',res,data)
  return{
    bpi:data.bpi
  }
}
export default Index;
