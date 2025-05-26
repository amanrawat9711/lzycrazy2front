import Card from "../components/shared/Card";
import Crazyidea from "../components/shared/Crazyidea";

export default function Newsroom() {
  return (
    <div >
     <Crazyidea/>
       <h2 className="text-2xl font-semibold md:text-4xl text-center text-gray-900 px-4">
        "Your Dream, Our Desire"
      </h2>
      <Card/>
    </div>
  )
}