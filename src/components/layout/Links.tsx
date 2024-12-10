import Heading from "../ui/Heading";
import { links } from "@/data/profile.json";
import Link from "../ui/Link";

function Links() {
  return (
    <div>
      <Heading as="h2">Links</Heading>
      <ul className="flex gap-4">
        <li>
          <Link href={`mailto:${links.mail}`}>Mail</Link>
        </li>
        <li>
          <Link href={links.github}>Github</Link>
        </li>
      </ul>
    </div>
  );
}

export default Links;
