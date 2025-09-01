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
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Erfolgsgeschichten unserer Kunden
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Echte Erfahrungen von Menschen, denen wir geholfen haben, ihr Zuhause zurückzugewinnen
          </p>
        </div>
        
        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleStories.map((story, index) => (
            <SuccessStoryCard 
              key={`${story.author}-${story.date}`} 
              story={story} 
              index={index}
            />
          ))}
        </div>
        
        {/* Load More/Less Controls */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {!isExpanded && displayCount < stories.length && (
              <button 
                onClick={handleShowMore}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Mehr Erfolgsgeschichten anzeigen ({stories.length - displayCount} weitere)</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            )}
            
            {displayCount > initialDisplayCount && (
              <button 
                onClick={handleShowLess}
                className="inline-flex items-center space-x-2 bg-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Weniger anzeigen</span>
              </button>
            )}
          </div>
          
          {/* Stats */}
          <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{displayCount}</div>
              <div className="text-gray-600">von {stories.length} Erfolgsgeschichten</div>
              <div className="text-sm text-gray-500 mt-2">Alle Bewertungen sind verifiziert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(VirtualizedSuccessStories);