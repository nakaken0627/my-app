"use client";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";

type ShowSearchResult = {
  show: {
    id: number;
    name: string;
    image: {
      original: string;
    };
  };
};

export default function SearchFunc() {
  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState<ShowSearchResult[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTermInput = inputText;
    const config = {
      params: {
        q: searchTermInput,
      },
    };
    try {
      const res = await axios.get(
        "https://api.tvmaze.com/search/shows",
        config
      );
      setSearchResults(res.data);
    } catch (err) {
      console.log("APIエラー", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          placeholder="番組名"
          onChange={handleChange}
        />
        <button type="submit">送信</button>
      </form>
      <ul>
        {searchResults.map((item) => (
          <li key={item.show.id}>
            <Image
              src={item.show.image.original}
              alt="item.show,name"
              width={200}
              height={300}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
