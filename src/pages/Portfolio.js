import { useEffect, useState } from "react";
const Portfolio = () => {
    //on déclare la variable joke ET sa fonction/méthode setJoke
    //Les deux en même temps grâce au hook useState ()
    let [joke, setJoke] = useState('');

    const loadJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(data => {
                setJoke(data.value);
                console.log(data);
            })
    }

    useEffect(()=> loadJoke(), [] );

    return (
        <section>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col">
                        <h1> Portfolio </h1>
                        <button onClick={loadJoke}> Chuck Norris ? </button>
                        <p>{joke}</p></div>

                </div>
                <div className="row">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu turpis imperdiet, porta neque sit amet, maximus ante. Nulla dignissim orci eu tempus hendrerit. Sed.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio