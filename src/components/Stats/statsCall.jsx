import axios from "axios";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import data from "./data";
const StatsCall = ({}) => {
  const [dailyStats, setDailyStats] = useState();

  const pullStats = async() => {
    const config = {
      method: 'get',
      url: 'http://localhost:8000/',
    };
     await axios(config)
    .then(function (response) {
      setDailyStats(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    }

    useEffect(() => {
      const interval = setInterval(() => {
        pullStats();
      }, 10000);
      return () => clearInterval(interval);
    },[])

return(
  
  <div className="flex flex-col md:flex-row items-center justify-center  ">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
  { dailyStats?.response.map((answer) => 
  <div class="mx-auto my-2 max-w-md rounded overflow-hidden shadow-md text-xs pl-10">
  <div class="flex bg-gray-200 px-2 py-2">
    <div class="w-5/12 text-gray-700 text-left text-red-700">Quarter: {answer.periods.current}</div>
    <div class="w-5/12 flex justify-end items-center">
      <p class="w-8 px-2 text-center">1</p>
      <p class="w-8 px-2 text-center">2</p>
      <p class="w-8 px-2 text-center">3</p>
      <p class="w-8 px-2 text-center">4</p>
    </div>
    <div class="w-1/6 text-gray-700 text-right">NBA</div>
  </div>

  <div class="flex px-2 py-2 items-center">
    <div class="w-5/12 flex">
        <div class="flex flex-col">
        <p class="text-sm font-bold">{answer.teams.home.name}</p>
      </div>
    </div>
    <div class="w-5/12 flex justify-end items-center">
      <p class="w-8 px-1 text-center">{answer.scores.home.linescore[0]}</p>
      <p class="w-8 px-1 text-center">{answer.scores.home.linescore[1]}</p>
      <p class="w-8 px-1 text-center">{answer.scores.home.linescore[2]}</p>
      <p class="w-8 px-1 text-center">{answer.scores.home.linescore[3]}</p>
    </div>
    <p class="w-1/6 text-lg sm:text-xl font-bold text-right">{answer.scores.home.points}</p>
  </div>

  <div class="flex px-2 py-2 items-center">
    <div class="w-5/12 flex">
      <div class="flex flex-col">
        <p class="text-sm font-bold">{answer.teams.visitors.name}</p>
      </div>
    </div>
    <div class="w-5/12 flex justify-end items-center">
      <p class="w-8 px-1 text-center">{answer.scores.visitors.linescore[0]}</p>
      <p class="w-8 px-1 text-center">{answer.scores.visitors.linescore[1]}</p>
      <p class="w-8 px-1 text-center">{answer.scores.visitors.linescore[2]}</p>
      <p class="w-8 px-1 text-center">{answer.scores.visitors.linescore[3]}</p>
    </div>
    <p class="w-1/6 text-lg sm:text-xl font-bold text-right">{answer.scores.visitors.points}</p>
  </div>

</div>
)}
</div>
</div>


)

};

export default StatsCall;