import Modal from '../components/modal';
import { useContext } from "react";
import { Context } from "../store/appContext";

const Characters = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-around">
                    <div className="btn btn-sm btn btn-secondary mb-2" id="prev" onClick={() => {
                        actions.getCharacters(store.characters.previous)
                    }}>
                        Prev
                                    </div>
                    <div className="btn btn-sm btn btn-secondary mb-2" id="next" onClick={() => {

                        actions.getCharacters(store.characters.next)
                    }}>
                        Next
                                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h1 className="title text-center mb-5">CHARACTER LIST</h1>
                <div className="row">
                    {!!store.characters &&
                        store.characters.results.map((character, index) => {
                            return (

                                <div className="col-md-4 col-sm-6 card-text mb-5">
                                    <div className="card mx-4" style={{ "width": "18rem" }}>
                                        <img src={`https://starwars-visualguide.com/assets/img/characters/${(index + 1) + store.c}.jpg`} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title card-text">{character.name}</h5>
                                            <p className="card-text">Eye color: {character.eye_color}</p>
                                            <p>Hair color: {character.hair_color}</p>
                                            <div>
                                                <a href="#" className="btn btn-primary" data-toggle="modal" data-target={"#exampleModal" + index}>Read more...</a>
                                                <Modal index={index} character={character} />
                                                <i onClick={() => { actions.addCharacter(character.name) }} className={store.favorites.includes(character.name)?"pintado fas fa-heart float-right pt-3":"far fa-heart float-right pt-3 heart"}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Characters;