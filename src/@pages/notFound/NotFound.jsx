import {ErrorImg} from '@assets'; 

export default function NotFound() {
  return <div className="mx-auto w-75">
    <img src={ErrorImg} className="w-100" />
  </div>;
}
