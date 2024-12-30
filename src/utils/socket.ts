import io from "socket.io-client";
import { getCookie } from ".";

const token = getCookie('token');

export const socketConnection = io("http://localhost:5007", {
  auth: {
    token
    // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwOTcyYmMxLWVkMWUtNDUzNS04MTk3LTlhZTFlYjcwOWU4YyIsImlhdCI6MTczMDIxMzI3MCwiZXhwIjoxNzMwMjE2ODcwfQ.uVAz8VoNpC04vymGYMBn95dJG0IDdzo3AWI5TUj8Do0"
  },
  transports: ['websocket'],
});
