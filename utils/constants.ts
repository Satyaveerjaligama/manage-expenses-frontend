export const PRODUCT_NAME = "Manage Expenses";

export const EXPENSE_MODAL_TYPES = {
  edit: "edit",
  add: "add",
};

export const GROUP_MODAL_TYPES = {
  create: "create",
  join: "join",
  edit: "edit",
};

export const PAYMENT_METHODS_MENU_ITEMS = [
  {
    label: "Cash",
    value: "Cash",
  },
  {
    label: "Debit or Credit card",
    value: "Debit or Credit card",
  },
  {
    label: "UPI",
    value: "UPI",
  },
  {
    label: "Bank transfer",
    value: "Bank transfer",
  },
  {
    label: "Others",
    value: "Others",
  },
];

export const PAYMENT_METHODS_COLORS = {
  [PAYMENT_METHODS_MENU_ITEMS[0].value]: "cash-color",
  [PAYMENT_METHODS_MENU_ITEMS[1].value]: "card-color",
  [PAYMENT_METHODS_MENU_ITEMS[2].value]: "upi-color",
  [PAYMENT_METHODS_MENU_ITEMS[3].value]: "bank-color",
  [PAYMENT_METHODS_MENU_ITEMS[4].value]: "other-color",
};

export const PAYMENT_TYPE_MENU_ITEMS = [
  {
    label: "Advance",
    value: "Advance",
  },
  {
    label: "Full",
    value: "Full",
  },
];

export const EXPENSES_CATEGORY_MENU_ITEMS = [
  {
    label: "Shopping",
    value: "Shopping",
  },
  {
    label: "Food & Drinks",
    value: "Food & Drinks",
  },
  {
    label: "Vehicle",
    value: "Vehicle",
  },
  {
    label: "Entertainment",
    value: "Entertainment",
  },
  {
    label: "Investments",
    value: "Investments",
  },
  {
    label: "Subscriptions",
    value: "Subscriptions",
  },
  {
    label: "Transportation",
    value: "Transportation",
  },
  {
    label: "Housing",
    value: "Housing",
  },
  {
    label: "Others",
    value: "others",
  },
];

export const KEYS_OF_CENTRAL_DATA_SLICE = {
  userName: "userName",
  emailOrPhoneNumber: "emailOrPhoneNumber",
  password: "password",
  confirmPassword: "confirmPassword",
  userId: "userId",
};

export const KEYS_OF_EXPENSE_SLICE = {
  expenseDetails: "expenseDetails",
  expensesList: "expensesList",
};

export const BUTTON_TYPES = {
  add: "add",
  update: "update",
  delete: "delete",
  create: "create",
  join: "join",
};

export const KEYS_OF_GROUP_EXPENSE_SLICE = {
  groupName: "groupName",
  groupCode: "groupCode",
  groupsList: "groupsList",
  groupJoiningRequestsList: "groupJoiningRequestsList",
  groupExpensesList: "groupExpensesList",
};

export const KEYS_OF_ERROR_SLICE = {
  loginErrors: "loginErrors",
  signupErrors: "signupErrors",
  expenseErrors: "expenseErrors",
  createGroupErrors: "createGroupErrors",
  joinGroupErrors: "joinGroupErrors",
  addAmountErrors: "addAmountErrors",
};

export const KEYS_OF_UTILITY_SLICE = {
  snackBar: "snackBar",
};

export const REGULAR_EXPRESSIONS = {
  LETTERS_AND_NUMBERS: /^[a-zA-Z0-9]+( [a-zA-Z0-9]+)*$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_NUMBER: /^[5-9][0-9]{9}$/,
  NUMBERS: /^[0-9]+$/,
};

export const API_END_POINTS = {
  LOGIN: "login",
  SIGNUP: "signup",
  GET_USER_EXPENSES: "user-expenses",
  GET_USER_GROUPS: "user-groups",
  ADD_EXPENSE: "add-expense",
  DELETE_EXPENSE: "delete-expense",
  DELETE_GROUP: "delete-group",
  UPDATE_EXPENSE: "update-expense",
  UPDATE_GROUP: "update-group",
  CREATE_ACCOUNT: "create-group",
  JOIN_GROUP: "join-group",
  FETCH_JOIN_REQUESTS: "fetch-join-requests",
  PROCESS_JOIN_REQUESTS: "process-join-request",
};
