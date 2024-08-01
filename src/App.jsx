import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Card from "./Card";
function App() {
  return (
    <div className="container">
        <Header/>
        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center width:100% border-color:blue">
            <Card plan="FREE" 
            price={0}
           
            users="single"
            storage={50}
            pubpro="Unlimited"
            access="Community"
            pripro="Unlimited"
            phone="Dedicated"
            sub="Free"
            status="Monthly"
             />
             
            <Card plan="PLUS"
             price={9}
             users="5"
             storage={50}
             pubpro="Unlimited"
             access="Community"
             pripro="Unlimited"
             phone="Dedicated"
             sub="Free"
             status="Monthly"
             />
            <Card plan="PRO" 
            price={49}
            users="Unlimited"
            storage={50}
            pubpro="Unlimited"
            access="Community"
            pripro="Unlimited"
            phone="Dedicated"
            sub="Free"
            status="Monthly"
            />
          </div>
        </main>

               
    </div>
  );
}

export default App;
