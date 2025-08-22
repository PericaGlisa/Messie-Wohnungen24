import React, { useState, useMemo } from 'react';
import { ExternalLink } from 'lucide-react';
import SuccessStoryCard from './SuccessStoryCard';

interface SuccessStory {
  quote: string;
  author: string;
  location: string;
  rating: number;
  project: string;
  date: string;
  verified: boolean;
  duration: string;
  beforeImage: string;
  afterImage: string;
  helpfulVotes: number;
}

interface VirtualizedSuccessStoriesProps {
  stories: SuccessStory[];
  initialDisplayCount?: number;
}

const VirtualizedSuccessStories: React.FC<VirtualizedSuccessStoriesProps> = ({ 
  stories, 
  initialDisplayCount = 3 
}) => {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleStories = useMemo(() => {
    return stories.slice(0, displayCount);
  }, [stories, displayCount]);

  const handleShowMore = () => {
    const newCount = Math.min(displayCount + 3, stories.length);
    setDisplayCount(newCount);
    setIsExpanded(newCount >= stories.length);
  };

  const handleShowLess = () => {
    setDisplayCount(initialDisplayCount);
    setIsExpanded(false);
  };

  return (
    <div className="mb-16">
      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12">
        Erfolgsgeschichten unserer Kunden
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleStories.map((story, index) => (
          <SuccessStoryCard 
            key={`${story.author}-${story.date}`} 
            story={story} 
            index={index}
          />
        ))}
      </div>
      
      {/* Load More/Less Controls */}
      <div className="text-center mt-8 space-x-4">
        {!isExpanded && displayCount < stories.length && (
          <button 
            onClick={handleShowMore}
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <span>Mehr Erfolgsgeschichten anzeigen ({stories.length - displayCount} weitere)</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        )}
        
        {displayCount > initialDisplayCount && (
          <button 
            onClick={handleShowLess}
            className="inline-flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            <span>Weniger anzeigen</span>
          </button>
        )}
      </div>
      
      {/* Stats */}
      <div className="text-center mt-4 text-sm text-gray-600">
        Zeige {displayCount} von {stories.length} Erfolgsgeschichten
      </div>
    </div>
  );
};

export default React.memo(VirtualizedSuccessStories);