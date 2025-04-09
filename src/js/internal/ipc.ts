// for net.Server, get ._handle

// const handleConversion = {
//   "net.Server": {
//     simultaneousAccepts: true,

//     send(message, server, options) {
//       return server._handle;
//     },

//     got(message, handle, emit) {
//       const server = new net.Server();
//       server.listen(handle, () => {
//         emit(server);
//       });
//     },
//   },

//   "net.Socket": {
//     send(message, socket, options) {
//       if (!socket._handle) return;

//       // If the socket was created by net.Server
//       if (socket.server) {
//         // The worker should keep track of the socket
//         message.key = socket.server._connectionKey;

//         const firstTime = !this[kChannelHandle].sockets.send[message.key];
//         const socketList = getSocketList("send", this, message.key);

//         // The server should no longer expose a .connection property
//         // and when asked to close it should query the socket status from
//         // the workers
//         if (firstTime) socket.server._setupWorker(socketList);

//         // Act like socket is detached
//         if (!options.keepOpen) socket.server._connections--;
//       }

//       const handle = socket._handle;

//       // Remove handle from socket object, it will be closed when the socket
//       // will be sent
//       if (!options.keepOpen) {
//         handle.onread = nop;
//         socket._handle = null;
//         socket.setTimeout(0);

//         if (freeParser === undefined) freeParser = require("_http_common").freeParser;
//         if (HTTPParser === undefined) HTTPParser = require("_http_common").HTTPParser;

//         // In case of an HTTP connection socket, release the associated
//         // resources
//         if (socket.parser && socket.parser instanceof HTTPParser) {
//           freeParser(socket.parser, null, socket);
//           if (socket._httpMessage) socket._httpMessage.detachSocket(socket);
//         }
//       }

//       return handle;
//     },

//     postSend(message, handle, options, callback, target) {
//       // Store the handle after successfully sending it, so it can be closed
//       // when the NODE_HANDLE_ACK is received. If the handle could not be sent,
//       // just close it.
//       if (handle && !options.keepOpen) {
//         if (target) {
//           // There can only be one _pendingMessage as passing handles are
//           // processed one at a time: handles are stored in _handleQueue while
//           // waiting for the NODE_HANDLE_ACK of the current passing handle.
//           assert(!target._pendingMessage);
//           target._pendingMessage = { callback, message, handle, options, retransmissions: 0 };
//         } else {
//           handle.close();
//         }
//       }
//     },

//     got(message, handle, emit) {
//       const socket = new net.Socket({
//         handle: handle,
//         readable: true,
//         writable: true,
//       });

//       // If the socket was created by net.Server we will track the socket
//       if (message.key) {
//         // Add socket to connections list
//         const socketList = getSocketList("got", this, message.key);
//         socketList.add({
//           socket: socket,
//         });
//       }

//       emit(socket);
//     },
//   },

//   "dgram.Native": {
//     simultaneousAccepts: false,

//     send(message, handle, options) {
//       return handle;
//     },

//     got(message, handle, emit) {
//       emit(handle);
//     },
//   },

//   "dgram.Socket": {
//     simultaneousAccepts: false,

//     send(message, socket, options) {
//       message.dgramType = socket.type;

//       return socket[kStateSymbol].handle;
//     },

//     got(message, handle, emit) {
//       const socket = new dgram.Socket(message.dgramType);

//       socket.bind(handle, () => {
//         emit(socket);
//       });
//     },
//   },
// };

function serialize() {}
function parse() {}

export { serialize, parse };
