import type { Profile } from '../data/profiles';

interface Props {
    profile: Profile;
}

const ProfileCard = ({ profile }: Props) => {
    return (
        <div className="size-32 flex flex-col">
            <img src={profile.avatar} alt={profile.name} />
            <span className="mt-5">{profile.name}</span>
        </div>
    )
}
export default ProfileCard;