const cookie = {
  set(key: string, value: string, expires?: number): void {
    let cookieString = `${key}=${value}`;
    if (expires !== undefined) {
      const expiresDate = new Date();
      cookieString = `${cookieString}; expires=${expiresDate.setDate(
        expiresDate.getDate() + expires,
      )}`;
    }

    document.cookie = cookieString;
  },

  get(key: string): string | undefined {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(key))
      ?.split('=')[1];
  },

  remove(key: string): void {
    this.set(key, '', -1);
  },
};

export default cookie;
