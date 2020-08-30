const moment = require("moment");
const colors = require("colors");

module.exports = {
    ready: function(ctx) {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.green("[READY]")}: ${ctx}`);
    },
    
    mod: function(ctx) {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.bgBlue("[MOD]")}: ${ctx}`);
    },

    cmd: function(ctx) {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.bgBlack("[CMD]")}: ${ctx}`);
    },

    error: function(ctx) {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.bgRed("[ERROR]")}: ${ctx}`);
    },
      
    debug: function(ctx) { 
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.bgGreen("[DEBUG]")}: ${ctx}`);
    },

    disconnect: function(ctx) {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.bgRed("[DCNT]")}: ${ctx}`);
    },

    reconnect: function(ctx) {
        const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
        console.log(`${timestamp} ${colors.bgGreen("[RCNT]")}: ${ctx}`);
    }
};
  
  