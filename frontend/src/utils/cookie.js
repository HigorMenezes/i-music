export function getCookie(name) {
  const re = new RegExp(`[; ]${name}=([^\\s;]*)`);
  const sMatch = ` ${document.cookie}`.match(re);
  if (name && sMatch) {
    return unescape(sMatch[1]);
  }
  return '';
}
