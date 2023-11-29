import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        src={src}
        alt="Avatar"
        className="rounded-full border-[1px] border-slate-400"
        height={32}
        width={32}
      />
    );
  }

  return <FaUserCircle size={24} />;
};

export default Avatar;
