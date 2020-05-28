import obyte from "obyte";
import config from "../config";
import { store } from "../index";
import { getData } from "../store/actions/data/getData";

const client: obyte.Client = new obyte.Client(
  `wss://obyte.org/bb${config.TESTNET ? "-test" : ""}`,
  {
    testnet: config.TESTNET,
    reconnect: true,
  }
);
console.log(client);
client.onConnect(() => {
  store.dispatch(openConnection());

  store.dispatch(getData());
  const heartbeat = setInterval(function () {
    client?.api.heartbeat();
  }, 10 * 1000);

  client?.client?.ws?.addEventListener("close", () => {
    store.dispatch(closeConnection());
    clearInterval(heartbeat);
  });
});

const openConnection = () => ({ type: "OPEN_CONNECTION" });
const closeConnection = () => ({ type: "CLOSE_CONNECTION" });

export default client;
