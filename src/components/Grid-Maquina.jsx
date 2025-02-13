import react from "react";
import Maquina from "./maquina";

const Grid = () => {
    return (
        <div className="container text-center">
        <div className="row row-cols-2">
            <div className="col">
                <h2>Maquina 1</h2>
                <Maquina />
            </div>
            <div className="col">
                <h2>Maquina 2</h2>
                <Maquina />
            </div>
            <div className="col">
                <h2>Maquina 3</h2>
                <Maquina />
            </div>
            <div className="col">
                <h2>Maquina 4</h2>
                <Maquina />
            </div>
        </div>
      </div> 

    )
}

export default Grid;