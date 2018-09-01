export const signup = (user) => {
  return $.ajax({
    type: 'post',
    url: 'users',
    data: user
  });
};
