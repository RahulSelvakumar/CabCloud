import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

import Page from "./Page";
function App({ signOut }) {
  return (
    <div className="App">
      <div className="shadow-lg p-2 m-1">
        <h1 className="text-3xl font-bold m-5 font-mono">CabCloud</h1>
        <div className="fixed top-1 right-1">
          <button
            className="m-5 p-1 border-solid border-2 rounded-md border-gray-500 bg-gray-300 text-gray-800 font-mono font-semibold"
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      </div>

      <Page />
    </div>
  );
}

export default withAuthenticator(App);
