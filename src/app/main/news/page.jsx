"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewsPage = () => {
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url);
  };

  const newsArticles = [
    {
      id: 1,
      title: "Breaking News 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia sapien ac lacus malesuada...",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Latest Updates 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia sapien ac lacus malesuada...",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      title: "Latest Updates 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia sapien ac lacus malesuada...",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];
  const newsArticles2 = [
    {
      id: 1,
      title: "Breaking News 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Latest Updates 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      title: "Latest Updates 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      title: "Breaking News 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      title: "Latest Updates 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      title: "Latest Updates 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      id: 7,
      title: "Latest Updates 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      id: 8,
      title: "Latest Updates 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing ...",
      imageUrl: "https://via.placeholder.com/100",
    },
  ];

  const advertisements = [
    { id: 1, imageUrl: "https://via.placeholder.com/300x100" },
    { id: 2, imageUrl: "https://via.placeholder.com/300x100" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 ">
        <img
          src="https://via.placeholder.com/1200x200"
          alt="Banner"
          className="w-full"
        />
      </div>

      <div className="my-8">
        <marquee behavior="scroll" direction="left">
          <span className="text-xl font-semibold">পাকুন্দিয়া খবর </span>
          &nbsp;&nbsp;&nbsp;
          <span className="text-xl font-semibold">নারান্দি খবর </span>
          &nbsp;&nbsp;&nbsp;
        </marquee>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleClick(`/main/news/${article.id}`)}
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-4">
        {newsArticles2.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleClick(`/main/news/${article.id}`)}
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {advertisements.map((ad) => (
          <div key={ad.id}>
            <img
              src={ad.imageUrl}
              alt="Advertisement"
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
