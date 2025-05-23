import { profiles } from "../data/profiles";
import ProfileCard from "./ProfileCard";

const ProflleSelector = () => {
    return (
        <div className="flex flex-col items-center">
        <h1 className="text-xl md:text-2xl font-semibold mb-10 text-center">
            เลือกโปรไฟล์ที่ต้องการรับชม
        </h1>
        <div className="flex flex-wrap gap-10 mt-10 justify-center align-center">
            {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
            ))}
        </div>
        </div>
    );
}

export default ProflleSelector;