export function formatString(string) {
  let result = string.replace("auth/", "");
  result = result.replace(/-/g, " ");
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}
