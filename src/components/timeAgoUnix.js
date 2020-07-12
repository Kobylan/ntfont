export const timeAgoUnix = (UNIX_timestamp) => {
  const seconds = Math.round(new Date().getTime() / 1000 - UNIX_timestamp);
  let interval = Math.floor(seconds / 31536000);
  let text;
  if (interval > 1) {
    return "больше года назад";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    if (interval === 1) {
      text = `1 месяц назад`;
    } else if (interval > 1 && interval < 5) {
      text = `${interval} месяца назад`;
    } else {
      text = `${interval} месяцев назад`;
    }
    return text;
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    if (interval === 1) {
      text = `1 день назад`;
    } else if (interval > 1 && interval < 5) {
      text = `${interval} дня назад`;
    } else {
      text = `${interval} дней назад`;
    }
    return text;
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    if (interval === 1) {
      text = `1 час назад`;
    } else if (interval > 1 && interval < 5) {
      text = `${interval} часа назад`;
    } else {
      text = `${interval} часов назад`;
    }
    return text;
  }

  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    if (interval === 1) {
      text = `1 минуту назад`;
    } else if (interval > 1 && interval < 5) {
      text = `${interval} минуты назад`;
    } else {
      text = `${interval} минут назад`;
    }
    return text;
  }
  if (seconds > 1) {
    if (seconds === 1) {
      text = `1 секунду назад`;
    } else if (seconds > 1 && seconds < 5) {
      text = `${seconds} секунды назад`;
    } else {
      text = `${seconds} секунд назад`;
    }
    return text;
  }
};
