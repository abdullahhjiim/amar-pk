import React from "react";

const NewsDetailsPage = ({ params }) => {
  const { id } = params;

  const newsDetails = {
    id: id,
    title: "Breaking News",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia sapien ac lacus malesuada... ",
    imageUrl: "https://via.placeholder.com/800x400",
    date: "May 10, 2022",
    author: "John Doe",
  };

  const relatedNews = [
    { id: 1, title: "Related News 1", date: "May 9, 2022" },
    { id: 2, title: "Related News 2", date: "May 8, 2022" },
    { id: 3, title: "Related News 1", date: "May 9, 2022" },
    { id: 4, title: "Related News 2", date: "May 8, 2022" },
    { id: 5, title: "Related News 1", date: "May 9, 2022" },
    { id: 7, title: "Related News 2", date: "May 8, 2022" },
    { id: 8, title: "Related News 1", date: "May 9, 2022" },
    { id: 9, title: "Related News 2", date: "May 8, 2022" },
    { id: 10, title: "Related News 1", date: "May 9, 2022" },
    { id: 11, title: "Related News 2", date: "May 8, 2022" },
    { id: 12, title: "Related News 1", date: "May 9, 2022" },
    { id: 13, title: "Related News 2", date: "May 8, 2022" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        {/* Main Content */}
        <div className="w-full">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={newsDetails.imageUrl}
              alt={newsDetails.title}
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <h1 className="text-3xl font-semibold mb-4">
                {newsDetails.title}
              </h1>
              <p className="text-gray-600 mb-2 font-semibold">
                Published on {newsDetails.date} by {newsDetails.author}
              </p>
              <p className="text-gray-800">
                {newsDetails.content} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dolore libero sint deserunt dolor, beatae id?
                Velit voluptatum repudiandae aspernatur tempore earum assumenda
                dolorem atque non ducimus tenetur saepe alias recusandae optio
                eius dignissimos quae corporis inventore, facere qui, aliquid
                molestias magni. Eaque est nam earum, eum soluta libero
                inventore nulla, iusto ipsum ab id sequi sit! Exercitationem
                assumenda natus tenetur. Explicabo deleniti aut voluptatibus
                nihil saepe quas aliquam inventore ex? Vitae fuga vel labore,
                nesciunt sunt blanditiis laborum accusamus inventore esse
                necessitatibus ex facilis dolore molestias ea tenetur unde autem
                culpa doloremque quidem maxime perferendis dignissimos veniam?
                Reprehenderit, quae quo assumenda earum autem necessitatibus eum
                accusantium itaque ullam molestiae quos fugiat libero mollitia
                voluptas cupiditate? Nesciunt iste eius cumque repellendus
                aspernatur dolore quia. Saepe aperiam aut qui natus. Cupiditate
                libero pariatur, aperiam saepe ad velit architecto facere
                aliquam hic unde nostrum! Non, quam quae velit deleniti
                reprehenderit reiciendis doloremque voluptatibus nam fugit
                corporis libero dolorum eos et praesentium quibusdam soluta
                commodi mollitia, assumenda doloribus necessitatibus aspernatur
                distinctio consequuntur suscipit! Ratione esse natus delectus
                officiis quis quia. Quo provident, est quibusdam eaque veritatis
                ad culpa exercitationem, ex sit harum recusandae. Ab, enim
                assumenda voluptatibus sapiente debitis illum perferendis
                ducimus laudantium. Necessitatibus exercitationem esse pariatur
                optio magnam animi soluta sunt, nam tempore ea quisquam officia
                velit ipsam eveniet eos fugiat suscipit quo? Corrupti dolor
                ratione, et necessitatibus, sapiente fugiat debitis quod sed
                sunt nulla aliquam repudiandae mollitia provident adipisci
                dolore minima at facere pariatur fugit ad recusandae nihil est?
                Sequi cum culpa laudantium vero, deserunt et tenetur dolorum
                corrupti, tempora eum quos at fugit asperiores quo ab impedit!
                Facere vitae in officia, velit sunt dicta voluptatum labore, nam
                eaque debitis eius! Id, consequuntur? Beatae a esse, distinctio
                dolorum, aliquid pariatur omnis voluptatum vel maiores voluptate
                sint quos praesentium expedita numquam error alias quidem
                ducimus mollitia obcaecati ullam deserunt consequuntur illum!
                Hic nam veritatis, exercitationem error perspiciatis voluptatum
                rem, at cum non eligendi voluptas facilis minima fuga, qui
                voluptatem totam quibusdam! Corrupti aliquid numquam placeat
                unde iusto, commodi quis ea cum odit deleniti eligendi,
                repudiandae sed! Tempora veritatis, adipisci porro nobis dolor
                delectus rem doloremque voluptas, cupiditate sequi sapiente
                commodi. Velit, distinctio neque aliquid magnam mollitia eius
                quo corrupti vel facilis molestiae quis soluta inventore dolore
                omnis repellat sapiente natus illo. Similique eligendi nihil est
                modi suscipit commodi rerum itaque inventore porro,
                necessitatibus tenetur, amet obcaecati dicta ex perferendis odio
                ratione? Nemo, cumque?
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-1/3 ml-8 flex flex-col gap-3">
          {relatedNews.map((article) => (
            <div className="bg-white rounded-lg shadow-md p-4" key={article.id}>
              <h2 className="text-xl font-semibold mb-4">Related News</h2>
              <ul>
                <li key={article.id} className="mb-2">
                  <a
                    href={`/main/news/${article.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {article.title}
                  </a>
                  <span className="text-gray-600 ml-2">{article.date}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
