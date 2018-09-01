export const login = (user) => {
  return $.ajax({
      type: 'POST',
      url: 'users/sign_in',
      data: user
  });
};

export const logout = () => {
  return $.ajax({
      type: 'DELETE',
      url: 'users/sign_out',
  });
};
