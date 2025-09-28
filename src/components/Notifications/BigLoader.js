import { PropagateLoader } from 'react-spinners';

function BigLoader() {
  return (
    <div className="w-full py-4 px-2 flex-colo h-screen">
      <PropagateLoader color="#0f68db" />
    </div>
  );
}

export default BigLoader;
