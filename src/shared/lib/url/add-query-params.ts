export const getQueryParams = (params: Record<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
};

export const addQueryParams = (params: Record<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params));
};
