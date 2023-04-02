const SortTools = () => {
  return (
    <div className="w-full mt-10">
      <div className="m-w-[1200px] flex justify-center items-start gap-12 py-10">
        <div className="w-[7rem] ">
          <label
            for="price"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <select
         
            id="price"
            class="bg-gray-50 border  tracking-widest border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="Price">Price</option>
            <option value={100}>0-100</option>
            <option value={499}>101-499</option>
            <option value={1200}>500-1200</option>
            <option value={1201}>1200+</option>
          </select>
        </div>
        <div className="w-[7rem] ">
          <label
            for="color"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <select
            id="color"
            class="bg-gray-50 border tracking-widest border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="Color">Color</option>
            <option value='yellow'>Yellow</option>
            <option value='oragne'>Orange</option>
            <option value='red'>Red</option>
            <option value='blue'>Blue</option>
            <option value='white'>White</option>
            <option value='dark'>Dark</option>
          </select>
        </div>
        <div className="w-[7rem] ">
          <label
            for="review"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <select
            id="review"
            class="bg-gray-50 border tracking-widest border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="Price">Review</option>
            <option value={2.5}>1.0-2.5 </option>
            <option value={3.3}>2.6-3.4</option>
            <option value={4.2}>3.5-4.2</option>
            <option value={4.3}>4.3+</option>
        
          </select>
        </div>
        <div className="w-[7rem] ">
          <label
            for="material"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <select
            id="material"
            class="bg-gray-50 border tracking-widest border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="Material">Material</option>
            <option value='steal'>Steel </option>
            <option value='plastic'>Plastic</option>
            <option value='wood'>Wood</option>
           
        
          </select>
        </div>

        <div className="w-[7rem] ">
          <label
            for="sortby"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <select
            id="sortby"
            class=" border-2 tracking-widest border-gray-500 text-[#EDE9E8] bg-gray-500 text-sm rounded-full block w-full p-2.5"
          >
            <option selected="SortBy">Sort By</option>
            <option value='steal'>Lowest </option>
            <option value='plastic'>Highest</option>
            <option value='wood'>Most Popular </option>
           
        
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortTools;
