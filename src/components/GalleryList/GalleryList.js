import "./GalleryList.scss";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(data) {
  const GList = data.data;
  // const galleryItems = page.;
  return GList.length === 3 ? (
    <div className="gallery-list">
      {GList.map((item, index) => {
        return <GalleryItem key={index} data={item} />;
      })}
    </div>
  ) : (
    <div className="gallery-list have-reel">
      <div className="post">
        {GList.map((item, index) => {
          if (item !== GList[GList.length - 1]) {
            return <GalleryItem key={index} data={item} />;
          }
        })}
      </div>
      <div className="reel">
        {GList.map((item, index) => {
          return <GalleryItem key={index} data={item} />;
        }).slice(-1)}
      </div>
    </div>
  );
}

export default GalleryList;
