import './App.css';
import Search from "./components/Search";
import useForecast from "./hooks/useForecast";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import Forecast from "./components/Forecast/Forecast";
import Welcome from "./components/Welcome";

import video from "./assets/explore-horizontal.mp4";

function App() {

    const {isError, isLoading, forecast, submitRequest} = useForecast();

    const onSubmit = value => {
        submitRequest(value);
    }

    const getContent = () => {
      if (isLoading)
          return <Loader/>
      else if(isError)
          return <Error message={isError}/>
      else if(forecast)
          return <Forecast forecast={forecast}/>
      else {
          return <Welcome />
      }
    }

    return (
        <div className="app">

            <video src={video} muted loop autoPlay className="video"></video>
            <div className="video_overlay"></div>

            <div className="wrapper">

                <Search onSubmit={onSubmit}/>

                <div className="main">
                    {
                        getContent()
                    }

                </div>
                <div className="footer">
                    <p>Made by <span>Nurmoohamedi</span></p>
                    <div>Copyright © 2022 </div>
                </div>
            </div>
        </div>
    );
}

export default App;
