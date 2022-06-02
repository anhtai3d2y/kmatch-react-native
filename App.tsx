import {Logs} from "expo";
import Routes from "./src/navigation";

Logs.enableExpoCliLogging();

export default function App() {
    return <Routes />;
}
