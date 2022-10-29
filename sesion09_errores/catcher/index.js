const queryCatcher =
  (fn) =>
  async (...args) => {
    try {
      const result = await fn(...args);
      return {
        ok: true,
      };
    } catch (error) {
      console.error( error.message);

      return {
        ok: false,
      };
    }
  };

module.exports = {
  queryCatcher,
};