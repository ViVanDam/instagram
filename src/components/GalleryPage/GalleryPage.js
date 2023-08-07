import "./GalleryPage.scss";
import GalleryList from "../GalleryList/GalleryList";

function GalleryPage(data) {
  const page = data.data;
  const galleryItems = page.items;
  return (
    <div className={"page page-" + page.page}>
      {galleryItems.map((item, index) => {
        return <GalleryList key={index} data={item} />;
      })}
    </div>
  );
}

export default GalleryPage;
