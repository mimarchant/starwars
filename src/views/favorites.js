import { useContext } from 'react';
import Favorites from '../components/favorites';
import { Context } from '../store/appContext';

const Favorite = ()=>{
    const { store, actions } = useContext(Context);
    return(
        <>
            
        <Favorites />
        </>
    )
}

export default Favorite;