import { Route, Switch } from "react-router-dom";
import AllMeetupspage from "./pages/AllMeetups";
import NewMeetuppage from "./pages/NewMeetup";
import Favoritespage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  //localhost : 3000/
  //my-page.com/
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupspage />
        </Route>
        <Route path="new-meetup">
          <NewMeetuppage />
        </Route>
        <Route path="/favorites">
          <Favoritespage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
