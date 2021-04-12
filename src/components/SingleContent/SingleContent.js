import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import WatchListControl from '../../Pages/WatchList/WatchListControl'

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  type,
}) => {
  return (
    <>
      <ContentModal media_type={media_type} id={id}>
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className="poster"
          src={poster ? `${img_300}${poster}` : unavailable}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date}</span>
        </span>
        {/* <WatchListControl type={type} id={id} /> */}
      </ContentModal>
      <WatchListControl id={id} type={type} />

    </>
  );
};

export default SingleContent;
