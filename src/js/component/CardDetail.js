import React, {useContext} from "react";
import { useParams} from "react-router-dom"
import { Context } from "../store/appContext.js";


export const CardDetail = (props) => {

    const {sectionType, cardKey} = useParams()
    const {store, actions} = useContext(Context)


    const sectionTypeForDetailDisplay = sectionType === "Characters" ? store.characters : store.planets;

    const cardToDisplay = sectionTypeForDetailDisplay.find(card => cardKey === card.name);
    
    const attributesToDisplay = cardToDisplay.attributes.map((attribute => {
        return <div className="col text-danger ps-4"><strong>{attribute.label}</strong><br/>{attribute.value} </div>
    })
    )

  return (
    <div>
        <div className="container">
            <div className="row row-cols-2 m-5">
                <div className="col">
                    <img
                        src={cardToDisplay.img}
                        className="img-fluid rounded-start"/>
                </div>
                <div className="col">
                    <h5 >{cardToDisplay.name}</h5>
                    <p >{cardToDisplay.description}</p>
                </div>
            </div>
            <hr className="bg-danger"></hr>
            <br></br>
            <div className="row row-cols-6">
                {attributesToDisplay}     
            </div>
        </div>
    </div>
    );
};
