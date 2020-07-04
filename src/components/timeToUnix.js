export const timeToUnix = (UNIX_timestamp) => {
  const seconds = new Date().getTime() / 1000 - UNIX_timestamp;
  let text;

  let interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    if (interval < 2) {
      text = `через 1 месяц `;
    } else if (interval > 1 && interval < 5) {
      text = `через ${interval} месяца`;
    } else {
      text = `через ${interval} месяцев`;
    }
    return text;
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    if (interval < 2) {
      text = `через 1 день`;
    } else if (interval > 1 && interval < 5) {
      text = `через ${interval} дня`;
    } else {
      text = `через ${interval} дней`;
    }
    return text;
  }

  return "сегодня";
};
