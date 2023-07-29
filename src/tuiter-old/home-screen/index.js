import TuitsList from "../tuits";
import WhatsHappening from "../whats-happening";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";

function HomeScreen() {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList />
        </>
    );
}
export default HomeScreen;