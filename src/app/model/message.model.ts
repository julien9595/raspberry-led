// https://raspberry-sigfox/messages?id=${id}&time=${time}&lat=${lat}&lng=${lng}&data=${data}
// /messages/${id}/
//       -- ${time}
//       -- ...

interface Message {
  id: string;
  time: Date;
  lat: string;
  lng: string;
  data: string;
}
