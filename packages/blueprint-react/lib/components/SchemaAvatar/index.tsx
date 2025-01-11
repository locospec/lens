import type { AvatarProps } from "../Avatar";
import { Avatar } from "../Avatar";
import { withSchema } from "../hoc/withSchema";

const SchemaAvatar = withSchema<AvatarProps>(Avatar, "avatar");

export { SchemaAvatar };
