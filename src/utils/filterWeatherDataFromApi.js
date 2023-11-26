export const filterWeatherDataFromApi = (response) => {
  if (!response) return;
  const { id, weather, recommendation, synopsis } = response;
  const { temperature, description, kind } = weather;
  const { outfit, activity } = recommendation;
  return {
    id,
    kind,
    description,
    temperature,
    outfit,
    activity,
    synopsis
  }
}