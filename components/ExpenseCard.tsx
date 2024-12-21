import { Card, CardContent, IconButton } from "@mui/material";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { EXPENSE_MODAL_TYPES, PAYMENT_METHODS_COLORS } from "@/utils/constants";

interface ExpenseCardProps {
  label: string;
  amount: number | string;
  date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleOpen: any;
  paymentMethod: string;
}

const ExpenseCard = (props: ExpenseCardProps) => {
  const { label, amount, date, handleOpen, paymentMethod } = props;
  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center">
          <p className="!font-bold !text-lg">{label}</p>
          <IconButton onClick={() => handleOpen(EXPENSE_MODAL_TYPES.edit)}>
            <MoreVertRoundedIcon />
          </IconButton>
        </div>
        <p>
          &#8377; {amount}
          <span
            className={`px-2 ml-2 ${PAYMENT_METHODS_COLORS[paymentMethod]}`}
            style={{ border: "1px solid", borderRadius: "5px" }}
          >
            {paymentMethod}
          </span>
        </p>
        <p>{date}</p>
      </CardContent>
    </Card>
  );
};

export default ExpenseCard;
