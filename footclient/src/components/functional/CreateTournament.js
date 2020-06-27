import Axios from "axios";
import FetchAll from "../functional/FetchAllTournaments";
import JoinTournament from "../functional/JoinTournament";

const CreateTournament = (tourname, userid, authState, dispatch) => {
  const config = {
    headers: { "auth-token": `${localStorage.getItem("jwtToken")}` },
  };
  return Axios.post(
    "http://localhost:3001/api/tournaments/manage",
    {
      name: tourname,
    },
    config,
    { timeout: 2000 }
  )
    .then((response) => {
      JoinTournament(response.data._id, authState, dispatch);
      FetchAll(dispatch);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default CreateTournament;
