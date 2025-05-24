import { FiEdit2 } from "react-icons/fi";
import MainLogo from "./MainLogo";

const ProfileSelectorHeader = () => {
    return (
        <div className="flex justify-between items-center w-full  mb-10">
            <div className="flex-1 flex justify-start	">
                <MainLogo height={48} width={0} />
            </div>
            <div className="flex-1 flex justify-end">
                <button className="flex justify-items-end text-sm hover:underline">
                    <FiEdit2 className="mr-1" />
                    แก้ไข
                </button>
            </div>
        </div>
    )
}
export default ProfileSelectorHeader;