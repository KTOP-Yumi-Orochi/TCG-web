import { getAddress } from "@ethersproject/address";
import { format } from "date-fns";

export const INPUT_DATE_FORMAT = "yyyy-MM-dd";

export function shortenString(string, length) {
  if (!string) return "";
  if (length < 5) return string;
  if (string.length <= length) return string;
  return (
    string.slice(0, 4) +
    "..." +
    string.slice(string.length - length + 5, string.length)
  );
}
export function shortenAddress(address, chars = 4) {
  try {
    const parsed = getAddress(address);
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(
      42 - chars
    )}`;
  } catch (error) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
}
export default function template(templateString, templateVariables) {
  return templateString.replace(/{{(.*?)}}/g, (_, g) => templateVariables[g]);
}

export function formatDateInput(date) {
  return format(date, INPUT_DATE_FORMAT);
}
