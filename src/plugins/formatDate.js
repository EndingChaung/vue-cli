export default {
  dateString(date) {
    return (new Date(date)).toLocaleDateString().replace(/\//g, '-');
  },
  dateTimeString(date) {
    return (new Date(date)).toLocaleString().replace(/\//g, '-');
  },
  timeString(date) {
    return (new Date(date)).toLocaleTimeString().replace(/\//g, '-');
  },
};
