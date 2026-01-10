import { Empty as StyledEmpty } from "./Table";

function Empty({ resourceName }) {
  return <StyledEmpty>No {resourceName} could be found.</StyledEmpty>;
}

export default Empty;
