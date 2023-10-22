import { RegularList } from './RegularList.jsx';
import { NumberedList } from './NumberedList';

import { SmallPersonList } from './people/SmallPersonList.jsx';
import { LargePersonList } from './people/LargePersonList';
import { SmallProductList } from './product/SmallProductList.jsx';
import { LargeProductList } from './product/LargeProductList.jsx';

import { people, products } from './data.js';

import './App.css';


function App () {
  return (
    <>
      {/* <RegularList
        items={ people }
        resourceName={ "people" }
        itemComponent={ SmallPersonList } />

      <RegularList
        items={ products }
        resourceName={ "product" }
        itemComponent={ SmallProductList } /> */}
      <NumberedList
        items={ products }
        resourceName={ "product" }
        itemComponent={ LargeProductList } />
      <NumberedList
        items={ people }
        resourceName={ "people" }
        itemComponent={ LargePersonList } />
    </>
  );
}

export default App;
