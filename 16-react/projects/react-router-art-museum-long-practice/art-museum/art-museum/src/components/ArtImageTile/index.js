import { Link } from "react-router-dom";

function ArtImageTile({ art, gallery }) {

    // console.log(art.primaryimageurl);
    return (
        <Link to={`/galleries/${gallery.id}/art/${art.id}`}>
            <img src={art.primaryimageurl} art={gallery.name} />
        </Link>
    )
}

export default ArtImageTile;
