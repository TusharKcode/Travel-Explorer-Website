import React from 'react'
import { useEffect } from 'react';

export default function TestUnsplash() {
    const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    useEffect(() => {
        const fetchImages = async () =>{
            try {
                const response = await fetch(`https://api.unsplash.com/search/photos?query=mountains&client_id=${accessKey}`);
                const data = await response.json();
                console.log("Unsplash API results: ", data.results);
            } catch (error) {
                console.error("Error fetching from Unsplash: ", error);
            }
        };
        fetchImages();
    }, [accessKey]);

  return (
    <h2>Check the console for Unsplash API results</h2>
  )
}
