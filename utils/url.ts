export const url = {
  base: () => process.env.NEXT_PUBLIC_API_URL || "",
  api: (address: String) => {
    return url.base() + address;
  },
};
