function objectToString(queryObject) {
  const query = [];

  Object.keys(queryObject).forEach((key) => {
    query.push(
      `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`,
    );
  });

  return query.join('&');
}

export default { objectToString };
