import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

function Feedback() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }
    if (!feedback.trim()) {
      toast.error('Please provide feedback');
      return;
    }
    // Add feedback submission logic here
    toast.success('Thank you for your feedback!');
    setRating(0);
    setFeedback('');
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8">Provide Feedback</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rate your experience
            </label>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <button
                    type="button"
                    key={ratingValue}
                    className={`text-2xl focus:outline-none ${
                      ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <FaStar />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Feedback
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us about your experience..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;