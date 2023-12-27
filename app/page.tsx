"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import PlaceList from "./components/PlaceList";
import { useEffect, useState } from "react";

export default function Home() {
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    getPlaceList();
  }, []);

  const getPlaceList = async () => {
    const result = await fetch("/api/google-place-api?q=Hotels In NewYork");
    const data = await result.json();

    setPlaceList(data.resp.results);
  };

  return (
    <div>
      <Hero />

      {placeList? <PlaceList placeList={placeList}/>:null}
    </div>
  );
}
