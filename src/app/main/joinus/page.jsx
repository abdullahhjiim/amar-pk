import Accordion from "@/components/common/Accordian";
import Card from "@/components/common/Card";
import Image from "next/image";
import joinus from "../../../assets/img/joinus.jpeg";

const steps = [
  {
    title: "প্রয়োজনীয় দক্ষতা অর্জন করুন",
    content:
      "ওয়েব উন্নয়নের জন্য প্রোগ্রামিং ভাষার জ্ঞান এবং রিয়েক্ট, অ্যাঙ্গুলার, বা ভিউ.জেএস এমন ফ্রেমওয়ার্কে দক্ষতা অর্জন করুন।",
  },
  {
    title: "পোর্টফোলিও তৈরি করুন",
    content:
      "আপনার ওয়েব উন্নয়ন প্রকল্পগুলির একটি তালিকা তৈরি করুন এবং আপনার দক্ষতা এবং দক্ষতার মাধ্যমে আপনার ক্ষমতা প্রদর্শন করুন।",
  },
  {
    title: "নেটওয়ার্ক করুন এবং আবেদন করুন",
    content:
      "উচ্চ প্রতিস্থানে পেয়ে যাওয়ার জন্য আপনার পোর্টফোলিও এবং সাক্ষাতকার প্রস্তুত করুন।",
  },
  {
    title: "ইন্টারভিউ প্রস্তুত হন",
    content:
      "প্রয়োজনীয় দক্ষতা সম্পর্কে আলোচনা করুন এবং আপনার পূর্ববর্তী প্রকল্পগুলি প্রদর্শন করুন।",
  },
];

const JoinUs = () => {
  return (
    <Card>
      <div className="flex justify-between gap-16">
        <div className="w-full mt-8">
          <Image src={joinus} alt="join with us pakundia image" />
        </div>
        <div className="w-full px-4 h-100 overflow-y-scroll">
          <p className="p-2 text-sm font-semibold mb-4">
            আমাদের দলে যোগদানের জন্য আপনাকে স্বাগতম! আমরা আশা করি আপনি আমাদের
            সাথে যোগাযোগ করতে ইচ্ছুক। আমাদের দলে যোগদান করে আপনি সব ধরনের
            কর্মসূচির অংশ হতে পারেন এবং আমরা সম্পর্কে নিজের দক্ষতা ও অভিজ্ঞতা
            অর্জন করার জন্য নিরলসভাবে প্রচেষ্টা করব। আবারও স্বাগতম! 🌟
          </p>
          {steps.map((item, i) => {
            return (
              <Accordion key={i} title={item.title} content={item.content} />
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default JoinUs;
