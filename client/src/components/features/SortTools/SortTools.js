const SortTools = () => {
  return (
    <div className="w-full mt-10">
      <div className="m-w-[1200px] flex justify-center items-center ">
        <div className="w-[6rem] ">
          <label
            for="price"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <select
            id="price"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="Price">Price</option>
            <option value={100}>0-100</option>
            <option value={499}>101-499</option>
            <option value={1200}>500-1200</option>
            <option value={1201}>1200+</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortTools;
