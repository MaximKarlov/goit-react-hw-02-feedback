import FeedbackCss from '../Feedback/Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={FeedbackCss.feedback}>
      <div>
        {options.map((name, ind) => {
          return (
            <button
              className={FeedbackCss.btn}
              type="button"
              name={name}
              onClick={() => onLeaveFeedback(name)}
              key={ind}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

//  <button name={good} type="button" className={FeedbackCss.btn} onClick={() => onLeaveFeedback('good')}>
//           Good
//         </button>
//         <button
//           name={neutral}
//           type="button"
//           className={FeedbackCss.btn}
//           onClick={() => {
//             onLeaveFeedback('neutral');
//           }}
//         >
//           Neutral
//         </button>
//         <button name={bad} type="button" className={FeedbackCss.btn} onClick={() => onLeaveFeedback('bad')}>
//           Bad
//         </button>
