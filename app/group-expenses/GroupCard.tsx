import { Card, CardContent, IconButton } from "@mui/material";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { GROUP_MODAL_TYPES } from "@/utils/constants";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";

interface GroupCardProps {
  groupLabel: string;
  members: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleOpen: any;
}

const GroupCard = (props: GroupCardProps) => {
  const { groupLabel, members, handleOpen } = props;
  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center">
          <p className="!font-bold !text-lg">{groupLabel}</p>
          <IconButton onClick={() => handleOpen(GROUP_MODAL_TYPES.edit)}>
            <MoreVertRoundedIcon />
          </IconButton>
        </div>
        <div className="flex">
          <PeopleRoundedIcon />
          <p className="pl-2">{members} members</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GroupCard;
