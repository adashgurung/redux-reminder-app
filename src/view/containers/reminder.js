import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { ReminderActionType } from "../../model/actions/reminder";
import { remindMe, stopRemind } from "../../model/reducers/reminder";
import "./reminder.css";
function Reminder(props) {
  const { remind, message, message2, stopRemind } = props;

  const text = "remind me";
  const [buttonText, setButtonText] = useState(text);

  const [isDisabled, setIsDisabled] = useState(false);

  //when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      //  setIsDisabled(true);
      setButtonText(text);
    }, 3000);
    return () => clearTimeout(timer);
  }, [buttonText]);

  const changeButtonText = (e) => {
    setButtonText("please wait");
    setIsDisabled(true);

    setTimeout(() => {
      enableButton();
    }, 3000); //run enableButton after 3secs
  };

  const enableButton = () => {
    setIsDisabled(false);
  };

  const handleClick = (e) => {
    changeButtonText();
    remind();
  };

  const resetButtonText = (e) => {
    setButtonText(text);
    setIsDisabled(false);
  };

  return (
    <div>
      <div>
        <h4>{message}</h4>
        <h5>{message2} </h5>
      </div>

      <button
        disabled={isDisabled}
        className={`button ${isDisabled && "buttonDisabled"}`}
        onClick={handleClick}
      >
        {buttonText}
      </button>

      <br />
      <button
        className="button1"
        onClick={(e) => [stopRemind(), resetButtonText()]}
      >
        Stop reminder
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    message: state.reminder.value,
    message2: state.reminder.value2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remind: () => dispatch(remindMe(ReminderActionType.remind)),
    stopRemind: () => dispatch(stopRemind(ReminderActionType.remind)),
  };
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(Reminder);
