import { useState } from "react";

interface sortByProps {
  onChangeSortBy: (sortBy: string) => void;
}

const SortBy: React.FC<sortByProps> = ({ onChangeSortBy }) => {
  const [sortByValue, setSortByValue] = useState('popularity.desc');

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSortByValue(selectedValue);
    onChangeSortBy(selectedValue);
}

return (
  <>
  <section className='sort-by-wrapper'>
  <select className='sort-by' data-tedid='sort' onChange={handleSortByChange} value={sortByValue}>
    <option value='popularity.desc'>Popularity</option>
    <option value='release_date.desc'>Release date</option>
    <option value='vote_average.desc'>Vote average</option>
    <option value='revenue.desc'>Revenue</option>
  </select> 
  </section>
  </>
);
};

export default SortBy;
