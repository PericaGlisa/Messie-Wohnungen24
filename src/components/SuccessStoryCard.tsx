import React from 'react';
import { Star, CheckCircle, User, MapPin } from 'lucide-react';
import LazyImage from './LazyImage';

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

interface SuccessStoryCardProps {
  story: SuccessStory;
  index: number;
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({ story, index }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
      {/* Before/After Images */}
      <div className="relative h-40 bg-gradient-to-r from-gray-200 to-gray-300">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 relative overflow-hidden">
            <LazyImage
              src={story.beforeImage}
              alt="Vorher"
              className="w-full h-full"
              priority={index < 3 ? 'high' : 'low'}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            />
            <div className="absolute bottom-1 left-1 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              VORHER
            </div>
          </div>
          <div className="w-1/2 relative overflow-hidden">
            <LazyImage
              src={story.afterImage}
              alt="Nachher"
              className="w-full h-full"
              priority={index < 3 ? 'high' : 'low'}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
            />
            <div className="absolute bottom-1 right-1 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
              NACHHER
            </div>
          </div>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
          {story.duration}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Header with verification and rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(story.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            {story.verified && (
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-xs text-green-600 font-medium">Verifiziert</span>
              </div>
            )}
          </div>
          <div className="text-xs text-gray-500">{story.date}</div>
        </div>
        
        {/* Quote */}
        <blockquote className="text-gray-700 italic mb-4 text-sm leading-relaxed">
          "{story.quote}"
        </blockquote>
        
        {/* Author Info */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-gray-800 text-sm">{story.author}</div>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <MapPin className="w-3 h-3" />
              <span>{story.location}</span>
            </div>
          </div>
        </div>
        
        {/* Project Type Badge */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 text-blue-700 px-3 py-2 rounded-lg text-xs font-medium mb-3">
          {story.project}
        </div>
        
        {/* Helpful Votes */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{story.helpfulVotes} fanden dies hilfreich</span>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Hilfreich?
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SuccessStoryCard);