export const postMessage = (message) => {
  return $.ajax({
    type: "post",
    url: "/api/messages",
    data: message
  });
};
