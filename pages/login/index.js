export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-0">
      <div className="flex flex-col max-w-[700px] w-full bg-white rounded-2xl p-14">
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm font-semibold mb-2">Email</label>
          <input type="text" className="border border-gray-1 rounded p-2 outline-0 " />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="" className="text-sm font-semibold mb-2">Password</label>
          <input type="text" className="border border-gray-1 rounded p-2 outline-0 " />
        </div>
        <button className="mt-4 rounded bg-green-4 py-2 text-white font-bold">LOGIN</button>
      </div>
    </div>
  );
}
