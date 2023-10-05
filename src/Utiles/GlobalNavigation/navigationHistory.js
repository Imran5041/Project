const Navigator = {
  navigate: null,
  push: (page, ...rest) => {
    if (Navigator.navigate) {
      Navigator.navigate(page, ...rest);
    }
  },
};

export default Navigator;
