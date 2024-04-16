import axios from "axios";
import { useCallback } from "react";

const StatsCall = () => {
  //const [dailyStats, setDailyStats] = useState(null)

  const pullStats = useCallback(() => {
    const config = {
      method: 'get',
      url: 'http://localhost:8000/',
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  })


return(
  <>
    <button onClick={pullStats}>
      Test Stats
    </button>
  </>
)

};

export default StatsCall;