import { useSelector } from 'react-redux';

export const Translator = (firstString, secondString) => {
  const { language } = useSelector((state) => state.language);
  if (!firstString && !secondString) {
    throw Error('Both language equivalents are required');
  }
  return language === 'hun' ? firstString : secondString;
};
