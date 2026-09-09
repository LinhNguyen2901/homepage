import { useState } from 'react';

interface InterestCardProps {
  icon: string;
  title: string;
  description: string;
  backImage: string;
}

function InterestCardFlip({ icon, title, description, backImage }: InterestCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`interest-card-container ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <div className="interest-card-inner">
        {/* Front */}
        <div className="card interest-card interest-card-front">
          <div className="interest-icon" aria-hidden="true">
            {icon}
          </div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

        {/* Back */}
        <div className="card interest-card interest-card-back">
          <img src={backImage} alt={title} className="interest-back-image" />
        </div>
      </div>
    </div>
  );
}

export default InterestCardFlip;
