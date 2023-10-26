import {useState} from 'react'
import './index.css' // Import your CSS file

const Feedback = ({resources}) => {
  const {emojis, loveEmojiUrl} = resources
  const [showThankYou, setShowThankYou] = useState(false)

  // Function to handle emoji click
  const handleEmojiClick = () => {
    setShowThankYou(true)
  }

  return (
    <div className="feedback-container">
      {showThankYou ? (
        <div className="thank-you">
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
          <h2>Thank You!</h2>
          <p>
            We will use your feedback to improve our Customer Support
            Performance!
          </p>
        </div>
      ) : (
        <div>
          <h1>How Satisfied are you with our customer Support Performance?</h1>
          <ul className="emoji-container">
            {emojis.map(emoji => (
              <li key={emoji.id} className="emoji-list-item">
                <img
                  key={emoji.id}
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  onClick={handleEmojiClick}
                  className="emoji"
                />
                <p className="emoji-name">{emoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Feedback
