const { Client } = require("discord-rpc");
const RPCClient = new Client({ transport: "ipc" });

require("dotenv").config();

RPCClient.on("ready", () => {
    RPCClient.request("SET_ACTIVITY", {
        pid: process.pid,
        activity: {
            details: "Some details",
            state: "A state",
            assets: {
                large_image: "Large image name",
                large_text: "Large image text"
            },
            buttons: [
                { label: "Button label 1", url: "Button link 1" },
                { label: "Button label 2", url: "Button link 2" }
            ]
        }
    });

    console.log("[ RPC Client ] Discord Rich Presence Client is now active and online.");
}); 

RPCClient.login({   
    clientId: process.env.CLIENT_ID
}); 