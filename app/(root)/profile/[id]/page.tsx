import { Header } from "@/components/Header";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="klevis25fj@gmail.com"
        title="Klevis"
        userImg="/assets/images/dummy.jpg"
      />
      <h1 className="text-2xl font-karla">USER ID:{id} </h1>
    </div>
  );
};

export default page;
