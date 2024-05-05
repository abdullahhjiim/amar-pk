import ProfileCom from "@/components/SinglePage/ProfileCom";
import { Suspense } from "react";

const page = ({ params }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Suspense fallbak={<>loading...</>}>
          <ProfileCom id={params.id} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
