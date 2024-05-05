import Banner from "@/components/SinglePage/Banner";
import SingleContent from "@/components/SinglePage/SingleContent";
import React from "react";

const bloodDetailsPage = ({ params }) => {
  const { id } = params;

  const blood = {
    id: id,
    name: "Shop A",
    location: "Location A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla suscipit, maximus nunc vitae, rhoncus lacus. Sed vitae sapien ut orci suscipit accumsan.",
  };

  return (
    <div>
      <Banner
        title={blood.name}
        description={blood.location}
        cssClass="bg-[#007a99]"
      />
      <SingleContent title={`About  ${blood.name}`}>
        <p>
          {blood.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nam architecto adipisci sequi rem dignissimos harum ullam
          doloremque quasi, exercitationem vitae eius perspiciatis cupiditate
          cumque animi iusto consectetur aliquid molestias. Commodi ratione
          molestias qui praesentium odio ipsam, quo et sequi, molestiae
          inventore neque odit adipisci itaque tempore, recusandae esse
          excepturi aperiam exercitationem quia. Esse, distinctio quibusdam rem
          dolore explicabo repellendus nostrum praesentium optio ullam
          temporibus ipsum ducimus magni corporis beatae laudantium soluta
          officia consequatur atque voluptate sit iure ea natus. Esse,
          quibusdam? Quos optio, doloribus ipsam soluta labore dolorum iusto
          dolore. Autem aut soluta dicta quo neque esse sequi consequatur animi
          nesciunt accusantium ea, quas reiciendis qui dolore saepe ad ullam
          quasi delectus quia id ipsa! Consectetur dolore, dolorem maxime odio
          esse eius magni eaque nostrum optio sunt molestiae enim officia
          reiciendis nemo ut quam, atque illum iure necessitatibus architecto,
          natus quasi ab nam voluptate? Obcaecati incidunt est debitis, at optio
          corporis dicta culpa quia nihil ducimus quo perferendis ratione in ex
          animi mollitia iste earum aut officia minus vero veniam rem?
          Perspiciatis, eaque culpa, explicabo mollitia commodi vel tempora
          excepturi rem nostrum odit nulla nihil libero? Perspiciatis neque
          ullam vitae, asperiores omnis praesentium provident eveniet ut dicta
          voluptates libero quisquam.{" "}
        </p>
      </SingleContent>
    </div>
  );
};

export default bloodDetailsPage;
