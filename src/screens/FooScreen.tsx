import { Link } from 'react-router-dom';
import { restaurantApi } from '../api/restaurantApi';
import SecureData from '../components/SecureData';
import Tables from '../components/Tables';
import { useFetchWithClasses } from '../hooks/useFetchWithClasses';
import { ITables } from '../interfaces/ITables';

export default function FooScreen() {
  // const tables = useTesthook();
  const {loading, data: tables, errorMessage, responseCode} = useFetchWithClasses<ITables[]>(restaurantApi);
  console.log(loading, tables, errorMessage, responseCode);

  return (
    <div>
      <h1>fooScreen</h1>
      <button>
      <Link to="/page2">Page2</Link>
      </button>
      <SecureData data={tables} loading={loading} errorMessage={errorMessage}>
        <Tables />
      </SecureData>
  
    </div>
  )
}
