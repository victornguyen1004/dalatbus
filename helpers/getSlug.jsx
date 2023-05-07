export default function getSlug(string) {
  const slug = string
    .toLowerCase()
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .normalize("NFD") // decompose diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove diacritical marks
    .replace(/[^\w\-]+/g, ""); // remove non-alphanumeric characters
  return slug;
}
