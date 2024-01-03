export const readLine = () => {
  return new Promise<string>((resolve, reject) => {
    process.stdin.setEncoding("utf8");

    process.stdin.once("data", (data) => {
      process.stdin.removeAllListeners();
      resolve(data.toString().replaceAll("\n", ""));
    });

    process.stdin.once("error", (err) => {
      process.stdin.removeAllListeners();
      reject(err);
    });
  });
};
