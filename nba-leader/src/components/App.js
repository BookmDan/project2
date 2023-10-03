import '../App.css';
import React, { useState, useEffect  } from "react";


function App() {
  const [profilePic, setProfilePic] = useState([]);

  useEffect(() => {
    fetchProfilePic();
  }, []);

  const fetchProfilePic = async () => {
    try {
      const response = await fetch("http://localhost:4000/questions");
      if (!response.ok) {
        throw new Error("Failed to fetch questions.");
      }
      const data = await response.json();
  
      // Assuming 'images' is an array of image URLs in your db.json
      const imagesResponse = await fetch("http://localhost:4000/images");
      if (!imagesResponse.ok) {
        throw new Error("Failed to fetch images.");
      }
      const imagesData = await imagesResponse.json();
  
      // Assuming each player has a corresponding image URL based on their ID
      const playersWithImages = data.map(player => {
        const image = imagesData.find(img => img.id === player.id);
        return {
          ...player,
          imageUrl: image ? image.image : 'default-image-url.jpg'
        }
      });
  
      setProfilePic(playersWithImages);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;

//changes