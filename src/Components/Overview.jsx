import LineChart from "../utils/LineChart";

const Overview = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-auto px-5 ml-1 flex flex-col md:flex-row flex-wrap gap-4 justify-between">
        <div className="py-2 px-4 shadow-md border border-black grow md:border-none shadow-gray-500 bg-gray-50 text-slate-800 flex flex-col justify-center font-semibold text-xl rounded-xl">
          Total Students
          <br />8
        </div>
        <div className="py-2 px-4 shadow-md border border-black grow md:border-none shadow-gray-500 bg-gray-50 text-slate-800 flex flex-col justify-center font-semibold text-xl rounded-xl">
          Total Teachers
          <br />
          53
        </div>
        <div className="py-2 px-4 shadow-md border border-black grow md:border-none shadow-gray-500 bg-gray-50 text-slate-800 flex flex-col justify-center font-semibold text-xl rounded-xl">
          Total Students
          <br />8
        </div>
        <div className="py-2 px-4 shadow-md border border-black grow md:border-none shadow-gray-500 bg-gray-50 text-slate-800 flex flex-col justify-center font-semibold text-xl rounded-xl">
          Total Teachers
          <br />
          53
        </div>
      </div>
      <div className="grow w-auto mx-5 mt-5 rounded-lg bg-white">
        <LineChart />
      </div>

      <div className="m-5 mt-32 flex gap-8">
        <div className="h-80 grow border border-black rounded-xl"></div>
        <div className="h-80 grow border border-black rounded-xl"></div>
        <div className="h-80 grow border border-black rounded-xl"></div>
      </div>
    </div>
  );
};

export default Overview;
