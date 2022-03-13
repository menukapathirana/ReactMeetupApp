import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import {useContext} from 'react';
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const FavoriteCtx = useContext(FavoritesContext);
  
  const itemIsFavorite = FavoriteCtx.itemIsFavorite(props.id);


  function toggleFavoriteStatusHander(){
    if(itemIsFavorite){
      FavoriteCtx.removeFavorite(props.id)
    } else{
      FavoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        adddress: props.address,
      });
    }
  }


  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHander}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
