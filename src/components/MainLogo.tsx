import { logos } from '../data/logo';

interface MainLogoProps {
    width: number;
    height: number;
}
const MainLogo = ({ height }: MainLogoProps) => {
    const mainLogo = logos[0];
    return (
        <img
            src={mainLogo.avatar}
            alt={mainLogo.name}
            style={{ height: height }}
        />
    );
};

export default MainLogo;