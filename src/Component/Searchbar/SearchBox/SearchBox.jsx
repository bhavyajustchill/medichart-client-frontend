// https://bbbootstrap.com/snippets/bootstrap-task-list-search-70202001
import { useState, useRef } from 'react';
import './SearchBox.css'
import SuggestionBox from '../SuggestionBox/SuggestionBox'


const SearchBox = ({ Svg, placeholder, name, data, suggestionBox, setSuggestionBox }) => {

  const [suggestions, setSuggestions] = useState(data)
  const search_input = useRef(null)

  const handleSuggestionClick = (item) => {
    console.log(item)
    setSuggestionBox('')
    search_input.current.value = item?.heading
  }

  return (
    <>
      <div className='w-100 d-grid flex-column position-relative'>
        <div className="search-container mx-auto">
          
          
        </div>
        <div className={`${(suggestionBox !== name && 'd-none ') || ''} p-3 search-suggestion-container z-3`}>
          <div className='position-relative '>
            {
              suggestions?.length > 0 ?
                suggestions?.map((item, index) => {
                  let data = {}
                  if (item?.heading) data.heading = item?.heading
                  if (item?.description) data.description = item?.description
                  if (item?.left) data.left = item?.left
                  if (item?.right) data.right = item?.right
                  return (
                    <SuggestionBox key={index} data={data}
                      handleClick={handleSuggestionClick} />
                  )
                })
                :
                <SuggestionBox data={{
                  heading: 'No results found',
                }} />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;