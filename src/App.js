import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import InputItem from "./InputItem";
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

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-2 md:pd-6 border-[2px] rounded-xl">
          <p className="text-[20px] font-bold">Get a ride</p>
          <InputItem type="source" />
          <InputItem type="destination" />

          <button className="p-3 bg-black w-full mt-5 text-white rounded-lg">
            Search
          </button>
        </div>

        <div className="col-span-2">Google Map</div>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
