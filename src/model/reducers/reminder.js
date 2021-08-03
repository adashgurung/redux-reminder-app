import { ReminderActionType } from "../actions/reminder";

const initialState = {
  value: "Please wait 3 secs for the message to pop up",
  value2: "To stop reminder you must click it before 3 seconds",
};

var timer;

export const remindMe = (type) => (dispatch) => {
  timer = setTimeout(() => {
    alert("Remember to brush your teeth");
  }, 3000);
  console.log("activated");
};

export const stopRemind = (type) => (dispatch) => {
  clearTimeout(timer);
  console.log("stopped");
};

const reminderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReminderActionType.remind: {
      return {
        ...state,
        value: action.payload.value,
      };
    }

    case ReminderActionType.stopReminder: {
      return {
        ...state,
        value2: action.value,
      };
    }

    default: {
      return state;
    }
  }
};

export default reminderReducer;
