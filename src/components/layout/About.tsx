import { MapPin, School } from "lucide-react";
import profile from "@/data/profile.json";
import ScrambleText from "../ui/ScrambleText";

function About() {
  return (
    <section>
      <h1 className="mb-4">
        <span className="inline-block relative">
          <span className="invisible">{profile.name}</span>
          <span className="absolute left-0 top-0">
            <ScrambleText text={profile.name} />
          </span>
        </span>
      </h1>
      <div className="mb-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-muted">
          <MapPin />
          <span>{profile.address}</span>
        </div>
        <div className="flex items-center gap-2 text-muted">
          <School />
          <span>University of AMIKOM Yogyakarta</span>
        </div>
      </div>
      <p>{profile.bio}</p>
    </section>
  );
}

export default About;
