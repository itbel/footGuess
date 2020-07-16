import Axios from "axios";
import FetchAll from "../functional/FetchAllTournaments";
import FetchOwned from "../functional/FetchOwnedTournaments";
import FetchJoinedTournaments from "../functional/FetchJoinedTournaments";

const RemoveTournament = (tourid, state, dispatch) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const config = {
    headers: { "auth-token": `${localStorage.getItem("jwtToken")}` },
  };
  Axios.delete(`${BASE_URL}/api/tournaments/manage/${tourid}`, config, {
    timeout: 2000,
  })
    .then((response) => {
      FetchJoinedTournaments(state, dispatch);
      FetchAll(dispatch);
      FetchOwned(state, dispatch);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default RemoveTournament;