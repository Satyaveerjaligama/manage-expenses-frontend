import { Card, CardContent, IconButton, Typography } from "@mui/material";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { EXPENSE_MODAL_TYPES } from "@/utils/constants";

interface PersonalExpenseCardProps {
  label: string;
  amount: number | string;
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleOpen: any;
}

const PersonalExpenseCard = (props: PersonalExpenseCardProps) => {
  const { label, amount, date, handleOpen } = props;
  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center">
          <Typography>{label}</Typography>
          <IconButton onClick={() => handleOpen(EXPENSE_MODAL_TYPES.edit)}>
            <MoreVertRoundedIcon />
          </IconButton>
        </div>
        <Typography>&#8377; {amount}</Typography>
        <Typography>{date}</Typography>
      </CardContent>
    </Card>
  );
};

export default PersonalExpenseCard;
