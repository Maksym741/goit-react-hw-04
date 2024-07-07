
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal"
import { fetchImages } from "../articles-api";
import { Toaster } from 'react-hot-toast';




export default function App(){
const [images, setImages] = useState([]);
const [error, setError] = useState(false);
const [query, setQuery] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

const handleSearchSubmit = async (newQuery) => {
  setQuery(newQuery);
  setCurrentPage(1);
  setImages([]);
}

const handleLoadMore = () => {
  setCurrentPage(prevPage => prevPage + 1)
}

useEffect(() => {
  async function getImages() {
    setIsLoading(true);
    setError(false);
    try {
      if(query.trim() !== "") {
        const data = await fetchImages(query, currentPage)
        setImages(prevImages => [...prevImages, ...data]);
      }
    } catch (error) {
      setError(error.message)
    } finally{
      setIsLoading(false);
    }
    }

  getImages();
}, [query, currentPage]);

const openModal = (imageUrl) => {
  setSelectedImage(imageUrl);
}
const closeModal = () => {
  setSelectedImage(null);
}

  return(
  <div>
    <SearchBar onSearch={handleSearchSubmit}/>
    <Toaster/>
    {images.length > 0 && <ImageGallery images={images} openModal={openModal}/>}
    {isLoading && <Loader/>}
    {error && <ErrorMessage message={error}/>}
    {images.length > 0 && !isLoading && (<LoadMoreBtn onClick={handleLoadMore}/>)}
    <ImageModal 
    isOpen={!!selectedImage} 
    onRequestClose={closeModal} 
    image={selectedImage}/>
  </div>
  )
}









