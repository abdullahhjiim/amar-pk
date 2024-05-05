import React from "react";

const MatrimonialPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Banner */}
      <div className="bg-blue-500 py-4 text-white text-center">
        <h1 className="text-3xl font-semibold">Matrimonial Page</h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-800">
            Welcome to our matrimonial page. Find your life partner here. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Officiis, amet
            incidunt rem adipisci quis eius, nulla explicabo deleniti fugit
            excepturi veniam voluptatum autem fugiat temporibus laborum ipsam
            vero provident sed illum sapiente sit! Quia sint ea commodi nostrum
            quasi itaque quam ratione, et eum iusto inventore, dolorem voluptate
            officiis! Est pariatur, ipsa neque quo ipsum odit eos incidunt quos
            vero dolores amet nulla, enim atque cumque sapiente corporis, rerum
            doloribus nisi hic impedit! Quo quis neque tempora laudantium ipsam
            doloribus repellat eligendi nihil quos, sed delectus libero
            architecto quisquam unde quibusdam incidunt eius officiis impedit
            earum totam laborum. Temporibus magni consectetur vitae quas, velit
            doloremque soluta nulla ea assumenda eaque sapiente obcaecati
            accusantium dignissimos optio dolore architecto maiores, deserunt
            recusandae eos eius similique. Nulla libero eos accusantium vel fuga
            nisi ipsam asperiores molestias exercitationem laboriosam quae, est
            quasi cumque, qui minima! A laborum ullam fugit accusamus ipsa.
            Voluptas unde cumque commodi. Laborum repellendus saepe accusamus
            perspiciatis alias odit molestiae natus veritatis dolores, sapiente
            fuga beatae harum delectus magni architecto, consectetur fugit dolor
            labore nesciunt provident nemo minima qui. Possimus ipsam corporis
            blanditiis perferendis odit. Deleniti, earum, sed odio saepe, vero
            placeat dolores illo suscipit aut nam ea quae quis id.
          </p>
        </div>

        {/* Media Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4">Marriage Media</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Add media items here */}
            <div className="bg-gray-200 p-4">Media 1</div>
            <div className="bg-gray-200 p-4">Media 2</div>
            <div className="bg-gray-200 p-4">Media 3</div>
            <div className="bg-gray-200 p-4">Media 4</div>
            {/* Add more media items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatrimonialPage;
