import { Link } from 'react-router-dom';
import { useTesthook } from '../hooks/useTesthook';

export default function FooScreen() {
  const tables = useTesthook();
  console.log(tables);
  
  return (
    <div>
      <h1>fooScreen</h1>
      <button>
      <Link to="/page2">Page2</Link>
      </button>
    <div>
      {
        tables.map((table, index) => (
          <div key={table.id}>
            <h2>{table.numero}</h2>
          </div> 
        ))
      }
    </div>

    </div>
  )
}
