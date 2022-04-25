import Love from "../component/Love";
import Button from "../component/button";
const Home = () => {
    return (
        <section>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col">
                        <h1> Home </h1>
                        <Button start={10}/> <Button start={0}/> <Button start={20}/>
                    </div>
                </div>
                <div className="row">
                    <Love name="coding" />
                    <Love name="Javascript" />
                    <Love name="Frontend" />
                    <p> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home