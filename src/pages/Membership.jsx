import { FaCheck } from 'react-icons/fa';

const benefits = [
  "Weekly Opportunity Digest",
  "Access to Success Stories & Case Studies",
  "Live Q&A Sessions with Experts",
  "Exclusive Skill-Building Courses",
  "Peer Support Groups Access",
  "Monthly Development Challenges",
  "Early Access to Partner Offers",
  "Co-Working Sessions",
  "Annual Member Showcase Entry",
  "Recognition & Rewards Program"
];

function Membership() {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Membership Plans</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="px-8 py-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Premium Membership</h2>
                <div className="text-5xl font-bold mb-4">
                  ₹1,500<span className="text-xl text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-8">Unlock your full potential with our comprehensive membership</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                  Join Now
                </button>
              </div>
            </div>
            <div className="bg-blue-50 px-8 py-4">
              <p className="text-center text-blue-800">
                Special Offer: Sign up for 6 months and get 1 month free! (₹7,500 total)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;