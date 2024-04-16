import Caution from '../../images/icons/caution-sign.png'
import StatsCall from './statsCall';
const Stats = () => {
    return (
        <div id="Stats" className='bg-black w-full h-screen bg-cover bg-center flex-row flex'>
        <div className="flex pl-20 items-left justify-left text-white font-extrabold text-8xl">
            <h1>Live Stats <br/> Coming Soon ...</h1>
            <StatsCall/>

        </div>
        <div>
            <img src={Caution} className="justify-right items-end w-100 h-100 " />
        </div>
    </div>
    );
};

export default Stats;