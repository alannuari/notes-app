const initialData = JSON.parse(localStorage.getItem('NOTES_APP')) ? JSON.parse(localStorage.getItem('NOTES_APP')) : [];

const getInitialData = () => (
  initialData
);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
  