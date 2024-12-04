import {Link} from 'react-router-dom';

export default function Page404({}) {
  return (
    <>
      <div className="page">
        <Link to="/">Go Back</Link>
        <h1>404 </h1>
        <h2>PAGE NOT FOUND</h2>
      </div>
    </>
  );
}
